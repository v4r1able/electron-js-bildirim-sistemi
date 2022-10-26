const electron = require("electron");
const adres = require("url");
const yol = require("path");

const { app, BrowserWindow, Notification } = electron;

let mainWindow;

app.on("ready", () => {

    let mainWindow = new BrowserWindow(
        {
            "title":"leventemre.com - deneme bildirim uygulaması",
            autoHideMenuBar: true,
            webPreferences: {
                nodeIntegration: true
            }
    });

    mainWindow.loadURL(
            adres.format({
            pathname: yol.join(__dirname, "sayfalar/index.html"),
            protocol: "file:",
            slashes: true,
            fullscreen: true
            })
    );
    
    mainWindow.maximize();

    mainWindow.show();

    let bildirim_icon = yol.join(__dirname, "/favicon.ico");
    let baslik = "Bildirim Başlığı";
    let icerik = "Bildirim içeriği";

    const notification = {
      title: baslik,
      body: icerik,
      icon: bildirim_icon,
      hasReply: true
    }

    const bildirimolustur = new Notification(notification);

    bildirimolustur.show();

    mainWindow.on("close", () => {
    app.quit();
    });

});
