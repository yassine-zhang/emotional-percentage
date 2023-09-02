import { loadRawDataSync, PathOrUrlRole } from '../index.ts'
import * as console from '../../log/index.ts'

const option: PathOrUrlRole = {
    positive: '../../diff_res/正面情绪词汇收集.txt',
    negative: '../../diff_res/负面情绪词汇收集.txt'
}

console.log(loadRawDataSync(option))
console.log('The above code executes first')
// loadRawData(option, callback)