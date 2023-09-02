import * as console from '../log/index.ts'
import { rawData, percent } from '../variables/index.ts'


export function calculatePercent(data: String): void;
export function calculatePercent(data: String[]): void;

export function calculatePercent(data: String | String[]): void {
    if (typeof data === 'object') data = (data as String[]).join('')

    let positive = 0, negative = 0
    // 正反面情绪字词匹配次数
    rawData[1].forEach((word) => positive += [...(data as String).matchAll(new RegExp(word.toString(), 'g'))].length)
    rawData[0].forEach((word) => negative += [...(data as String).matchAll(new RegExp(word.toString(), 'g'))].length)

    // 计算百分比
    const rate = 100 / (positive + negative)
    percent[1] = Math.round(positive * rate) + "%";
    percent[0] = Math.round(negative * rate) + "%";
    console.log(percent)
}

export function getPercent(): String[] {
    return percent
}