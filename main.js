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


  const child = exec('/Users/ralf/Documents/work/go/src/github.com/rwirdemann/marketsync/ms', (error) => {
    console.log(error); 
  });
  
  win.loadURL("http://localhost:4000")
}

app.whenReady().then(() => {
  createWindow()
})