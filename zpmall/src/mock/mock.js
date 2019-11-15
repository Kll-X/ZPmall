import Mock from 'mockjs'
import data from './data.json'
import url from '@/server.config.js'

let Random = Mock.Random;
let productData = () => {
    let productList = []; // 存放农机信息的数组
    for(let i=0; i<100; i++){
        let product = {
            name: Random.ctitle(5, 12),
            img: Random.dataImage('125x125', '农机' + Random.integer(1, 100)),
            price: Random.integer(1000, 10000),
            owner: Random.cname()
        };
        productList.push(product);
    }
    return productList;
};
Mock.mock(url.getVarietyItem, productData);


Mock.mock(url.sExample, {
    name: Random.ctitle(13, 20),
    img: Random.dataImage('125x125', '农机' + Random.integer(1, 100)),
    price: '@integer(6000, 10000)',
    owner: '@cname',
    dataList:data.list
});
Mock.mock(url.wExample, {
    name: Random.ctitle(5, 12),
    img: Random.dataImage('125x125', '农机' + Random.integer(1, 100)),
    price: '@integer(1000, 2000)',
    owner: '@cname',
    dataList:data.list
});
//mock参考：
//如果链接没对上，默认返回写在最后一个的mock拦截返回的数据
// https://github.com/nuysoft/Mock/wiki
