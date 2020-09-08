module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./src/**/*.html",
      "./src/**/*.sass",
      "./src/**/*.ts",
      "./src/**/*.tsx"
    ]
  }
}