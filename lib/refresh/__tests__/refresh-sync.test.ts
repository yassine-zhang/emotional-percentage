import { refreshSync } from '../index.ts'
import * as console from '../../log/index.ts'

refreshSync("今天过得很开心")
refreshSync(["今天过得很开心", "过的愉快", "太笨了，傻逼"])
console.log("I'll still print it at the end.")