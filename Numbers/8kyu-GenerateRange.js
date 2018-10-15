function generateRange(min, max, step){
    let nums = [];
    for(let i = min; i <= max; i += step){
        nums.push(i);
    }
    return nums;
}