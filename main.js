const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1050,
    height: 850,
    title: "StudyCycle",
    icon: path.join(__dirname, 'logo.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true              // Corr. #2: sandbox explícito (padrão Electron 28+)
    }
  });

  // Oculta o menu padrão no topo
  win.setMenuBarVisibility(false);

  // Corr. #3: Bloqueia navegação para URLs externas
  win.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('file://')) {
      event.preventDefault();
    }
  });

  // Corr. #3: Bloqueia abertura de novas janelas pelo app
  win.webContents.setWindowOpenHandler(({ url }) => {
    // URLs externas abrem no navegador do sistema, nunca dentro do app
    if (url.startsWith('https://') || url.startsWith('http://')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });

  // Carrega o arquivo HTML que construímos
  win.loadFile('index.html');
}

// Resolve o conflito Wayland + Vulkan no Linux (Electron 28+)
// Deve ser chamado ANTES de app.whenReady()
if (process.platform === 'linux') {
  app.disableHardwareAcceleration();
  app.commandLine.appendSwitch('disable-vulkan');
  app.commandLine.appendSwitch('disable-gpu-sandbox');
  app.commandLine.appendSwitch('use-gl', 'swiftshader'); // renderização por software, sem erros
}

app.whenReady().then(() => {
  if (process.platform === 'linux') {
    app.setAppUserModelId("com.studycycle.app");
    app.setDesktopName("studycycle.desktop");
  }
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
