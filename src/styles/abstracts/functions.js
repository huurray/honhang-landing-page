const hexToRgb = (hex) => {
  // http://stackoverflow.com/a/5624139
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
};

export const rgba = (hex, alpha) => {
  const color = hexToRgb(hex);
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
};

export const functions = {
  hexToRgb,
  rgba
};

export class Colors {
  constructor(name, colors) {
    this.name = name;
    this.colors = colors;
    this.baseColors = {
      COLOR_WHITE: "#fff",
      COLOR_GREY_LIGHT_1: "#faf9f9",
      COLOR_GREY_LIGHT_2: "#f4f2f2",
      COLOR_GREY_LIGHT_3: "#f0eeee",
      COLOR_GREY_LIGHT_4: "#ccc",
      COLOR_GREY_DARK_1: "#333",
      COLOR_GREY_DARK_2: "#777",
      COLOR_GREY_DARK_3: "#999"
    };
  }

  getColors() {
    return { ...this.baseColors, ...this.colors };
  }
}