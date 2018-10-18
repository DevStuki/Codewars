/*
Coding in function ```sortIt```. 
function accept 1  parameters ```arr```, it's a number array. 
Your task is to sort the array according to the specified conditions, 
and returns a new array(should not modify the original array).

conditions1: according to the number of elements(in ascending order)
for example:
```
sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
because [1,1,1,2,2,3] has one 3, two 2 and three 1
```
conditions2: If the same number of elements, 
according to the number values(in descending order)
for example:
```
sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
because number of 3,2 and 1 both are three, then according to 3>2>1
```
Comprehensive two conditions should be like this:
```
sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]
```
*/

function sortIt(arr){
    //배열을 받아서 각각 같은 수가 몇개인지 파악
    //각각 같은수끼리 배열에 담아야 함
    let temp = arr.slice(); //복사
    temp.sort(); //정렬
    let mArr = []; //빈배열
    mArr[0] = []; //빈배열의 첫번째 인덱스에 빈배열
    let current = temp[0]; //현재 숫자 저장
    let j = 0; //빈배열의 인덱스

    for(let i = 0; i < temp.length; i++){             
        if(current === temp[i]){
            mArr[j].push(temp[i]);
        }else{
            //숫자가 달라지면 빈배열의 인덱스 수를 올리고, 빈배열을 넣고, 첫 값을 넣는다.
            j++;
            current = temp[i];
            mArr[j] = [];
            mArr[j].push(temp[i]);
        }
    }
    
    mArr.sort((a, b) => {
        if(a.length - b.length === 0){
            return b[0] - a[0]; //만약 같은 길이라면 안에 있는 수를 통해 정렬
        } else {
            return a.length - b.length;
        }
    });

    //다시 하나의 배열로 정리
    let finalArr = [];
    for(let i = 0; i < mArr.length; i++){
        for(let j = 0; j < mArr[i].length; j++){
            finalArr.push(mArr[i][j]);
        }
    }
    return finalArr;
}

//Best Practice
//현재까지 배운 기술만 가지고 해야하기에 이런 코드는 나중에나 짤 수 있을 것 같다.
function sortIt(arr){
    let numberOf = {};
    arr.forEach(x => numberOf[x] = (numberOf[x]||0) + 1);
    return arr.slice().sort((x, y) => numberOf[x] - numberOf[y] || y - x);
}

console.log(sortIt([1,1,1,2,2,3]));
console.log(sortIt([1,1,1,2,2,2,3,3,3]));
console.log(sortIt([1,2,3,4,4,5,5,6,6]));
// var arr1=[1,3,3,5,2,2,4,6,6,7,7,7],copy=arr1.slice();
// console.log(sortIt(arr1));
// console.log(arr1 , copy , "You should not modify the original array");
