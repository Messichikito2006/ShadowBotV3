let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util') 66
let handler = async (m, { conn, usedPrefix }) => {
let pp = './E7aUxN5XEAY2Kr1.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let handler = async m => m.reply(`


♦️𝕯𝖎𝖘𝖈𝖔𝖗𝖉 : https://discord.gg/9pBZuyn8kF

♦️𝕿𝖜𝖎𝖙𝖈𝖍 : https://www.twitch.tv/thegaelux?sr=a

♦️𝕸𝖎 𝖙𝖎𝖐𝕿𝖔𝖐 𝖔𝖋𝖎𝖈𝖎𝖆𝖑 : https://vm.tiktok.com/ZM8edRgTR/

🎀𝕸𝖎 𝕴𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒:  https://instagram.com/soygaelux?utm_medium=copy_link

🔷𝘾𝙖𝙣𝙖𝙡𝙚𝙨:
        
 🔸𝕋𝕙𝕖𝔾𝕒𝕖𝕝𝕦𝕩: https://youtube.com/c/TheGaelux

 🔸𝔾𝕒𝕖𝕝𝕦𝕩 𝕊𝕚𝕞𝕡: https://youtube.com/channel/UC4gIxXOLOnDiTWjvk6oN8rw

 🔸𝔾𝕒𝕖𝕝𝔹𝕠𝕩: https://youtube.com/channel/UCxlbjGVi6knKNcgVwNeoeXg


Gracias por su apoyo!! :D


`.trim()) 
handler.help = ['gaelux']
handler.tags = ['gael']
handler.command = /^gaelux$/i

module.exports = handler
