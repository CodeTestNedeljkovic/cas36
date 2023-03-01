// let http = require("http");

// console.log(http);

// const path = require("path");

// const testPath = 'C:\Users\QA37.DESKTOP-0B3SSPL\Desktop\cas36\cas36\tekst.txt';

// const baseName = path.basename(testPath);
// console.log(baseName);
// const extension = path.extname(testPath);
// console.log(extension);
// const location = path.dirname(testPath);
// console.log(location);
// const pathInfo = path.parse(testPath);
// console.log(pathInfo);
// console.log(pathInfo.ext);

// const os = require("os");

// console.log(os.platform());

// console.log(os.totalmem());
// console.log(os.freemem());

// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.endianness());

// const fs = require("fs");

// fs.readFile("tekst.txt", "utf-8", (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log('sadrzaj: ');
//     console.log(data);
// });

// const sadrzaj = 'Neki novi sadrzaj koji ce da se upise: ';
// const argument = process.argv[2];

// fs.writeFile("tekst1.txt", sadrzaj + argument, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('ispisan je novi sadrzaj');
// });

// const url = require("url");

// const testUrl = new URL("http://127.0.0.1:5500/cas36/index.html?pretraga=marko&druga=markovic");

// console.log(testUrl.host);
// console.log(testUrl.hostname);
// console.log(testUrl.port);
// console.log(testUrl.href);
// console.log(testUrl.pathname);
// console.log(testUrl.search);
// testUrl.searchParams.forEach((name, value) => {
//     console.log(name);
//     console.log(value);
// });


// const http = require("http");

// const server = http.createServer((req, res) => {

// });

// server.listen("5000", () => {
//     console.log('pozvan je port 5000');
// });

// const express = require("express");
// const fs = require("fs");

// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     fs.readFile("index.html", "utf-8", (err, data) => {
//         if (err) {
//             throw err;
//         }
//         res.send(data);
//     });
// });
// app.get('/contact', (req, res) => {
//     fs.readFile("pages/contact.html", "utf-8", (err, data) => {
//         if (err) {
//             throw err;
//         }
//         res.send(data);
//     });
// });
// app.listen(port, () => {
//     console.log('aplikacija je spremna za slusanje...');
// });

const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
korisnici = [{name: 'Marko', id: 1}, {name: 'Nikola', id: 2}];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
});
app.get('/users', (req, res) => {
    res.send(JSON.stringify(korisnici));
});
app.listen(port, () => {
    console.log('listening...');
});
// pages/contact.html
// pages\contact.html