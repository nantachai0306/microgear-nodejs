#!/usr/bin/env node

var MicroGear = require('microgear');

const KEY    = <hGCHSVuHP92G1Xk>;
const SECRET = <IdLciZCa6M4SHjmc7Edt2NE64>;
const APPID     = <Unbalance>;

var microgear = MicroGear.create({
    key : KEY,
    secret : SECRET
});

microgear.on('connected', function() {
    console.log('Connected...');
    microgear.setalias("mygear");
    setInterval(function() {
        microgear.chat('mygear', 'Hello world.');
    },1000);
});

microgear.on('message', function(topic,body) {
    console.log('incoming : '+topic+' : '+body);
});

microgear.on('closed', function() {
    console.log('Closed...');
});

microgear.connect(APPID);
