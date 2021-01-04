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

const weekString = "sun,mon,tue,wed,thu,fri,sat"
const comma = ","

var tempestString = weekString
const weekSplit = splitString(tempestString, comma)
console.log(`一週間は${weekSplit.length}日あります。${weekSplit}です。`)

const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
var tempestString = monthString
const monthSprit = splitString(tempestString, comma)
console.log(`一年は${monthSprit.length}ヶ月あります。${monthSprit}です。`)
//本来の用途とは違うとは思っています。
