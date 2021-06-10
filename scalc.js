function display(val){
    document.getElementById("result").value+=val;
}

function solve(){
    var a = document.getElementById("result").value ; 
    size = a.length;
    n = Number(a.substring(0, size-1));

    if(a.includes("!")){    
        f = 1;
        for(i = 2; i <= n; i++){
            f = f*i;
        }   
        document.getElementById("result").value = f;
    }
    else if(a.includes("sin")){
        var radstr =  a.substring(3, size)*(Math.PI/180);
        document.getElementById("result").value = Math.sin(radstr);
    }
    else if(a.includes("cos")){
        var radstr =  a.substring(3, size)*(Math.PI/180);
        document.getElementById("result").value = Math.cos(radstr);
    }
    else if(a.includes("tan")){
        var radstr =  a.substring(3, size)*(Math.PI/180);
        document.getElementById("result").value = Math.tan(radstr);
    }
    else if(a.includes("π")){
        
        var num = a.substring(0, size-1)
        document.getElementById("result").value = Math.PI*(num);
    }
    else if(a.includes("²")){
        
        var num = a.substring(0, size-1)
        document.getElementById("result").value = num*num;
    }
    else if(a.includes("^")){
        var num = a.indexOf("^");
        var num1 = a.substring(0, num);
        var num2 = a.substring(num+1, size);
        document.getElementById("result").value = num1**num2;
    }
    else if(a.includes("√")){
        var num = a.substring(1, size)
        document.getElementById("result").value = Math.sqrt(num);
    }

    else if(a.includes("log")){
        var num = a.substring(3, size)
        document.getElementById("result").value = Math.log10(num);
    }

    else if(a.includes("ln")){
        var num = a.substring(2, size)
        document.getElementById("result").value = Math.log(num);
    }

    else{
        try{
            var a = document.getElementById("result").value;
            var b = eval(a);
            document.getElementById("result").value = b;
        }
        catch(err){
            document.getElementById("result").value = "Syntax Error";
        }
    }
    
}

function clr(){
    document.getElementById("result").value = "";
}

function backspace(calc) {   
    var a = document.getElementById("result").value ;                                         
    document.getElementById("result").value = a.substring(0, a.length-1);
}
