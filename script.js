// creating a javascript Array

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


const additem = async ()=>{

}

// for creating the blink, we create a arrow function 
const randomDelay = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve() 
        }, timeout);
    })
}