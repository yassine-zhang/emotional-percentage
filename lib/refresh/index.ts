import { calculatePercent } from '../cal-percent/index.ts'
import { loadRawData, loadRawDataSync } from '../load-raw-data/index.ts'


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
export function refresh(data: String): Promise<void>;
export function refresh(data: String[]): Promise<void>;

export async function refresh(data: String | String[]): Promise<void> {
    await loadRawData()

    refresh_call[typeof data](data)
}

export function refreshSync(data: String | String[]): void {
    loadRawDataSync()

    refresh_call[typeof data](data)
}