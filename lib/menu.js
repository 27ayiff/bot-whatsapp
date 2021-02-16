const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/dngda/bot-whatsapp

Best regards, 

Danang.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

╔══✪〘 Fitur BOT 〙✪
╠➥ ${prefix}donate _atau_ ${prefix}donasi
╠➥ ${prefix}ping _atau_ ${prefix}speed
╠➥ ${prefix}menu _atau_ ${prefix}help
╠➥ ${prefix}owner
╠➥ ${prefix}stat
╠➥ ${prefix}tnc
║
╠══✪〘 Converter 〙✪
╠➥ ${prefix}getimage _atau_ ${prefix}stickertoimg
╠➥ ${prefix}sticker _atau_ ${prefix}stiker
╠➥ ${prefix}tts _atau_ ${prefix}say
╠➥ ${prefix}stickergiphy
╠➥ ${prefix}stickergif
╠➥ ${prefix}shortlink
╠➥ ${prefix}qrcode
╠➥ ${prefix}nulis
╠➥ ${prefix}hilih
╠➥ ${prefix}ytmp3
╠➥ ${prefix}meme
╠➥ ${prefix}play
║
╠══✪〘 Islam 〙✪
╠➥ ${prefix}listsurah
╠➥ ${prefix}infosurah
╠➥ ${prefix}jsholat
╠➥ ${prefix}alaudio
╠➥ ${prefix}tafsir
╠➥ ${prefix}surah
║
╠══✪〘 Nganu 〙✪
╠➥ ${prefix}katabijak
╠➥ ${prefix}artinama
╠➥ ${prefix}skripsi
╠➥ ${prefix}pantun
╠➥ ${prefix}apakah
╠➥ ${prefix}fakta
╠➥ ${prefix}quote
╠➥ ${prefix}kbbi
║
╠══✪〘 Hiburan 〙✪
╠➥ ${prefix}animebatch
╠➥ ${prefix}whatanime
╠➥ ${prefix}sreddit
╠➥ ${prefix}images
╠➥ ${prefix}anime
╠➥ ${prefix}memes
╠➥ ${prefix}kpop
║
╠══✪〘 Info 〙✪
╠➥ ${prefix}ceklokasi
╠➥ ${prefix}crjogja
╠➥ ${prefix}cuaca
╠➥ ${prefix}resi
║
╠══✪〘 Anti Toxic 〙✪
╠➥ ${prefix}katakasar
╠➥ ${prefix}klasemen
╠➥ ${prefix}reset
║
╠══✪〘 Bot Conf 〙✪
╠➥ ${prefix}tagall _atau_ ${prefix}alle
╠➥ ${prefix}join
╠➥ ${prefix}bye
╠➥ ${prefix}del
║
╚═〘 *SeroBot* 〙

Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

╔══✪〘 Admin ONLY 〙✪
╠➥ ${prefix}setprofile
╠➥ ${prefix}grouplink
╠➥ ${prefix}mutegrup
╠➥ ${prefix}promote
╠➥ ${prefix}~welcome~
╠➥ ${prefix}kickall
╠➥ ${prefix}demote
╠➥ ${prefix}revoke
╠➥ ${prefix}kick
╠➥ ${prefix}add
║
╠══✪〘 Owner Group ONLY 〙✪
╠➥ ${prefix}kickall
║
╚═〘 *SeroBot* 〙
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

Ovo/Gopay: 0823 1048 7958 atau https://saweria.co/dngda
Paypal: https://paypal.me/dngda

USDT (Trc20) : TB29LW37akLR5VmCkatK3ppxftUogSA8SU
Bitcoin : 14vHto4CCXmEwC6BVsifyVmMxxsGydRHCS

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk membantu orang yang membutuhkan (saya sendiri).

Terimakasih. ~Danang`
}