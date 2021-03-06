import path from 'path'
import { app, BrowserWindow } from 'electron'
// import 'regenerator-runtime/runtime'

// import { setup } from './setup'

const entryUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8080/index.html'
  : `file://${path.join(__dirname, 'index.html')}`

let window = null

app.on('ready', () => {
  window = new BrowserWindow({ fullscreen: true, webPreferences: { nodeIntegration: true } })
  window.loadURL(entryUrl)
  window.webContents.openDevTools()
  window.on('closed', () => (window = null))
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// setup()
