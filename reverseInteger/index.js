// Easy solution here

var reverse = function(x) {
    let reversed=+[...(String(x))].reverse().join('')

    if(x<0){
        x=Math.abs(x)
        reversed=+[...(String(x))].reverse().join('')*-1

        if(reversed<-2147483647){
            return 0
        }
        else{
            return reversed
        }

    }
    else{

        if(reversed>2147483647){

            return 0
        }
        else{
            return reversed
        }
    }
};

reverse(-123)