//Run-Length-Encoding Algorithm.
//The rle algorithm compresses data in such a way that if a data is repeated and consecutive, not just repeated, then it replaces the repetitive data with the data and count of repitition.

module.exports = function rle(input){
    let output = "";
    let count = 1;

    for(let i = 0; i<input.length; i++){
        if(input[i] === input[i+1]){// if a character is repeated which is if character at current index === character at index + 1;
            count ++;            
        }
        else{ //else if the character at current index is not equal to the next then it means the character ends here so we replace it with the (count and character)
            output += count + input[i] + ' ';
            count = 1; //and we set the count to 1 again after the character is final. 
        }   
    }

    return output;
};

// console.log(rle('aaaabccccddddeeff'));
