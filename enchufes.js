const { Client } = require('tplink-smarthome-api');

const client = new Client();
var anio = 2017;
var mes = 12;

// mas info en
// https://github.com/plasticrake/tplink-smarthome-api

//modo de correrlo es con 'node nameFile.js'
// si no tenes la ip de cada uno se puede tener con $ tplink-smarthome-api search

const plug = client.getDevice({host: '10.67.0.147'}).then((device)=>{
  console.log('/////////////////////////');
  console.log(device.name);
  device.emeter.getDayStats(anio, mes).then(console.log);
  device.emeter.getMonthStats(anio).then(console.log);
//Aca saco la energia consumida para una fecha dada

  const plug2 = client.getDevice({host: '10.67.0.127'}).then((device)=>{
    console.log('/////////////////////////');
    console.log(device.name);
    device.emeter.getDayStats(anio, mes).then(console.log);
    device.emeter.getMonthStats(anio).then(console.log);
    //device.emeter.eraseStats().then(console.log);

  //Aca saco la energia consumida para una fecha dada
  });
});
