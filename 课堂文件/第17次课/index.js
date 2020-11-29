var a5 = (x,y) =>{
    console.log(x+y)
}

a5(5,4)
console.log(typeof a5)



var apple = function apple2(){
    console.log('apple2');
    return 100;
}()//立即执行

console.log(a5);


//闭包
(function(x,y){
    console.log("江西软件垃圾大学")
    console.log(x+y)
})(3,6)
