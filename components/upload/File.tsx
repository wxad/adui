import React, { forwardRef, useImperativeHandle, useRef } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Icon, { IconNames } from "../icon"
import Motion from "../motion"
import "./style"

const prefix = "adui-upload-file"

export interface IFileProps {
  [key: string]: any
  /**
   * 附加类名
   */
  className?: string
  /**
   * 指定右图标
   */
  icon?: IconNames
  /**
   * 文件名，此 Prop 会控制 Upload.File 显示与否
   */
  name?: string
  /**
   * 右图标点击时的 handler
   */
  onIconClick?: () => void
  /**
   * 进度，传入 null 时表示不显示进度条
   */
  progress?: number | null
  /**
   * 上传成功后的文件地址，传入后文字会变为链接样式
   */
  src?: string
}

/**
 * 旋转加载用于告知用户信息内容的加载状态，通常是即时、短时的。
 */
const File: React.ForwardRefExoticComponent<
  IFileProps & React.RefAttributes<any>
> = forwardRef(
  (
    {
      className,
      icon,
      name,
      onIconClick,
      progress,
      src,
      ...otherProps
    }: IFileProps,
    ref
  ) => {
    const uploadElementRef = useRef<HTMLDivElement>(null)

    const classSet = classNames(className, `${prefix}`, {
      [`${prefix}-progressing`]: progress !== null,
    })

    useImperativeHandle(ref, () => ({
      uploadElement: uploadElementRef.current,
    }))

    return (
      <Motion transition="zoom">
        {!!name && (
          <div role="none" className={classSet} {...otherProps}>
            {src ? (
              <a
                className={`${prefix}-link`}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                title={name}
              >
                {name}
              </a>
            ) : (
              <div className={`${prefix}-name`} title={name}>
                {name}
              </div>
            )}
            <Icon
              icon={icon || "cancel"}
              onClick={onIconClick}
              className={`${prefix}-icon`}
            />
            <div className={`${prefix}-progress`}>
              <i style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}
      </Motion>
    )
  }
)

File.displayName = "File"

File.propTypes = {
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 指定右图标
   */
  icon: PropTypes.any,
  /**
   * 文件名，此 Prop 会控制 Upload.File 显示与否
   */
  name: PropTypes.string,
  /**
   * 右图标点击时的 handler
   */
  onIconClick: PropTypes.func,
  /**
   * 进度，传入 null 时表示不显示进度条
   */
  progress: PropTypes.number,
  /**
   * 上传成功后的文件地址
   */
  src: PropTypes.string,
}

File.defaultProps = {
  className: "",
  icon: "cancel",
  name: "",
  onIconClick: () => {},
  progress: null,
  src: "",
}

export default File
