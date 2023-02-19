const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

// Create main window
function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: 'learning electron',
    width: isDev ? 1000 : 500,
    height: 600,
  });

  // open dev tools if not in production environment
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

// App is ready
app.whenReady().then(() => {
  createMainWindow()

  // Implement Menu
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  });
});

// Menu template
const menu = [
  {
    role: 'fileMenu',
  },
];

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})