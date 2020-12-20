const validation = function(args){
    for(let i=0; i<args.length; i++){
        if((typeof args[i] != "number") || args[i]<0 ){
            console.log("ERROR",args)
            return true;
        }
    }
}

const sumIt = function(args){
    let sum =0;
    
    if(args[0] < args[args.length-1]){
    //loop through the values of args and 
        for(let i=args[0]; i<= args[args.length-1]; i++){ 
            sum += i;
            
        }
    }else{
        for(let i=args[args.length-1]; i <=args[0]; i++){ 
            sum += i;
        }
       
    }
    console.log('sum is:',sum)
    return sum;

}

const sumAll = function() {
    let args = [...arguments]
    console.log(args)
    
    //if validation is false, return ERROR else return sum
    return (validation(args) == true)?'ERROR':sumIt(args)
 
    


}

module.exports = sumAll
