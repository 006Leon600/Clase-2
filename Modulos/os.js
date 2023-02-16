const os=require('os');
const variablesOs={
ramdisp:os.freemem(),
ramtot:os.totalmem(),
SO:os.type(),
frecuencia:os.cpus()
}
module.exports = variablesOs;