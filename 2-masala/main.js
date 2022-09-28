function sumOfNegatives(arr){

    let num = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            num = num + arr[i]
        }
    }

    console.log(num);

}

sumOfNegatives([5, -5, -10, 6, -10, -5])