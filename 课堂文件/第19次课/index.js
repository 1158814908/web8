void function haw(){
    console.log("this is haw")
}()

let h2 = !function test(){
    console.log("this is h2")
    return -5
}()

console.log(h2)



let pea1 = 'return ' + '`我是一粒${name}`';
let peanut5 = new Function('name',pea1);
console.log(peanut5("花生"))

var peanut6 = function(name){
    return "我是一粒"+name;
}
console.log(peanut6)