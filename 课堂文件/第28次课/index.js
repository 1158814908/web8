let arr = [1,2,3,4,5,6]
//shift方法（删除数组首元素）
let result = arr.shift();
console.log(result);
console.log(arr)

//unshift(把新增的元素放到数组前面)
let arr1 = [1,2,3,4,5,6];
let result1 = arr1.unshift(7);
console.log(return1);
console.log(arr1)

//push pop

//切片方法
let arr2 = [1,2,3,4,5,6];
let result2 = arr2.slice(2,3);
console.log(result2);
console.log(arr2)

class Point2{
    //构造函数
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    print(){
        console.log(x);
        console.log(y);
    }
}

let point2 =new Point2(99,100)
point2.print()

function Point3(name,age,address) {
    
}