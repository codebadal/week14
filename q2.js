function calculateTotalCartValue(){
    let cartValue = 0;
    for (let index = 0; index < arguments.length; index++) {
    cartValue += arguments[index]        
    }
    console.log(`The total cart value is ${cartValue}`);
}

calculateTotalCartValue(500,125,300)

// OUTPUT: The total cart value is 925