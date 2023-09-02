import { loadRawData, PathOrUrlRole } from '../index.ts'
import * as console from '../../log/index.ts'

const option: PathOrUrlRole = {
    positive: '../../diff_res/正面情绪词汇收集.txt',
    negative: '../../diff_res/负面情绪词汇收集.txt'
}
const callback = (data) => {
    console.log(data)
}

loadRawData(option, callback)
loadRawData(option).then(data => console.log(data))
console.log('I execute first')