const os=require('./Modulos/os');
const funciones=require('./Modulos/funciones');
console.table(os.frecuencia.slice(0,1).map((registro)=> registro.times));
console.log("Sistema Operativo: "+os.SO);
console.log("Ram Disponible",os.ramdisp,"Bist");
console.log("Ram en GB",funciones.disporam(os.ramdisp),"GB");
console.log("Ram Total",os.ramtot,"Bits");
console.log("Ram Total en GB",funciones.totalram(os.ramtot),"GB");