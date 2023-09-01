function StringToArray(data: String, char: string): Array<string> {
    return data.split(char)
}

export function ArrayReplaceMultp(data: String) {
    let _data = StringToArray(data, '、')
    _data = _data.filter(function(item, index, arr) {
        return arr.indexOf(item) === index
    })
    let lastData = ArrayToString(_data, '、')
    console.log(lastData)
}

function ArrayToString(data: String[], char: string): String {
    return data.join(char)
}
