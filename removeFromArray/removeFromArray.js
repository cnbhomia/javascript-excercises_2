//a function defined with no arguments can accept an argument
//accessible using keyword `arguments`
const removeFromArray = function() { 

    //converting arguments into an array
    let args=[];
    for (let i=0; i<arguments.length; i++){
        args[i]=arguments[i]
    }
    // alternative method to this function is
    //let args = Array.prototype.slice.call(arguments)

    const parent_arr = args[0];
    args.shift()
    console.log(parent_arr);
    console.log(args);

    //loop over parent and args to compare

    let new_arr =[];

    for(let k=0; k<parent_arr.length; k++){
        let counter =0
        for(let j= 0; j<args.length; j++){
        
            if(parent_arr[k] === args[j]){
                counter += 1;
                               
            }
        }
        if(counter == 0){
            new_arr.push(parent_arr[k])
        }
    }

    return new_arr ;

}

module.exports = removeFromArray
