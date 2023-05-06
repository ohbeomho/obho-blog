import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import Markdown from "@pity/vite-plugin-react-markdown"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Markdown({
      wrapperComponentName: "ReactMarkdown",
      wrapperComponentPath: "./src/blogs"
    })
  ]
})
