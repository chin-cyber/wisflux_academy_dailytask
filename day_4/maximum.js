function max_of_giveninput(a,b,c){
    max_value = 0;

    if(a>b){
        max_value = a;

    }
    else{
        max_value = b;
    }
    if(c>max_value){
        max_value = c
    }{
        return max_value
    }
}


console.log(max_of_giveninput(14,23,-23));
console.log(max_of_giveninput(10,2,35));

console.log(max_of_giveninput(15,18,-23));