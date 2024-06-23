//Write a function to change given string into Title Case

function intoTitle(string)
{
    let givenStringLower = string.toLowerCase()

    let words = givenStringLower.split(" ")

    let titleArray = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1))

    return titleArray.join(" ")
}

const inputString = "this is something i need to know"
const result = intoTitle(inputString);
console.log(result);