const allUser = [
    'ram',
    'shyam',
    'sits',
    'mithun',
    'gita'
]

function isUserPresent(user){
    if (allUser.includes(user)) {
        console.log(`Yes, ${user} is a valid user.`);
    }else{
        console.log(`No, ${user} is not a valid user.`);
    }
}

isUserPresent("mithun")
isUserPresent("someone")



// OUTPUT:
// Yes, mithun is a valid user.
// No, someone is not a valid user.