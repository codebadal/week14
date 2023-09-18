const productDatails = {
    namme: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "grey",
    hardDisk: "256GB"
};

console.log("Below are the product datils.");

for(let list of Object.keys(productDatails)){
    console.log(`${list}:${productDatails[list]}`);
}

// output
// Below are the product datils.
// namme:Apple 2020 MacBook Air Laptop
// price:82000
// color:grey
// hardDisk:256GB