function find_average(array) {   
    //이렇게 변수에 의미가 정확하면 더 좋다. result, current
    return array.reduce((result, current) => result += current)/array.length;
}

console.log(find_average([1,1,1]));
console.log(find_average([1,2,3]));