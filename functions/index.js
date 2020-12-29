const functions = require('firebase-functions');

const {
    dialogflow,
    Image,
    Table,
    Carousel,
} = require('actions-on-google');

const app = dialogflow();
const HOSTING = 'https://conversational-ai.eu/diego/hosting/img/';

app.intent('Default Welcome Intent', (conv, params) => {
    if (params.name){
        conv.ask(`Hola, ${params.name}`);
        conv.ask(new Image({
            url: HOSTING + 'bot.jpg',
            alt: 'A bot',
        }));
    }else {
        conv.ask('Hola, desconocido');
    }
});

exports.fulfillment = functions.https.onRequest(app);
