let melon = {}
let melon2 = {
    name:"我是柠檬",
    price:5,
    weighe:0.5,
    origin:"海南省",
    coloe:false,
    nut:{
        name:"我是柠檬的儿子柠檬精",
        price:100,
    },
    printPrice:function(){
        console.log("我是价格")
    },
    printOrigin:()=>{
        console.log("原产地")
    }
}
let melon3 = {}

var melon7 = new Object(666)
var melon8 = new Object("1234567")

function Person (name,sex,age,address){
    this.name = name,
    this.sex = sex,
    this.age = age,
    this.address = address
    this.sayName = function(){
        console.log(this.name)
    }
}

Person.prototype.sayName2 = function(){
    console.log("this  is  say name2")
}

var p1 = new Person("张三",'男',20,"南昌市")
console.log(p1);
console.log(p1.__proto__);