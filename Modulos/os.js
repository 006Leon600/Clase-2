const os=require('os');
const varOs={
ramd:os.freemem(),
ramt:os.totalmem(),
SO:os.type(),
frecuencia:os.cpus()
}
module.exports = varOs; 
