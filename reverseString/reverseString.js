const reverseString = function(str_val) {
    let reverse_val ='';
    
    for(let i=str_val.length ; i>0; i--){

        reverse_val +=str_val[i-1] ;

    }

    return reverse_val;
}

module.exports = reverseString
