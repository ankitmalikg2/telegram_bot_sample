require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;

// Created instance of TelegramBot
const bot = new TelegramBot(token, {
   polling: true
});

url = [
    "https://source.unsplash.com/600x350/?morning",
    "https://source.unsplash.com/600x350/?goodmorning",
    "https://source.unsplash.com/600x350/?nature",
    "https://source.unsplash.com/600x350/?beach",
    "https://source.unsplash.com/600x350/?teacup",
    "https://source.unsplash.com/600x350/?coffee",
    "https://source.unsplash.com/600x350/?sun",
    "https://source.unsplash.com/600x350/?walk",
    "https://source.unsplash.com/600x350/?mountain",
    "https://source.unsplash.com/600x350/?sea",
    "https://source.unsplash.com/600x350/?sunrays",
    "https://source.unsplash.com/600x350/?travel",
    "https://source.unsplash.com/600x350/?god",
    "https://source.unsplash.com/600x350/?flowers",
    "https://source.unsplash.com/600x350/?smile",
    "https://source.unsplash.com/600x350/?rose",
    "https://source.unsplash.com/600x350/?sunrise",
]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  


// Listener (handler) for telegram's /bookmark event
bot.onText(/\/bookmark/, (msg, match) => {
    const chatId = msg.chat.id;
    const url = match.input.split(' ')[1];
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
 
    if (url === undefined) {
        bot.sendMessage(
            chatId,
            'Please provide URL of article!',
        );
        return;
    }
 
    URLs.push(url);
    bot.sendMessage(
        chatId,
        'URL has been successfully saved!',
    );
 });

 bot.on("message", (msg) =>{
    text = msg.text.toLowerCase().trim()
    if( text == "good morning" || text == "good morning!"){
        bot.sendPhoto(msg.chat.id, "https://source.unsplash.com/600x350/?morning")
    }
 })

 bot.onText(/\/m/, (msg) => {
    rand_int = getRandomInt(0, 15)
    // console.log(rand_int)
    bot.sendPhoto(msg.chat.id, url[rand_int])
 })