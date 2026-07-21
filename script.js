// creating a javascript Array

// for creating the blinking of the dots, we create a arrow function 
const randomDelay = ()=>{
    return new Promise((resolve, reject)=>{
        timeout = 1 + 6* Math.random();  //to get a random number between 1 and 7
        setTimeout(() => {
           resolve() 
        }, timeout * 1000);
    })
}


let text = ["Initializing Hacking...",
    "Reading your Files...",
    "Password files Detected...",
    "Sending all passwords and personal files to server...",
    "Cleaning up..."]

// iterating the loop using for of loop 
for (const item of text) {
    // creating a function 
    additem(item)
    
}


const additem = async (item)=>{
    await randomDelay();
    let div = document.createElement("div");

}
