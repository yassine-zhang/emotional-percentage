import { loadRawDataSync, PathOrUrlRole } from '../../load-raw-data/index.ts'
import { calculatePercent } from '../index.ts'

const option: PathOrUrlRole = {
    positive: '../../diff_res/正面情绪词汇收集.txt',
    negative: '../../diff_res/负面情绪词汇收集.txt'
}

loadRawDataSync(option)

calculatePercent("今天吃了煎包和馅饼特别好吃，很高兴")