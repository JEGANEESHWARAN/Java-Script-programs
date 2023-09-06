// program to perform function overloading

function sum() {  
    
    // if no argument        
    if (arguments.length == 0) {  
        console.log('You have not passed any argument');  
    }

    // if only one argument 
    else if (arguments.length == 1) {  
        console.log('Pass at least two arguments');  
    }

    // multiple arguments
    else {
        let result = 0;
        let length = arguments.length;
    
        for (i = 0; i < length; i++) {  
            result = result + arguments[i];  
        }  
        console.log(result); 
    }  
}