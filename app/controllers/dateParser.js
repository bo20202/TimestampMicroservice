'use strict';
module.exports = function (date){
    var moment = require("moment");
    var unixTime;
    var naturalTime;
    
    if(+date >= 0){
        unixTime = +date
        naturalTime = moment.unix(date).format("MMMM D, YYYY");
    }
    if(isNaN(+date) &&  moment(date, "MMMM D, YYYY").isValid()){
        unixTime = moment(date, "MMMM D, YYYY").format("X");
        naturalTime = moment.unix(unixTime).format("MMMM D, YYYY")
    }
    var result = {unix: unixTime, natural: naturalTime};
    return result;
};
