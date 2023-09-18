function UniquecharCheck(strings) {
    let charSet = new Set();
    for(let char of strings){
        if (charSet.has(char)) {
            console.log("The input string contains duplicates");
            return false;
        }
        charSet.add(char)
    }
    console.log("The input string contains only unique charachters");
    return true;
}
UniquecharCheck("jhon")

UniquecharCheck("peter")

// output
// The input string contains only unique charachters
// The input stringcontains duplicates
