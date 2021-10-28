/* eslint-disable */
export const rgb2hex = (r: number, g: number, b: number) => {
  let red = r.toString(16).toUpperCase()
  let green = g.toString(16).toUpperCase()
  let blue = b.toString(16).toUpperCase()
  red = red.length === 1 ? `0${red}` : red
  green = green.length === 1 ? `0${green}` : green
  blue = blue.length === 1 ? `0${blue}` : blue
  return `#${red}${green}${blue}`
}

export const hsb2hsl = (a: number, b: number, c: number) => {
  return [a, (b * c) / ((a = (2 - b) * c) < 1 ? a : 2 - a), a / 2]
}

export const hsl2hsb = (a: number, b: number, c: number) => {
  b *= c < 0.5 ? c : 1 - c
  return [a, (2 * b) / (c + b) || 0, c + b]
}

export const hsl2rgb = (h: number, s: number, l: number) => {
  const C = (1 - Math.abs(2 * l - 1)) * s
  const X = C * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - C / 2
  let [R, G, B]: any =
    (h >= 0 && h < 60 && [C, X, 0]) ||
    (h >= 60 && h < 120 && [X, C, 0]) ||
    (h >= 120 && h < 180 && [0, C, X]) ||
    (h >= 180 && h < 240 && [0, X, C]) ||
    (h >= 240 && h < 300 && [X, 0, C]) ||
    (h >= 300 && h < 360 && [C, 0, X])
  ;[R, G, B] = [(R + m) * 255, (G + m) * 255, (B + m) * 255]
  return [Math.round(R), Math.round(G), Math.round(B)]
}

export const hsb2hex = (
  h?: number | null,
  s?: number | null,
  b?: number | null
) => {
  if (
    h === null ||
    h === undefined ||
    s === null ||
    s === undefined ||
    b === null ||
    b === undefined
  ) {
    return ""
  }
  const [hue, saturation, brightness] = hsb2hsl(h, s, b)
  const [red, green, blue] = hsl2rgb(hue, saturation || 0, brightness || 0)
  return rgb2hex(red, green, blue)
}

export const rgb2hsl = (r: number, g: number, b: number) => {
  let min,
    max,
    i,
    l,
    s,
    maxcolor,
    h,
    rgb = []
  rgb[0] = r / 255
  rgb[1] = g / 255
  rgb[2] = b / 255
  min = rgb[0]
  max = rgb[0]
  maxcolor = 0
  for (i = 0; i < rgb.length - 1; i++) {
    if (rgb[i + 1] <= min) {
      min = rgb[i + 1]
    }
    if (rgb[i + 1] >= max) {
      max = rgb[i + 1]
      maxcolor = i + 1
    }
  }
  if (maxcolor == 0) {
    h = (rgb[1] - rgb[2]) / (max - min)
  }
  if (maxcolor == 1) {
    h = 2 + (rgb[2] - rgb[0]) / (max - min)
  }
  if (maxcolor == 2) {
    h = 4 + (rgb[0] - rgb[1]) / (max - min)
  }
  if (!h || isNaN(h)) {
    h = 0
  }
  h = h * 60
  if (h < 0) {
    h = h + 360
  }
  l = (min + max) / 2
  if (min == max) {
    s = 0
  } else {
    if (l < 0.5) {
      s = (max - min) / (max + min)
    } else {
      s = (max - min) / (2 - max - min)
    }
  }
  s = s
  return { h: h, s: s, l: l }
}

export const w3trim = (x: any) => x.replace(/^\s+|\s+$/g, "")

export const getColorArr = (x: any) => {
  if (x == "names") {
    return [
      "AliceBlue",
      "AntiqueWhite",
      "Aqua",
      "Aquamarine",
      "Azure",
      "Beige",
      "Bisque",
      "Black",
      "BlanchedAlmond",
      "Blue",
      "BlueViolet",
      "Brown",
      "BurlyWood",
      "CadetBlue",
      "Chartreuse",
      "Chocolate",
      "Coral",
      "CornflowerBlue",
      "Cornsilk",
      "Crimson",
      "Cyan",
      "DarkBlue",
      "DarkCyan",
      "DarkGoldenRod",
      "DarkGray",
      "DarkGrey",
      "DarkGreen",
      "DarkKhaki",
      "DarkMagenta",
      "DarkOliveGreen",
      "DarkOrange",
      "DarkOrchid",
      "DarkRed",
      "DarkSalmon",
      "DarkSeaGreen",
      "DarkSlateBlue",
      "DarkSlateGray",
      "DarkSlateGrey",
      "DarkTurquoise",
      "DarkViolet",
      "DeepPink",
      "DeepSkyBlue",
      "DimGray",
      "DimGrey",
      "DodgerBlue",
      "FireBrick",
      "FloralWhite",
      "ForestGreen",
      "Fuchsia",
      "Gainsboro",
      "GhostWhite",
      "Gold",
      "GoldenRod",
      "Gray",
      "Grey",
      "Green",
      "GreenYellow",
      "HoneyDew",
      "HotPink",
      "IndianRed",
      "Indigo",
      "Ivory",
      "Khaki",
      "Lavender",
      "LavenderBlush",
      "LawnGreen",
      "LemonChiffon",
      "LightBlue",
      "LightCoral",
      "LightCyan",
      "LightGoldenRodYellow",
      "LightGray",
      "LightGrey",
      "LightGreen",
      "LightPink",
      "LightSalmon",
      "LightSeaGreen",
      "LightSkyBlue",
      "LightSlateGray",
      "LightSlateGrey",
      "LightSteelBlue",
      "LightYellow",
      "Lime",
      "LimeGreen",
      "Linen",
      "Magenta",
      "Maroon",
      "MediumAquaMarine",
      "MediumBlue",
      "MediumOrchid",
      "MediumPurple",
      "MediumSeaGreen",
      "MediumSlateBlue",
      "MediumSpringGreen",
      "MediumTurquoise",
      "MediumVioletRed",
      "MidnightBlue",
      "MintCream",
      "MistyRose",
      "Moccasin",
      "NavajoWhite",
      "Navy",
      "OldLace",
      "Olive",
      "OliveDrab",
      "Orange",
      "OrangeRed",
      "Orchid",
      "PaleGoldenRod",
      "PaleGreen",
      "PaleTurquoise",
      "PaleVioletRed",
      "PapayaWhip",
      "PeachPuff",
      "Peru",
      "Pink",
      "Plum",
      "PowderBlue",
      "Purple",
      "RebeccaPurple",
      "Red",
      "RosyBrown",
      "RoyalBlue",
      "SaddleBrown",
      "Salmon",
      "SandyBrown",
      "SeaGreen",
      "SeaShell",
      "Sienna",
      "Silver",
      "SkyBlue",
      "SlateBlue",
      "SlateGray",
      "SlateGrey",
      "Snow",
      "SpringGreen",
      "SteelBlue",
      "Tan",
      "Teal",
      "Thistle",
      "Tomato",
      "Turquoise",
      "Violet",
      "Wheat",
      "White",
      "WhiteSmoke",
      "Yellow",
      "YellowGreen",
    ]
  }
  if (x == "hexs") {
    return [
      "f0f8ff",
      "faebd7",
      "00ffff",
      "7fffd4",
      "f0ffff",
      "f5f5dc",
      "ffe4c4",
      "000000",
      "ffebcd",
      "0000ff",
      "8a2be2",
      "a52a2a",
      "deb887",
      "5f9ea0",
      "7fff00",
      "d2691e",
      "ff7f50",
      "6495ed",
      "fff8dc",
      "dc143c",
      "00ffff",
      "00008b",
      "008b8b",
      "b8860b",
      "a9a9a9",
      "a9a9a9",
      "006400",
      "bdb76b",
      "8b008b",
      "556b2f",
      "ff8c00",
      "9932cc",
      "8b0000",
      "e9967a",
      "8fbc8f",
      "483d8b",
      "2f4f4f",
      "2f4f4f",
      "00ced1",
      "9400d3",
      "ff1493",
      "00bfff",
      "696969",
      "696969",
      "1e90ff",
      "b22222",
      "fffaf0",
      "228b22",
      "ff00ff",
      "dcdcdc",
      "f8f8ff",
      "ffd700",
      "daa520",
      "808080",
      "808080",
      "008000",
      "adff2f",
      "f0fff0",
      "ff69b4",
      "cd5c5c",
      "4b0082",
      "fffff0",
      "f0e68c",
      "e6e6fa",
      "fff0f5",
      "7cfc00",
      "fffacd",
      "add8e6",
      "f08080",
      "e0ffff",
      "fafad2",
      "d3d3d3",
      "d3d3d3",
      "90ee90",
      "ffb6c1",
      "ffa07a",
      "20b2aa",
      "87cefa",
      "778899",
      "778899",
      "b0c4de",
      "ffffe0",
      "00ff00",
      "32cd32",
      "faf0e6",
      "ff00ff",
      "800000",
      "66cdaa",
      "0000cd",
      "ba55d3",
      "9370db",
      "3cb371",
      "7b68ee",
      "00fa9a",
      "48d1cc",
      "c71585",
      "191970",
      "f5fffa",
      "ffe4e1",
      "ffe4b5",
      "ffdead",
      "000080",
      "fdf5e6",
      "808000",
      "6b8e23",
      "ffa500",
      "ff4500",
      "da70d6",
      "eee8aa",
      "98fb98",
      "afeeee",
      "db7093",
      "ffefd5",
      "ffdab9",
      "cd853f",
      "ffc0cb",
      "dda0dd",
      "b0e0e6",
      "800080",
      "663399",
      "ff0000",
      "bc8f8f",
      "4169e1",
      "8b4513",
      "fa8072",
      "f4a460",
      "2e8b57",
      "fff5ee",
      "a0522d",
      "c0c0c0",
      "87ceeb",
      "6a5acd",
      "708090",
      "708090",
      "fffafa",
      "00ff7f",
      "4682b4",
      "d2b48c",
      "008080",
      "d8bfd8",
      "ff6347",
      "40e0d0",
      "ee82ee",
      "f5deb3",
      "ffffff",
      "f5f5f5",
      "ffff00",
      "9acd32",
    ]
  }
}

export const color2hsb = (c: any) => {
  const hsl = color2hsl(c)
  return hsl2hsb(hsl.h, hsl.s, hsl.l)
}

export const color2hsl = (c: any) => {
  let x,
    y,
    typ,
    arr = [],
    arrlength,
    i,
    match,
    rgb: any,
    colornames: any = [],
    colorhexs: any = []
  c = w3trim(c.toLowerCase())
  x = c.substr(0, 1).toUpperCase()
  y = c.substr(1)
  if (
    (x == "R" ||
      x == "Y" ||
      x == "G" ||
      x == "C" ||
      x == "B" ||
      x == "M" ||
      x == "W") &&
    !isNaN(y)
  ) {
    if (c.length == 6 && c.indexOf(",") == -1) {
    } else {
      c = "ncol(" + c + ")"
    }
  }
  if (c.length != 3 && c.length != 6 && !isNaN(c)) {
    c = "ncol(" + c + ")"
  }
  if (c.indexOf(",") > 0 && c.indexOf("(") == -1) {
    c = "ncol(" + c + ")"
  }
  if (
    c.substr(0, 3) == "rgb" ||
    c.substr(0, 3) == "hsl" ||
    c.substr(0, 3) == "hwb" ||
    c.substr(0, 4) == "ncol" ||
    c.substr(0, 4) == "cmyk"
  ) {
    if (c.substr(0, 4) == "ncol") {
      if (c.split(",").length == 4 && c.indexOf("ncola") == -1) {
        c = c.replace("ncol", "ncola")
      }
      typ = "ncol"
      c = c.substr(4)
    } else if (c.substr(0, 4) == "cmyk") {
      typ = "cmyk"
      c = c.substr(4)
    } else {
      typ = c.substr(0, 3)
      c = c.substr(3)
    }
    arrlength = 3
    if (c.substr(0, 1).toLowerCase() == "a") {
      arrlength = 4
      c = c.substr(1)
    } else if (typ == "cmyk") {
      arrlength = 4
      if (c.split(",").length == 5) {
        arrlength = 5
      }
    }
    c = c.replace("(", "")
    c = c.replace(")", "")
    arr = c.split(",")
    if (typ == "rgb") {
      for (i = 0; i < arrlength; i++) {
        if (arr[i] == "" || arr[i] == " ") {
          arr[i] = "0"
        }
        if (arr[i].indexOf("%") > -1) {
          arr[i] = arr[i].replace("%", "")
          arr[i] = Number(arr[i] / 100)
          if (i < 3) {
            arr[i] = Math.round(arr[i] * 255)
          }
        }
        if (parseInt(arr[i]) > 255) {
          arr[i] = 255
        }
        if (i < 3) {
          arr[i] = parseInt(arr[i])
        }
        if (i == 3 && Number(arr[i]) > 1) {
          arr[i] = 1
        }
      }
      rgb = { r: arr[0], g: arr[1], b: arr[2] }
    }
    if (typ == "hsl" || typ == "hwb" || typ == "ncol") {
      while (arr.length < arrlength) {
        arr.push("0")
      }
      if (typ == "hsl" || typ == "hwb") {
        if (parseInt(arr[0]) >= 360) {
          arr[0] = 0
        }
      }
      for (i = 1; i < arrlength; i++) {
        if (arr[i].indexOf("%") > -1) {
          arr[i] = arr[i].replace("%", "")
          arr[i] = Number(arr[i])
          arr[i] = arr[i] / 100
        } else {
          arr[i] = Number(arr[i])
        }
        if (Number(arr[i]) > 1) {
          arr[i] = 1
        }
        if (Number(arr[i]) < 0) {
          arr[i] = 0
        }
      }
    }
    if (typ == "cmyk") {
      while (arr.length < arrlength) {
        arr.push("0")
      }
      for (i = 0; i < arrlength; i++) {
        if (arr[i].indexOf("%") > -1) {
          arr[i] = arr[i].replace("%", "")
          arr[i] = Number(arr[i])
          arr[i] = arr[i] / 100
        } else {
          arr[i] = Number(arr[i])
        }
        if (Number(arr[i]) > 1) {
          arr[i] = 1
        }
        if (Number(arr[i]) < 0) {
          arr[i] = 0
        }
      }
    }
  } else if (c.substr(0, 3) == "ncs") {
  } else {
    match = false
    colornames = getColorArr("names")
    for (i = 0; i < colornames.length; i++) {
      if (c.toLowerCase() == colornames[i].toLowerCase()) {
        colorhexs = getColorArr("hexs")
        match = true
        rgb = {
          r: parseInt(colorhexs[i].substr(0, 2), 16),
          g: parseInt(colorhexs[i].substr(2, 2), 16),
          b: parseInt(colorhexs[i].substr(4, 2), 16),
        }
        break
      }
    }
    if (match == false) {
      c = c.replace("#", "")
      if (c.length == 3) {
        c =
          c.substr(0, 1) +
          c.substr(0, 1) +
          c.substr(1, 1) +
          c.substr(1, 1) +
          c.substr(2, 1) +
          c.substr(2, 1)
      }
      for (i = 0; i < c.length; i++) {}
      arr[0] = parseInt(c.substr(0, 2), 16)
      arr[1] = parseInt(c.substr(2, 2), 16)
      arr[2] = parseInt(c.substr(4, 2), 16)
      rgb = {
        r: arr[0],
        g: arr[1],
        b: arr[2],
      }
    }
  }
  return rgb2hsl(rgb.r, rgb.g, rgb.b)
}
