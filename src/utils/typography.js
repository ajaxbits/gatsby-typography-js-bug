import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.5,
  headerFontFamily: [
    "Archivo Black",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Lora", "serif"],
  googleFonts: [
    {
      name: "Archivo Black",
      styles: ["400"],
    },
    {
      name: "Lora",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
})

export default typography
export const rhythm = typography.rhythm
