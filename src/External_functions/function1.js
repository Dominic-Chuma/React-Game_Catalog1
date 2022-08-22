let multiple = function (number) {
    // console.log("I hate y'all");
    var numb1 = 30; // Total games recorded
    var numb2 = 6; // The number of games for each type/category of games
    var numb3 = Math.trunc(numb1 / numb2) ; // Number of game categories/type
    var numb4 = 1; // Start number...
    var numb5 ; // End number....

    // Create a sequence generator.........
    const range = (start, stop, step) => {
        return Array.from({length:((stop - start)/step) + 1},(_, index) => start + (index * step));
        // return Array.from({length:((stop - start)/step) + 1}).map((_, index) => start + (index * step));
        // console.log(Array.from({length:((stop - start)/step) + 1}).map((_, index) => start + (index * step)));
    }

    console.log(numb3);
    if(number <= numb3 && numb1 % numb2 === 0){ // If the No. of records are even.
        // Do this
        if (number === 1){
            numb4 = 1;
            numb5 = numb2;
            console.log(numb4, numb5);
            // var return_array1 = [numb4, numb5]
            console.log(range(numb4, numb5, 1));
            return range(numb4, numb5, 1);
        }else{
            if (number !== 0 && number > 1){
                numb4 = 1 + (numb2 * (number - 1));
                numb5 = numb2 + (numb2 * (number - 1));
                console.log(numb4, numb5);
                console.log(range(numb4, numb5, 1));
                return range(numb4, numb5, 1);
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
                console.log(range(numb4, numb5, 1));
                return range(numb4, numb5, 1);
            }else{
                if (number !== 0 && number > 1){
                    numb4 = 1 + (numb2 * (number - 1));
                    numb5 = numb2 + (numb2 * (number - 1));
                    console.log(numb4, numb5);
                    console.log(range(numb4, numb5, 1));
                    return range(numb4, numb5, 1);
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
                console.log(range(numb4, numb5, 1));
                return range(numb4, numb5, 1);

            }
        }
    }
}

// multiple(5);
export default multiple;