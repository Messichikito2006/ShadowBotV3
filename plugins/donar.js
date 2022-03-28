// NO QUITES NI CAMBIES NADA DE AQUI POR FAVOR
// AGREGA TUS DATOS SI QIERES, PERO NO QUITES LOS MIOS
// ESTE MEDIO ES EL UNICO METODO DE INGRESO DEL BOT 
// SI TE HARAS PASAR POR EL CREADOR OFC, DONA LO QUE ESTE EN TUS POSIBILIDADES
let handler = async m => m.reply(`
*┏ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┇       「 DONAR 」*
*┣ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┃ ❖ Hola persona hermosa 💙*
*┃ 👉🏻 Aquí tienes algunos datos*
*┃ para que puedas apoyar <3*
*┃*
*┃ -   CLABE:
*┃ -   BANCO: STP
*┃ -   BENEFICIARIO: 
*┃ -   CONCEPTO: APOYO*  
*┃➤ PayPal: 
*┃❖ Contáctame si necesitas otros*
*┃datos y para darte las gracias <3*
*┃❖ wa.me/5493491456806*
*┗ ┅ ━━━━━━━━━━━━━ ┅ ━*
`.trim()) 
handler.command = /^(dona|donar|apoyar|dardinero|apoyo)$/i
module.exports = handler
