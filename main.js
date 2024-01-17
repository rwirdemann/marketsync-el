const { app, BrowserWindow } = require('electron')
const path = require('path')
const { exec } = require('child_process');
const controller = new AbortController();
const { signal } = controller;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  const msPath = path.join(__dirname, './ms')
  console.log("PATH: " + msPath)
  const child = exec(msPath, { signal }, (error) => {
    console.log("Error: " + error); 
  });
  
  win.loadURL("http://localhost:4000")
}

app.whenReady().then(() => {
  createWindow()
})

app.on('before-quit', () => {
  controller.abort();
  console.log("window-all-closed")
})