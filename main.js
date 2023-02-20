const os=require('./Modulos/os');
const funciones=require('./Modulos/funciones');
console.table(os.frecuencia.slice(0,1).map((registro)=> registro.times));
console.log(" * Sis Op: "+os.SO);
console.log(" * Ram Disp",os.rdisp,"Byte");
console.log(" * Ram en GB",funciones.disporam(os.rdisp),"GB");
console.log(" * Ram Tot",os.rtot,"Byte");
console.log(" * Ram Tot en GB",funciones.totalram(os.rtot),"GB");
