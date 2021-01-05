import splitString from "../ex07-1/ex07-1.js"


//join

const elements = "Metal,Water,Wood,Fire,Earth"
const comma = ","
const elementsSplit = splitString(elements, comma)

console.log(`五行は${elementsSplit.join(". ")}の${elementsSplit.length}種である。`)


//toString

console.log(elementsSplit.toString().toUpperCase())


//entries

for (let e of elementsSplit.entries()) {
    console.log(e)
}
