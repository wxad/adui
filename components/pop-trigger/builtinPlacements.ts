const targetOffset = [0, 0]

export const builtinPlacements = {
  bottom: {
    offset: [0, 4],
    points: ["tc", "bc"],
    targetOffset,
  },
  bottomLeft: {
    offset: [0, 4],
    points: ["tl", "bl"],
    targetOffset,
  },
  bottomRight: {
    offset: [0, 4],
    points: ["tr", "br"],
    targetOffset,
  },
  left: {
    offset: [-4, 0],
    points: ["cr", "cl"],
    targetOffset,
  },
  leftBottom: {
    offset: [-4, 0],
    points: ["br", "bl"],
    targetOffset,
  },
  leftTop: {
    offset: [-4, 0],
    points: ["tr", "tl"],
    targetOffset,
  },
  right: {
    offset: [4, 0],
    points: ["cl", "cr"],
    targetOffset,
  },
  rightBottom: {
    offset: [4, 0],
    points: ["bl", "br"],
    targetOffset,
  },
  rightTop: {
    offset: [4, 0],
    points: ["tl", "tr"],
    targetOffset,
  },
  top: {
    offset: [0, -4],
    points: ["bc", "tc"],
    targetOffset,
  },
  topLeft: {
    offset: [0, -4],
    points: ["bl", "tl"],
    targetOffset,
  },
  topRight: {
    offset: [0, -4],
    points: ["br", "tr"],
    targetOffset,
  },
}

export default builtinPlacements
