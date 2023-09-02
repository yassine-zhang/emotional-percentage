import { arrayReplaceMultp } from '../index.ts'
import * as fs from 'fs-extra';
import { resolve } from 'path';

const info = fs.readFileSync(resolve(__dirname, '../../../diff_res/正面情绪词汇收集.txt'), 'utf-8')

arrayReplaceMultp(info)