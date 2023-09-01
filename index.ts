import * as fs from 'fs-extra';
import * as path from 'path';


// 定义全局原过滤字段数组
const rawData: String[][] = [[], []]
// 正负面情绪百分比
const percent: String[] = []


// 刷新数据返回的对象类型
interface Status {
    code: number;
    msg: string;
}

// 策略模式控制刷新数据逻辑
// 这里string是小写，代表使用JS原生类型，而不使用大写String通过类封装的类型
// 尽量控制自己不写if else switch语法
const refresh_call: Record<string, Function> = {
    "string": (data: String) => {
        let positive = 0, negative = 0
        // 正反面情绪字词匹配次数
        rawData[1].forEach((word) => positive += [...data.matchAll(new RegExp(word.toString(), 'g'))].length)
        rawData[0].forEach((word) => negative += [...data.matchAll(new RegExp(word.toString(), 'g'))].length)

        // 计算百分比
        const rate = 100 / (positive + negative)
        percent[1] = Math.round(positive * rate) + "%";
        percent[0] = Math.round(negative * rate) + "%";
        console.log(percent)
    },
    "object": (data: String[]) => {
        // 先组合成字符串
        const _data = data.join('')
    }
}

// 函数签名 - 刷新数据
export function refresh(data: String): Promise<Status>;
export function refresh(data: String[]): Promise<Status>;

export async function refresh(data: String | String[]): Promise<Status> {
    let code: number = 0
    let msg: string = ''

    // 将信息读取到 rawData 中
    let result = ''
    try {
        result = fs.readFileSync(path.resolve(__dirname, './diff_res/负面情绪词汇收集.txt'), 'utf-8')
    } catch (error) { msg += error += '\n' }
    rawData[0] = result.split('、')

    try {
        result = fs.readFileSync(path.resolve(__dirname, './diff_res/正面情绪词汇收集.txt'), 'utf-8')
    } catch (error) { msg += error += '\n' }
    rawData[1] = result.split('、')


    if (msg !== '') code = 1
    refresh_call[typeof data](data)

    return {
        code: code,
        msg: msg === '' ? '[Successful processing]' : msg
    }
}

export function getPercent() {
    return percent
}





