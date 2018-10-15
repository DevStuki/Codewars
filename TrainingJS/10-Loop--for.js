function pickIt(arr){
    var odd=[],even=[];
    for(let i = 0; i < arr.length; i++){
        arr[i]%2 !== 0 ? odd.push(arr[i]) : even.push(arr[i]);
    }
    return [odd,even];
  }

  //for...of로 아래와 같이 작성할 수도 있다.
  function pickIt(arr){
      let odd = [];
      let even = [];

      for(let num of arr){
          (num%2 ? odd : even).push(num);
      }

      return [odd, even];
  }