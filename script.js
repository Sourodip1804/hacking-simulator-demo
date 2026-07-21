// creating a javascript Array

// for creating the blinking of the dots, we create a arrow function




const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();  //to get a random number between 1 and 7
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

const additem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)

}

async function main() {


    setInterval(() => {
        let last = document.body.lastElementChild;
        // to get exactly three dots we add this if else statement 
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }


        last.innerHTML = last.innerHTML + "."

    }, 700);



    let text = ["Initialized Hacking now readimg your data ",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"]

    // iterating the loop using for of loop 
    for (const item of text) {
        // creating a function 
        await additem(item)

    }

}
main()

