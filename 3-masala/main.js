function sumOfNegatives(arr1, arr2){

    let num1 = 0;
    let num2 = 0;
    let sum;



    for(let i = 0; i < arr1.length; i++){
        num1 = num1 + arr1[i];
    }
    
    for(let i = 0; i < arr2.length; i++){
        num2 = num2 + arr2[i]
    }

    // for(let i in arr1){
    //     console.log(arr1[i]);
    // }

    sum = num1+num2

    console.log(sum);

}

sumOfNegatives([4, -5, -10, 6], [6, 9, 14, -1, 6])