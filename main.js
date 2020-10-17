const {app, BrowserWindow} = require('electron')

process.env.NODE_ENV = 'production'

const isDev = process.env.NODE_ENV !== 'production' ? true : false
const isMac = process.platform === 'darwin' ? true: false

let mainWindow

function createMainWindown(){
     mainWindow = new BrowserWindow({
        title: 'ImageShrink',
        width: 500,
        height: 600,
        icon: `${__dirname}/assets/icons/Icon_256x256.png`,
        resizable: isDev
    })

    mainWindow.loadFile(`${__dirname}/app/index.html`)
}

app.on('ready', createMainWindown)