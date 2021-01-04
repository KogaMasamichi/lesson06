const str = " Hello World "
const trimStr = str.trimStart().trimEnd()
console.log(str)
console.log(trimStr)

const slupStr = str.slice(1, 5).toUpperCase()
console.log(slupStr)



function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator)

    return arrayOfStrings
}
