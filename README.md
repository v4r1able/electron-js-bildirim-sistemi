# Electron.js Bildirim Sistemi
Electron.js masaüstü uygulaması için basit bildirim sistemi örneği

İlgili paylaşım: https://leventemre.com/node-js/electron-js-bildirim-sistemi

Kurulum öncesinde electron kurulumunu yapın
-----------------------
```
npm install electron --save
```

Çalıştırın
-----------------------
```
npm start
```

Basit bildirim -yani notification- örnek kodları
-----------------------
```javascript
let baslik = "Bildirim Başlığı";
let icerik = "Bildirim içeriği";

const notification = {
 title: baslik,
 body: icerik,
 hasReply: true // Cevaplama ayarı
}

const bildirimolustur = new Notification(notification);

bildirimolustur.show();
```

Notification fonksiyonu içine farklı ayarlamalar yapabilirsiniz: ses ekleme, cevaplamayı ayarlama, bekleme vb.

Bildirimin üstüne tıklandığında işleme almak istersek:
```javascript
bildirimolustur.on('click', (event, arg) => {
console.log("bildirime tıklandı");
});
```
