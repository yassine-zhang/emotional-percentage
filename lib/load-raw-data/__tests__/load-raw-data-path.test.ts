import { loadRawData, PathOrUrlRole } from '../index.ts'
import * as console from '../../log/index.ts'

const option: PathOrUrlRole = {
    positive: '../../diff_res/正面情绪词汇收集.txt',
    negative: '../../diff_res/负面情绪词汇收集.txt'
}
const callback = (data, msg) => {
    console.log(data, msg)
}

loadRawData(option, callback)
loadRawData(option).then(data => console.log(data))
// 因为就算异步读取较小的文件也是非常快的，此模块代码中加了等待定时100ms为了方便测试
console.log('I execute first')