//数组
//在js中如何定义一个数组

var a = 1;//定义一个变量
let b = 2;//let es6提供的关键字
const c =3;//定义一个常量

//如何定义一个数组


//定义个空数组
let arr = []
let arr2 = [1,2,3,4,5]
//第二种方式定义数组
//用array方式来定义数组
let arr3 = new Array(5);
//new关键字是否省略
let arr4 = new Array(5)
console.log(arr4)
console.log(arr4[0])//它的缺省值是undefined

let arr5 = []
console.log(arr5[1])

//获取数组的长度   length
let arr6 = []
console.log(arr6.length)

//运行结果是undefined
let arr7 = [1,2,3,4,5]
arr7.length = 6;
console.log(arr7[5])
arr7.length = 2;
console.log(arr7[4])

//通过push方法往数组里面增加元素
let arr8 = [1,2,3,4]
arr9.push(5)
console.log(arr8[4])
//pop方法是从数组弹出一个元素，最后一个元素被弹出
arr9.pop();
console.log(arr8[4])

//字面量方式来申明对象
let obj1 = {}
let fun1 = ()=>{

}
let arr9 = [1,2,3,4,'a',{},fun1];

//typeof 来判断类型

//需求，abcdef123456
//[a,b,c,d,...]
//from 方式 from 是Array上面的方法
let str1 = "abcdef123456";
let arr10 = Array.from(str1);
console.log(arr10)
//of方法，它也是array方法
//将一组数转化为数组，类似于数组申明
//[1,2,3,4,5]
let arr11 = Array.of(1,2,3,'a');
console.log(arr11)

//进入数组循环
//for for-in forEach

let arr12 = [1,2,3,4];
for(let i = 0; i < arr12.length; i++){
    console.log(arr12[i])
}