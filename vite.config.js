import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const REPO_NAME = 'GA04-ToDoApp'; 

export default defineConfig({
  plugins: [react()],
  

  base: `/${REPO_NAME}/`, 
  
 
  build: {
  
    outDir: 'docs', 

    emptyOutDir: true, 
  }
})