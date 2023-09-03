# Emotional Percentage
Percentage of positive and negative emotions

一个可以将一组中文字符串提取正负面情绪字词并转换为百分比的库。

# 安装
```
npm install yassine-zhang/emotional-percentage
```

# 使用
下面是最简单的使用教程，其中返回值数组第一个代表负面情绪占比，第二个代表正面情绪占比
```ts
import { refresh } from 'yassine-zhang/emotional-percentage'

// return: [ '0%', '100%' ]
refresh("学习ngnix")
```

## 异步加载源过滤数据文件
分为两个文件，一个是正面情绪词汇收集文件，一个是负面情绪词汇收集文件，文件中应以中文“、”分割开每个过滤词，如下图所示：
![Alt text](/src/image.png)

下面是使用自定义源过滤数据文件的写法（目前只支持本地文件地址，并不支持文件描述符和远程URL）
```ts
import { loadRawData, PathOrUrlRole } from 'yassine-zhang/emotional-percentage'

const option: PathOrUrlRole = {
    positive: '<Your path or URL address>',
    negative: '<Your path or URL address>'
}
const callback = (data) => {
    console.log(data)
}

loadRawData(option, callback)
loadRawData(option).then(data => console.log(data))
console.log('I execute first')
```

当然你也可以调用同步函数，loadRawDataSync，需要另外引入


## 源过滤数据文件查重保留唯一
下面代码将读取本地源过滤数据文件并替换重复项，最后返回一个字符串（字符串内每个过滤词都是通过中文“、”分割）
```ts
import { arrayReplaceMultp } from 'yassine-zhang/emotional-percentage'
import * as fs from 'fs-extra';
import { resolve } from 'path';

const info = fs.readFileSync(resolve(__dirname, '../../../diff_res/正面情绪词汇收集.txt'), 'utf-8')

arrayReplaceMultp(info)
```


# 帮助
如果你对此还有任何疑问，可以在`github`提issues或者查看`lib/*/__tests__/*.test.ts`中对每个功能的用法