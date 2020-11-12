import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import getScrollBarSize from "rc-util/lib/getScrollBarSize"
import Icon, { IconNames } from "../icon"
import "./style"

const prefix = "adui-upload-img"

export interface IImgProps {
  [key: string]: any
  /**
   * 附加类名
   */
  className?: string
  /**
   * 指定右上角图标
   */
  icon?: IconNames
  /**
   * 右上角图标点击时的 handler
   */
  onIconClick?: () => void
  /**
   * 触发上传
   */
  onUpload?: () => void
  /**
   * 进度，传入 null 时表示不显示进度条
   */
  progress?: number | null
  /**
   * 上传成功后的图片地址
   */
  src?: string
}

export interface IImgState {
  previewing: boolean
}

/**
 * 旋转加载用于告知用户信息内容的加载状态，通常是即时、短时的。
 */
const Img: React.ForwardRefExoticComponent<IImgProps &
  React.RefAttributes<any>> = forwardRef(
  (
    {
      className,
      icon,
      onIconClick,
      onUpload,
      progress,
      src,
      ...otherProps
    }: IImgProps,
    ref
  ) => {
    const [previewing, setPreviewing] = useState(false)

    const uploadElementRef = useRef<HTMLDivElement>(null)

    const scrollbarWidth = useMemo(getScrollBarSize, [])

    const classSet = classNames(className, `${prefix}`, {
      [`${prefix}-uploaded`]: src,
      [`${prefix}-progressing`]: progress !== null,
    })

    const handleClick = () => {
      if (!src && onUpload) {
        onUpload()
      }
    }

    const resetScrollbarPadding = () => {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }

    const setScrollbarPadding = () => {
      const { innerWidth } = window
      const bodyIsOverflowing = document.body.clientWidth < innerWidth
      if (
        bodyIsOverflowing &&
        !document.body.style.paddingRight &&
        scrollbarWidth !== undefined
      ) {
        document.body.style.paddingRight = `${scrollbarWidth}px`
      }
      document.body.style.overflow = "hidden"
    }

    const handleCancelPreview = () => {
      setPreviewing(false)
      resetScrollbarPadding()
    }

    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (key === "Escape") {
        handleCancelPreview()
        window.removeEventListener("keydown", handleKeyDown)
      }
    }

    const handlePreview = () => {
      setPreviewing(true)
      setScrollbarPadding()
      window.addEventListener("keydown", handleKeyDown)
    }

    useImperativeHandle(ref, () => ({
      uploadElement: uploadElementRef.current,
      handlePreview,
      handleCancelPreview,
    }))

    return (
      <div role="none" className={classSet} {...otherProps}>
        <div className={`${prefix}-uploaded-inner`}>
          <img className={`${prefix}-file`} src={src} alt="img" />
          <div
            role="none"
            className={`${prefix}-cover`}
            onClick={handlePreview}
          />
          <div className={`${prefix}-remove`}>
            <Icon icon={icon || "delete-outlined"} onClick={onIconClick} />
          </div>
        </div>
        <div className={`${prefix}-unuploaded-inner`}>
          <div
            role="none"
            className={`${prefix}-upload-element`}
            onClick={handleClick}
            ref={uploadElementRef}
          >
            <Icon icon="add" className={`${prefix}-icon`} />
          </div>
          <div className={`${prefix}-progress`}>
            <i style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div
          className={classNames(`${prefix}-preview`, {
            [`${prefix}-preview-show`]: previewing,
          })}
          onClick={handleCancelPreview}
          role="none"
        >
          <div className={`${prefix}-preview-inner`}>
            <img
              alt="img"
              className={`${prefix}-preview-file`}
              src={src}
              onClick={e => e.stopPropagation()}
              role="none"
            />
            <Icon size={36} icon="cancel" color="#fff" interactive />
          </div>
        </div>
      </div>
    )
  }
)

Img.propTypes = {
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 指定右上角图标
   */
  icon: PropTypes.any,
  /**
   * 右上角图标点击时的 handler
   */
  onIconClick: PropTypes.func,
  /**
   * 触发上传
   */
  onUpload: PropTypes.func,
  /**
   * 进度，传入 null 时表示不显示进度条
   */
  progress: PropTypes.number,
  /**
   * 上传成功后的图片地址
   */
  src: PropTypes.string,
}

Img.defaultProps = {
  className: "",
  icon: "delete-outlined",
  onIconClick: () => {},
  onUpload: () => {},
  progress: null,
  src: "",
}

export default Img
