        function $2(x){
            if(typeof x=="string"){
                let targets = window.document.getElementsByTagName(s)
                if(tagets.length>0){
                    let array = targets;
                    for(let index = 0;index<array.length;index++){
                        const element = array[index];
                        element.style.backgroundColor="red"
                    }
                }
            }
        }
        $2("div");