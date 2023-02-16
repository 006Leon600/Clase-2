let disporam=function(freemem) {
    let bitsGb = 0.000000000125*freemem;
    let decimales=bitsGb.toFixed(7);
    return parseFloat(decimales);
};

let totalram=totalmem=>{
    let bitsGb = 0.000000000125*totalmem;
    let decimales=bitsGb.toFixed(8);
    return parseFloat(decimales);
};

const conversion={
    disporam,
    totalram
};

module.exports=conversion;