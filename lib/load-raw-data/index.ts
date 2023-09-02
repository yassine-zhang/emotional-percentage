/** 
 * 规则：
 * 当调用loadRawData函数时会启动Promise异步模式来执行，
 * 传入path参数，对象内部数据源可以设置为本地地址或远程地址（远程还未开发），
 * 如果传入path实现 PathOrUrlRole 接口的内部属性中，有空字符串将按照插件本身自带过滤字词资源的地址来替代 
 * 
 * 当调用loadRawDataSync函数时会启动同步模式来执行，
 */


import * as fs from 'fs-extra';
import { resolve } from 'path';
import * as console from '../log/index.ts'
import { rawData } from '../variables/index.ts'


interface LoadedReturns {
    rawData: String[][];
}
export interface PathOrUrlRole {
    positive: string,
    negative: string
}

function checkPathIsExist(path: PathOrUrlRole): PathOrUrlRole {
    if (path === undefined) path = {
        positive: '',
        negative: ''
    }
    if (path.positive === '') path.positive = '../../diff_res/正面情绪词汇收集.txt'
    if (path.negative === '') path.negative = '../../diff_res/负面情绪词汇收集.txt'

    return path
}

async function _loadRawData(path: PathOrUrlRole, callback_function?: Function): Promise<LoadedReturns> {
    path = checkPathIsExist(path)

    let result = ''

    result = await fs.readFile(resolve(__dirname, path.negative), 'utf-8')
    rawData[0] = result.split('、')
    result = await fs.readFile(resolve(__dirname, path.positive), 'utf-8')
    rawData[1] = result.split('、')

    callback_function && callback_function(rawData)
    return { rawData }
}

export async function loadRawData(path?: PathOrUrlRole, callback_function?: Function): Promise<LoadedReturns> {
    // 因为就算异步读取较小的文件也是非常快的，我这里加了等待定时100ms为了方便测试
    // await setTimeout(() => {}, 100)

    return await _loadRawData(path, callback_function)
}


export function loadRawDataSync(path?: PathOrUrlRole) {
    path = checkPathIsExist(path)

    let result = '', msg = '[Successful processing]'

    result = fs.readFileSync(resolve(__dirname, path.negative), 'utf-8')
    rawData[0] = result.split('、')

    result = fs.readFileSync(resolve(__dirname, path.positive), 'utf-8')
    rawData[1] = result.split('、')

    return {
        rawData,
        msg
    }
}