import * as console from '../log/index.ts'

function stringToArray(data: String, char: string): Array<string> {
    return data.split(char)
}

export function arrayReplaceMultp(data: String) {
    let _data = stringToArray(data, '、')
    _data = _data.filter(function(item, index, arr) {
        return arr.indexOf(item) === index
    })
    let lastData = arrayToString(_data, '、')
    console.log(lastData)
}

function arrayToString(data: String[], char: string): String {
    return data.join(char)
}
