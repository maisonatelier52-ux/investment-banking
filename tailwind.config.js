module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: { extend: { colors: { ink: "#111820", navy: "#06233f", gold: "#c59a43", muted: "#65717c", paper: "#f5f6f7" }, fontFamily: { serif: ["Georgia", "Times New Roman", "serif"], sans: ["Inter", "ui-sans-serif", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"], headline: ["Avenir Next", "Helvetica Neue", "Arial", "sans-serif"] }, keyframes: { ticker: { from: { transform: "translateX(-50%)" }, to: { transform: "translateX(0)" } } }, animation: { ticker: "ticker 32s linear infinite" } } },
  plugins: []
};
