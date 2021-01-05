//trimStart trimEnd

const str = " Hello World "
const trimStr = str.trimStart().trimEnd()
console.log(str)
console.log(trimStr)


//slice toUpperCase

const slupStr = str.slice(1, 5).toUpperCase()
console.log(slupStr)


//split

export default function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator)

    return arrayOfStrings
}

const week = "sun,mon,tue,wed,thu,fri,sat"
const comma = ","


const weekSplit = splitString(week, comma)
console.log(`一週間は${weekSplit.length}日あります。${weekSplit}です。`)

const month = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"

const monthSplit = splitString(month, comma)
console.log(`一年は${monthSplit.length}ヶ月あります。${monthSplit}です。`)
//本来の用途とは違うとは思っています。
