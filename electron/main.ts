import {app, BrowserWindow, screen} from 'electron'
import path from 'node:path'
import installExtension, {REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS} from 'electron-devtools-installer';

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist')
process.env.PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')


let win: BrowserWindow | null
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    center: true,
    roundedCorners: true,
    // show: false,
    darkTheme: true,
    width: width,
    height: height,
    // icon: path.join(process.env.PUBLIC, ''),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  win.maximize();
  win.webContents.openDevTools();
  // win.show();
  //hidden menu
  win.setMenuBarVisibility(false)

  // globalShortcut.register('CommandOrControl+D', () => {
  //   if(win?.webContents.isDevToolsOpened()) {
  //     win?.webContents.closeDevTools();
  //   }else{
  //     win?.webContents.openDevTools();
  //   }
  // });

  // win.webContents.once("dom-ready", async () => {
  //   await installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS])
  //       .then((name) => console.log(`Added Extension:  ${name}`))
  //       .catch((err) => console.log("An error occurred: ", err))
  //       .finally(() => {
  //         win?.webContents.openDevTools();
  //       });
  // });

  installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS])
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));


  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, 'index.html'))
  }
}

app.on('window-all-closed', () => {
  win = null
})

app.whenReady().then(createWindow)
