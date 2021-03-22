var arr = ["pitaya","apple","orrarge","peach"];
for (const iterator of arr){
    console.log(iterator);
}

for(var key in arr){
    console.log(key)
}

var obj={

}

for(var o in obj1){
    console.log(o)
}

for (const key in obj1){
    if(Object.hasOwnProperty.call(obj1,key)){
        const element = obj1[key];
        console.log(element)
    }
}

var name3 = "jiangxi,software,university";
var result3 = name3.indexOf("software");
console.log(result3)
var result4 = name3.lastIndexOf("software")
console.log(result4)

//字符串替换
var name7 = "software,jiangxi,software,university";
var result7 = name7.replace("software","hardware");
console.log(result7)



//字符串切割
var name12 = "apple,orange"


