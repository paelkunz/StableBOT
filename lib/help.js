function help() {
    return `
╔══✪〘 INFORMATION 〙✪══
║
╠➥ StableBOT
╠➥ 1.5{Beta}
╠➥ CREATOR : TobyG74
╠➥ Recode by: PaelKunz
╠➥ wa.me/6281213082150
╠➥ *JANGAN SPAM COMMAND! Spam=Ban!*
╠══✪〘 LIST MENU 〙✪══
║
╠➥ *#ownermenu*
╠➥ *#adminmenu*
╠➥ *#groupmenu*
╠➥ *#praymenu*
╠➥ *#nsfwmenu(Not Working)*
╠➥ *#mediamenu*
╠➥ *#animemenu(ERROR!)*
╠➥ *#kerangmenu*
╠➥ *#downloadmenu(ApiKEY ERROR!)*
╠➥ *#othermenu*
║
╠══✪〘 OTHER 〙✪══
║
╠➥ *#bugreport [teks]*
╠➥ *#listblock*
╠➥ *#listbanned*
╠➥ *#listgroup*
╠➥ *#iklan*
╠➥ *#info*
╠➥ *#limit*
╠➥ *#snk*
╠➥ *#readme*
╠➥ *#donate*
╠➥ *#ping*
╠➥ *#StableBOTgroup*
╠➥ *#StableBOTadmin*
╠➥ *#owner*
║
╚═〘 StableBOT 〙
`
}
exports.help = help()
function ownercmd() {
    return `
╔══✪〘 OWNER 〙✪══
║
╠➥ *#block 62858xxxxx*
╠➥ *#unblock 62858xxxxx*
╠➥ *#addadmin @tagmember*
╠➥ *#deladmin @tagmember*
╠➥ *#restart(only work if using PM2)*
╠➥ *#ekickall*
╠➥ *#banchat*
╠➥ *#unbanchat*
╠➥ *#ban [Tag user]*
╠➥ *#uba [Tag user]*
╠➥ *#bc*
║
╚═〘 StableBOT 〙`
}
exports.ownercmd = ownercmd()
function admincmd() {
    return `
╔══✪〘 ADMIN 〙✪══
║
╠➥ *#mute*
╠➥ *#unmute*
╠➥ *#ban @tagmember*
╠➥ *#unban @tagmember*
╠➥ *#spamcall [81273xxxx]*
╠➥ *#kickall*
╠➥ *#oleave*
╠➥ *#opromote*
╠➥ *#odemote*
╠➥ *#odelete*
╠➥ *#oadd 62813xxxxx*
╠➥ *#okickall*
╠➥ *#otagall*
║
╚═〘 StableBOT 〙`
}
exports.admincmd = admincmd()
function nsfwcmd() {
    return `
╔══✪〘 NSFW(Not Working) 〙✪══
║
╠➥ *#randomhentai*
╠➥ *#randomnsfwneko*
╠➥ *#randomtrapnime*
╠➥ *#nhentai [kode]*
╠➥ *#nhder [kode]*
╠➥ *#xnxx [linkXnxx]*
║
╚═〘 StableBOT 〙`
}
exports.nsfwcmd = nsfwcmd()
function praycmd() {
    return `
╔══✪〘 PRAY 〙✪══
║
╠➥ *#quran [urutan surah]*
╠➥ *#infosurah [nama surah]*
╠➥ *#tafsir [nama surah] [ayat]*
╠➥ *#jadwalsholat [daerah]*
╠➥ *#listsurah*
╠➥ *#listdaerah*
║
╚═〘 StableBOT BOT 〙`
}
exports.praycmd = praycmd()
function kerangcmd() {
    return `
╔══✪〘 KERANG AJAIB 〙✪══
║
╠➥ *#apakah [optional]*
╠➥ *#rate* [optional]*
╠➥ *#bisakah* [optional]*
╠➥ *#kapankah* [optional]*
║
╚═〘 StableBOT 〙`
}
exports.kerangcmd = kerangcmd()
function mediacmd() {
    return `
╔══✪〘 MEDIA 〙✪══
║
╠➥ *#ramalpasangan [kamu|pasangan]*
╠➥ *#artinama [nama]*
╠➥ *#covid [negara]*
╠➥ *#nulis [teks]*
╠➥ *#sandwriting [teks]*
╠➥ *#quotemaker [|teks|author|theme]*
╠➥ *#jadwalTv [channel]*
╠➥ *#cuaca [tempat]*
╠➥ *#resepmasakan [optional]*
╠➥ *#tts [kode bhs] [teks]*
╠➥ *#igstalk [@username]*
╠➥ *#tiktokstalk [@username]*
╠➥ *#smulestalk [@username]*
╠➥ *#kbbi [query]*
╠➥ *#wiki [query]*
╠➥ *#shopee [query]*
╠➥ *#google [query]*
╠➥ *#pinterest [query]*
╠➥ *#playstore [query]*
╠➥ *#googleimage [query]*
╠➥ *#brainlysearch [query]*
╠➥ *#youtubesearch [query]*
╠➥ *#translate [bahasa] [teks]*
╠➥ *#brainly [pertanyaan] [.jumlah]*
╠➥ *#lirik [optional]*
╠➥ *#chord [optional]*
╠➥ *#qrcode [optional]*
╠➥ *#maps [optional]*
╠➥ *#textmaker [teks1|teks2]*
╠➥ *#checkip [ipaddress]*
╠➥ *#ssweb [linkWeb]*
╠➥ *#shorturl [linkWeb]*
║
╚═〘 StableBOT 〙`
}
exports.mediacmd = mediacmd()
function animecmd() {
    return `
╔══✪〘 ANIME 〙✪══
║
╠➥ *#loli*
╠➥ *#shota*
╠➥ *#randomNekoNime*
╠➥ *#randomTrapNime*
╠➥ *#randomAnime*
╠➥ *#quotesnime*
╠➥ *#wait*
╠➥ *#koin*
╠➥ *#malanime [optional]*
╠➥ *#malcharacter [optional]*
╠➥ *#kusonime [optional]*
╠➥ *#otakudesu [optional]*
╠➥ *#dewabatch [optional]*
╠➥ *#komiku [optional]*
╠➥ *#animesearch [query]*
║
╚═〘 StableBOT 〙`
}
exports.animecmd = animecmd()
function othercmd() {
    return `
╔══✪〘 OTHER 〙✪══
║
╠➥ *#bahasa*
╠➥ *#sticker*
╠➥ *#stickergif*
╠➥ *#ttp [teks]*
╠➥ *#stickertoimg*
╠➥ *#neko*
╠➥ *#pokemon*
╠➥ *#inu*
╠➥ *#infoGempa*
╠➥ *#quotes*
╠➥ *#ptl*
╠➥ *#dadu*
╠➥ *#koin*
╠➥ *#quoterandom*
║
╚═〘 StableBOT 〙`
}
exports.othercmd = othercmd()
function downloadcmd() {
    return `
╔══✪〘 DOWNLOADER 〙✪══
║
╠➥ *#ytmp3 [linkYt]*
╠➥ *#ytmp4 [linkYt]*
╠➥ *#ig [linkIg]*
╠➥ *#fb [linkFb]*
╠➥ *#twitter [linkTwitter]*
╠➥ *#smule [linkSmule]*
╠➥ *#tiktok [linkTiktok]*
╠➥ *#starmaker [linkStarmaker]*
╠➥ *#xnxx [linkXnxx]*
╠➥ *#nhder [kodeNuclear]*
╠➥ *#joox [lagu]*
╠➥ *#music [lagu]*
╠➥ *#getmusic [IdDownload]*
╠➥ *#video [video]*
╠➥ *#getvideo [IdDownload]*
║
╚═〘 StableBOT 〙`
}
exports.downloadcmd = downloadcmd()
function groupcmd() {
    return `
╔══✪〘 GROUP 〙✪══
║
╠➥ *#snk*
╠➥ *#groupinfo*
╠➥ *#add 62858xxxxx*
╠➥ *#kick @tagmember*
╠➥ *#promote @tagmember*
╠➥ *#demote @tagadmin*
╠➥ *#tagall*
╠➥ *#adminList*
╠➥ *#ownerGroup*
╠➥ *#leave*
╠➥ *#delete [replyChatBot]*
╠➥ *#kickAll*
╠➥ *#group [open|close]*
╠➥ *#NSFW [enable|disable]*
╠➥ *#left [enable|disable]*
╠➥ *#welcome [enable|disable]*
╠➥ *#simi [enable|disable]*
║
╚═〘 StableBOT 〙`
}
exports.groupcmd = groupcmd()
function readme() {
    return `
            *「 STALK 」*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *#tiktokstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *#igstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *#smulestalk @tobz2k19*

            *「 YT SEARCH 」*

*[video]* Diisi dengan Judul Video yang valid tanpa tanda “[” dan “]”
Contoh : *#video Erpan1140*
Jika ingin mendownload video harap ketik #getvideo [IdDownload] atau #getvideo [urutan]

*[lagu]* Diisi dengan Judul Lagu yang valid tanpa tanda “[” dan “]”
Contoh : *#music Alan Walker Alone*
Jika ingin mendownload lagu harap ketik #getmusic [IdDownload] atau #getmusic [urutan]

*[IdDownload] atau [urutan]* Diisi dengan IdDownload yang valid tanpa tanda “[” dan “]”
Contoh : *Jika tidak reply pesan : #getmusic Iv32bS1*
Contoh : *Jika reply pesan : #getmusic 1*
Contoh : *Jika tidak reply pesan : #getvideo Iv32bS1*
Contoh : *Jika reply pesan : #getvideo 1*

            *「 DOWNLOADER 」*

*[linkStarmaker]* Diisi dengan link Starmaker yang valid tanpa tanda “[” dan “]”
Contoh : *#starmaker https://m.starmakerstudios.com/d/playrecording?app=sm&from_user_id=3096224747920316&is_convert=true&recordingId=10696049124506354&share_type=copyLink*

*[linkTwitter]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *#twitter https://twitter.com/PassengersMovie/status/821025484150423557*

*[linkXnxx]* Diisi dengan link Xnxx yang valid tanpa tanda “[” dan “]”
Contoh : *#xnxx http://www.xnxx.com/loli/stev-gay*

*[linkNekopoi]* Diisi dengan link Nekopoi yang valid tanpa tanda “[” dan “]”
Contoh : *#nekopoi https://nekopoi.care/tsunpuri-episode-1-subtitle-indonesia/*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *#ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *#ytmp4 https://youtu.be/Bskehapzke8*

*[linkTiktok]* Diisi dengan link Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *#tiktok https://vt.tiktok.com/yqyjPX/*

*[linkSmule]* Diisi dengan link Smule yang valid tanpa tanda “[” dan “]”
Contoh : *#smule https://www.smule.com/p/767512225_3062360163*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *#ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *#fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[linkTiktok]* Diisi dengan link facebookt Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *#tiktok https://vt.tiktok.com/yqyjPX/*

            *「 OTHER 」*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *#jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *#jadwalTv Indosiar*

*[query]* Diisi dengan query/pencarian yang valid, tanpa tanda “[” dan “]“
Contoh : *#googlesearch siapa itu StableBOT*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *#cuaca tangerang*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *#tts id Test*
Note : Max 250 huruf

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *#quotemaker |Odading|Mang Oleh|Shark*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *#lirik aku bukan boneka*

*[ipaddress]* Diisi dengan Ip Address yang valid, tanpa tanda “[” dan “]”.
Contoh : *#checkip 182.0.144.145*`
}
exports.readme = readme()
function info() {
    return `
╔══✪〘 INFORMATION 〙✪══
║
╠➥ *BOT Running in : NODEJS V1.5.3.0*
╠➥ *NAME : StableBOT*
╠➥ *VERSION : 1.5{BETA}*
╠➥ *Script maker : github.com/TobyG74*
╠➥ *Recode BY : github.com/paelkunz*
╠➥ ApiKey dibeli oleh:PaelKUNZ
╠➥ Penyedia Api KEY:MhankBarBar, Dan VHTear
║
╚═〘 StableBOT 〙
`
}

exports.info = info()
function snk() {
    return `Syarat dan Ketentuan Bot *StableBOT*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline/Di Restart
3. Kami tidak menyimpan gambar, video, file, audio, link,  dan dokumen yang anda kirim!
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot dengan cara mengetik *#bugreport [teks]*
6. Apapun command yang anda jalankan pada bot ini, *KAMI TIDAK AKAN BERTANGGUNG JAWAB!*
7. Logs server Bot ini dipantau Owner 3x24 Jam! Jika kami mendeteksi adanya spam dari nomor anda, Kami akan langsung *BAN* nomor anda!.

Regards,
Owner
`
}
exports.snk = snk()
function sewa() {
    return`
╔══✪〘 IKLAN 〙✪═══════════
║
╠➥ =  SLOT   =
╠➥ =  IKLAN  =
╠══════〘SEWA ADMIN〙═══════
╠➥ *DAFTAR Harga ADMIN :*
╠➥ *ADMIN 1 Bulan: 10K*
╠➥ *ADMIN 2 Bulan: 15K*
╠➥ 
╠➥ *PEMBAYARAN BISA MELALUI :*
╠➥ *GOPAY, PULSA +5K*
╠═══════════════════════════
╠➥ *KEUNTUNGAN SEWA BOT :*
╠➥ *1. BISA MENJADI ADMIN StableBOT*
╠➥ *2. BISA MENDAPATKAN COMMAND ADMIN*
╠═══════════════════════════
╠➥ *JIKA MINAT IKLAN/SEWA ADMIN DIATAS*
╠➥ *HARAP HUBUNGI NOMOR DIBAWAH :*
╠➥ *wa.me/6281213082150*
║
╚═〘 StableBOT 〙
`
}
exports.sewa = sewa()
function sumbang() {
    return `
╔══✪〘 DONATE 〙✪══
║
╠➥ *DONASI BISA MELALUI :*
╠➥ *GoPAY/PULSA : 081213082150*
╠➥ *TERIMA KASIH BANYAK YANG SUDAH MAU DONASI*
║
╚═〘 StableBOT 〙
`
}
exports.sumbang = sumbang()
function listChannel() {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()
function bahasalist() {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh
      `
}
exports.bahasalist = bahasalist()
