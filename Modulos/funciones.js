let disporam=function(freemem) {
    let ByteGb = 1e-9*freemem;
    return ByteGb;
};
let totalram=totalmem=>{
    let ByteGb = 1e-9*totalmem;
    return ByteGb;
};
const conversion={
    disporam,
    totalram
};
module.exports=conversion;