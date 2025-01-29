const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path')
var { exec } = require('child_process');

const debug = require('electron-debug');

//debug();

var ipc = require('electron').ipcRenderer;

require('electron-reload')(__dirname);

let mainWindow;

app.on('ready', () =>{

    mainWindow = new BrowserWindow({

        width: 470,
        height: 500,
        center: true,
        //fullscreen: true
        title: "SAScript",
        resizable: false,
        titleBarStyle: "hidden",

        webPreferences: {
            nodeIntegration: true
        }

    });

    mainWindow.loadURL(url.format({

        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true

    }));

    /*mainWindow.on('close', ()=>{

        exec();

    })*/

    mainWindow.setMenu(null);

})



