let multiple = function (number, total) {
    // console.log("I hate y'all");
    var numb1 = total; // Total games recorded
    var numb2 = 6; // The number of games for each type/category of games
    var numb3 = Math.trunc(numb1 / numb2) ; // Number of game categories/type
    var numb4 = 1; // Start number...
    var numb5 ; // End number....

    console.log(numb3);
    if(number <= numb3 && numb1 % numb2 === 0){ // If the No. of records are even.
        // Do this
        if (number === 1){
            numb4 = 1;
            numb5 = numb2;
            console.log(numb4, numb5);
            var return_array1 = [numb4, numb5]
            return return_array1;
        }else{
            if (number !== 0 && number > 1){
                numb4 = 1 + (numb2 * (number - 1));
                numb5 = numb2 + (numb2 * (number - 1));
                console.log(numb4, numb5);
                var return_array2 = [numb4, numb5];
                return return_array2;
                // return [numb4,numb5];
            }
        }
    }else{ // If the total number of records are Odd
        //; // Do nothing....{Empty Statement}
        console.log('Na lie o!!');
        if (number <= numb3 && numb1 % numb2 !== 0){ // If there's a remainder
            if (number === 1){
                numb4 = 1;
                numb5 = numb2;
                console.log(numb4, numb5);
                return [numb4, numb5];
            }else{
                if (number !== 0 && number > 1){
                    numb4 = 1 + (numb2 * (number - 1));
                    numb5 = numb2 + (numb2 * (number - 1));
                    console.log(numb4, numb5);
                    return [numb4, numb5];
                    // return [numb4,numb5];
                }
            }
    
        }else if ((number > numb3) && (number - numb3 === 1) && (numb1 % numb2 !== 0)){

            if (numb1 % numb2 === 1){ // If remainder is 1
                numb4 = numb1;
                console.log(numb4);
                return [numb4];
            }
            else if (numb1 % numb2 > 1){
                numb4 = 1 + (numb2 * (number - 1));
                numb5 = (numb1 % numb2) + (numb2 * (number - 1))
                console.log(numb4, numb5);
                return [numb4, numb5];

            }
        }
    }
}

multiple(7,30);