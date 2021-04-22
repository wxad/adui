/**
 * Tooltip placement 与 PopTrigger builtinPlacements 的区别：
 *
 * PopTrigger 默认指定的是弹出框的边缘与元素的边缘对齐；
 * Tooltip 大部分情况不需要边缘对齐，需要的是弹出框的箭头指向元素正中间。
 * 而基于 Tooltip 封装的 Popover 默认使用边缘对齐，当然也可通过 prop 改变此特性。
 */
import { builtinPlacements } from "../pop-trigger/builtinPlacements"

interface IPlacementOption {
  alignEdge?: boolean
  autoAdjustPlacement?: boolean
}

const targetOffset = [0, 0]
const arrowWidth = 8
const horizontalArrowShift = 12
const verticalArrowShift = 10.5

const placements = {
  bottom: {
    offset: [0, 2],
    points: ["tc", "bc"],
    targetOffset,
  },
  bottomLeft: {
    offset: [-(horizontalArrowShift + arrowWidth), 2],
    points: ["tl", "bc"],
    targetOffset,
  },
  bottomRight: {
    offset: [horizontalArrowShift + arrowWidth, 2],
    points: ["tr", "bc"],
    targetOffset,
  },
  left: {
    offset: [-2, 0],
    points: ["cr", "cl"],
    targetOffset,
  },
  leftBottom: {
    offset: [-2, verticalArrowShift + arrowWidth],
    points: ["br", "cl"],
    targetOffset,
  },
  leftTop: {
    offset: [-2, -(verticalArrowShift + arrowWidth)],
    points: ["tr", "cl"],
    targetOffset,
  },
  right: {
    offset: [2, 0],
    points: ["cl", "cr"],
    targetOffset,
  },
  rightBottom: {
    offset: [2, verticalArrowShift + arrowWidth],
    points: ["bl", "cr"],
    targetOffset,
  },
  rightTop: {
    offset: [2, -(verticalArrowShift + arrowWidth)],
    points: ["tl", "cr"],
    targetOffset,
  },
  top: {
    offset: [0, -2],
    points: ["bc", "tc"],
    targetOffset,
  },
  topLeft: {
    offset: [-(horizontalArrowShift + arrowWidth), -2],
    points: ["bl", "tc"],
    targetOffset,
  },
  topRight: {
    offset: [horizontalArrowShift + arrowWidth, -2],
    points: ["br", "tc"],
    targetOffset,
  },
}

const getPlacements = (options: IPlacementOption) => {
  const toReturn: any =
    options && options.alignEdge ? builtinPlacements : placements

  if (options && options.autoAdjustPlacement) {
    toReturn.overflow = {
      adjustX: 1,
      adjustY: 1,
    }
  } else {
    toReturn.overflow = {
      adjustX: 0,
      adjustY: 0,
    }
  }
  return toReturn
}

export default getPlacements
