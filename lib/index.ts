import { calculatePercent, getPercent } from './cal-percent/index.ts'
import { loadRawDataSync } from './load-raw-data/index.ts'


// 定义全局原过滤字段数组
const rawData: String[][] = [[], []]


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
        calculatePercent(data)
    },
    "object": (data: String[]) => {
        calculatePercent(data)
    }
}


// 函数签名 - 刷新数据
export function refresh(data: String): Promise<Status>;
export function refresh(data: String[]): Promise<Status>;

export async function refresh(data: String | String[]): Promise<Status> {
    let code: number = 0
    let msg: string = ''

    msg = loadRawDataSync().msg


    if (msg !== '') code = 1
    refresh_call[typeof data](data)

    return {
        code: code,
        msg: msg === '' ? '[Successful processing]' : msg
    }
}

refresh("天天开心")




