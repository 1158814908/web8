console.log("-------------------------")
console.log("第一题")
var nut = function(){
    console.log("this is nut-1")
    return "this is nut-2"
}
nut()


//第二道题目 请说出程序的运行结果
console.log("-------------------------")
console.log("第二题")
var lichee = function (){
    console.log("this is lichee-1")
    return "this is lichee-2"
}()

//第三道题目 如何让pear也能运行并输出结果
console.log("-------------------------")
console.log("第三题")
var watermelon = function(){
    console.log("this is watermelon-1")
    return function pear(){
        console.log("this is pear-1")
    }
}

//第四道题目 请说出程序的运行结果
console.log("-------------------------")
console.log("第四题")
let banana = function banana(){
    console.log("this is banana-1")
    return ()=> function(){console.log("this is Anonymous function")}()
}
banana()()

//第五道题目 如何打印出 this is MyGrapNut
console.log("-------------------------")
console.log("第五题")
let grape = function redGrape(){
    return {
        name:"my name is red grape",
        printMyName:()=>{
            return ()=>{
                return Object.create({
                    name:"my name is grape nut",
                    printMyGrapeNut:function(){
                        console.log("this is MyGrapNut")
                    }
                })
        }
    }
}
}

//第六道题目 请说出程序的运行结果
console.log("-------------------------")
console.log("第六题")
var redPlum = ()=>{
    return 100
}
var bluePlum =(blue)=>{
    return 200 * blue()
}
var plum = (plum2,plum1)=>{
    let result = plum1(plum2)
    console.log(result);
}
plum(redPlum,bluePlum)

//第七道题目 请 在console.log里面完善代码，并使得程序运行打印出
//this is red apple 和 this is blue apple
console.log("-------------------------")
console.log("第七题")
let red = function readApple(){
    return ()=>{
        return function(){
            return ()=>{
                return function(){
                    console.log("this is red apple")
                    return "this is blue apple"
                }
            }
        }
    }
}
let apple = function redApple(){
    console.log(red()()()()())//这是一个题目
}()

//第八道题目 请说出程序的运行结果
console.log("-------------------------")
console.log("第八题")
(function(x){
    x()
    console.log("this is yellow orange")
    console.log(function blueOrange(){
        console.log("this is blue orange")
    }())
})
(function(){
    console.log("this is orange")
    return "this is red orange"
})

//第九道题目 如果想把 this is small orange 和 this is big orange 都打印出来如何操作
console.log("-------------------------")
console.log("第九题")
var blackOrange = ()=> function(){
    console.log("this is small orange")
    return function(){
        console.log("this is big orange")
    }()
}()
blackOrange()//答案


//第十道题目 补充程序代码，运行打印出 9999
console.log("-------------------------")
console.log("第十题")
let blackberry = function (){
    console.log("this is blackberry")
    return {
        smallBlackberry: ()=>{
            console.log("this is smallBlackberry")
            return ()=>{
                console.log("this is smallBlackberry nut ")
                return 9999
            }
        }
    }
}()


//第十一道题目 请说出程序的运行结果
console.log("-------------------------")
console.log("第十一题")
function bigNut(func){
    let smallNut = function (s){
        s()
        console.log("this is small nut")
        return 200
    }
    let middleNut = function(m){
        m()
        console.log("this is middle nut")
        return 300
    }
    return func(smallNut,middleNut)
}
function redNut(x,y){
    function blueNut(){
        console.log("this is blueNut")
    }
    function yellowNut(){
        console.log("this is yellowNut")
    }
    return ()=>{
        console.log(x(blueNut)+y(yellowNut))
    }
}
bigNut(redNut)()

//第十二道题目
console.log("-------------------------")
console.log("第十二题")
var haw = (x,y)=>{
    return ()=>{
        x(y)
    }
}
function lichee(li){
    console.log(li())
}
function nut(){
    console.log("this is nut");
    return "this is lichee"
}
haw(lichee,nut)()