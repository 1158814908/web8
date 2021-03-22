//面向对象三大主题：封装、继承、多态
class redPoint extends Point{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    printRedPoint(){
        console.log(this.a);
        console.log(this.b);
    }
    printRedPoint(){
        console.log(this.a);
        console.log(this.b);
    }
}

//对象的解构
let obj91 = {
    name:"李四",
    age:20,
    address:"江西南昌"
}
let{name,age,address} = obj91
console.log(name);

//#include
//import

let a = require("./tools")
a.test()

module.exports.test = {
    fun1:function () {
        coonsole
        
    }
}