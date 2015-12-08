var fs = require('fs');
var files = fs.readdirSync('./项目');
var s = '',i,r,id, name, kaoqin,lilun,xiangmu,total,item;
var reg = /(\d+)-*\s*([^.]+)/;
for ( i = 0;  i < files.length;  i++){
  r = files[i].match(reg);
  id   = r[1].trim();
  name = r[2].trim().replace(/\s+/,'');
  kaoqin = Math.floor(Math.random()*(92-86) + 86);
  lilun =  Math.floor(Math.random()*(90-80)  + 80);
  xiangmu = Math.floor(Math.random()*(95-85)  + 85);
  total = (kaoqin*0.1 + lilun*0.2 + xiangmu*0.7).toFixed(1);
  item = [id,name,kaoqin,lilun,xiangmu,total].join(',')+'\n';
  s += item;
}
fs.writeFile('./成绩单.txt',s);
