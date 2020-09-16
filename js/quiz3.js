const garde = (a) => {
    if (a>=80 && a<=100){
        return('A')
    }
    else if (a>=71 && a<=80){
        return('B')
    }
    else if (a>=61 && a<=70){
        return('C')
    }
    else if (a>=51 && a<=60){
        return('D')
    }
    else if (a>=0 && a<=50){
        return('F')
    }
        
}
console.log(garde(70))