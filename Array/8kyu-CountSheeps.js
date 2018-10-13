function countSheeps(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]) count++;
    }
    return count;
}

//Best Practice
//이렇게 간단하게 표현할 수 있다. array관련 메서드들에 익숙해져야 한다.
// function countSheeps(arr) {
//     return arr.filter(Boolean).length;
// }

var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];


    console.log(countSheeps(array1));