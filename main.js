const { app, Menu, BrowserWindow, nativeTheme } = require('electron')

const createWindow = () => {
  nativeTheme.themeSource = 'dark'
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: '',
    autoHideMenuBar: true,
    resizable: false
  })

  const path = require('path')

    win.loadFile(path.join(__dirname, 'src/views/index.html'))
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
/* template do menu
const templatemenu = [
  {
    label: 'Configurações'
  },
  {
    Label: 'Ajuda'
  },
  {
    Label: 'Sobre'
  },
  {
    Label: 'Sair'
  }
]*/