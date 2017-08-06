// const {app, BrowserWindow, ipcMain} = require('electron');
//
// app.on('ready', _ => {
//
//   let mainWindow = new BrowserWindow({
//     height: 400,
//     width: 400,
//     transparent: true,
//   });
//   // mainWindow.setIgnoreMouseEvents(true)
//
//   mainWindow.loadURL(`file://${__dirname}/countdown.html`)
//
//   mainWindow.on('closed', _ => {
//     mainWindow = null;
//   })
//
//   ipcMain.on('counter', (data)=> {
//     console.log(data);
//   })
// });

const {app, Tray, Menu, BrowserWindow} = require('electron');
const path = require('path');

const iconPath = path.join(__dirname, 'IconTemplate@2x.png');
let tray = null;
let win = null;
app.on('ready', () => {
  win = new BrowserWindow({show: false});
  tray = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Kintaro Tools',

    },
    {
      label: 'Bracket Tools',

    },
    {
      label: 'Grow Tools',


    },
    {
      label: 'Goro',
    },
    {
      label: 'Angular Tools',
      accelerator: 'Alt+Command+I',
      checked: true,
      submenu: [
        {
          label: 'Route Maker',
          click: function() {
            win.show();
            win.loadURL(`file://${__dirname}/countdown.html`);
            win.toggleDevTools();
          },
        },
        { label: 'Sketch To Components' },
        { label: 'Project Scaffolder' },
        { label: 'Copy collaborate' },
        { label: 'WSX Library' },
      ]
    },
    {
      label: 'WSX',
    },
    { label: 'Quit',
      accelerator: 'Command+Q',
      selector: 'terminate:',
    }
  ]);
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
});