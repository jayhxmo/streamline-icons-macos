console.log('Hello');

import path from 'path';
import fs from 'fs';
import { app, BrowserWindow } from 'electron';

let mainWindow;

console.log(path.join(__dirname, 'addTitleBar.js'));

const assetsPath = path.join(__dirname, 'assets/icons/mac/');
console.log(assetsPath);
fs.readdir(assetsPath, function(err, items) {
	console.log(items);

	for (var i = 0; i < items.length; i++) {
		console.log(items[i]);
	}
});

const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: 1280,
		height: 720,
		minWidth: 800,
		minHeight: 480,
		backgroundColor: '#f7f7f7',
		titleBarStyle: 'hidden',
		show: false,
		webPreferences: {
			nodeIntegration: false
			// preload: path.join(__dirname, 'addTitleBar.js')
			// preload: `document.body.innerHTML += '<div id="titleBar" style="-webkit-app-region: drag; position: fixed; z-index: 99999999; top: 0; left: 0; width: 100vh; height: 32px; border: 1px solid red;"></>';`
		},
		// icon: path.join(__dirname, 'assets/icons/mac/icon.icns')
		icon: path.join(__dirname, 'assets/icons/png/64x64.png')
	});

	mainWindow.loadURL(`https://app.streamlineicons.com`);

	mainWindow.setTitle('Streamline Icons');
	mainWindow.on('page-title-updated', function(e) {
		e.preventDefault();
	});

	// });

	// mainWindow.webContents.on('dom-ready', function(e) {
	mainWindow.webContents.on('did-finish-load', () => {
		mainWindow.webContents.insertCSS(
			'.Icon_Menu, .Icons_Container { padding-top: 10px; !important; } ' +
				'.IconSideMenu { padding-top: calc(1vh + 10px) !important; }'
		);

		// mainWindow.webContents.executeJavaScript('alert(3);');
		// mainWindow.webContents.executeJavaScript(`alert(4);`);
		// mainWindow.webContents.executeJavaScript(`alert(5);`);
	});

	mainWindow.webContents.on('dom-ready', () => {
		mainWindow.webContents.executeJavaScript(
			`
				let titleBar = document.createElement('div');
				titleBar.style='-webkit-app-region: drag; position: fixed; z-index: 99999999; top: 0; left: 0; width: 100vw; height: 24px;'
				document.body.appendChild(titleBar);
			`
		);
		// `document.body.innerHTML += '<div id="titleBar" style="-webkit-app-region: drag; position: fixed; z-index: 99999999; top: 0; left: 0; width: 100vh; height: 32px; border: 1px solid red;"></>\';`
	});

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
	});
	// console.log(mainWindow);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	console.log('window is all closed');
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});
