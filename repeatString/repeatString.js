const repeatString = function(str_val,num) {

    if (num< 0){
        return 'ERROR' ;
    }
    repeat_val ='';
    for( let i=0; i<num; i++){
        repeat_val += str_val;
    }

    return repeat_val;

}

module.exports = repeatString
