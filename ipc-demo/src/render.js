const {ipcRenderer} = require('electron');

let clicker = document.getElementById('clicker');

clicker.addEventListener('click', (e)=> {
  ipcRenderer.send('counter', e)
});
