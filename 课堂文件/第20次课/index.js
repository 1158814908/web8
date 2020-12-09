function Pear(name, price, origin, weigh){
    this.name = name,
    this.price = price,
    this.origin = origin,
    this.weigh = weigh,
    this.printName = function(){
        console.log("this is pear" + this.name)
    }
}

Pear.prototype.priceName2 = function(){
    console.log("this is printName2")
}

var p1 = new Pear("一号梨子", "12", "河南", 10)
p1.printName()
p1.printName2()

Pear.printName()
Pear.priceName2()