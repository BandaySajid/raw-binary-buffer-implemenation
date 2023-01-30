const fs = require('node:fs');


//Simple compression and decompression of data using RLE algorithm.


const fileArg = process.argv[2];
const operation = process.argv[3];

if(!fileArg){
    return console.log('please provide filename argument')
}

if(!operation){
    return console.log('please provide file operation argument')
}

function rle(input){
    let output = "";
    let count = 1;

    for(let i = 0; i < input.length; i++){
        if(input[i] === input[i + 1]){
            count++;
        }
        else{
            output += count + input[i];
            count = 1;
        }
    }
    return output;
}

function compress(filename){
    const data = fs.readFileSync(filename).toString('utf-8');
    const rleData = rle(data);
    return fs.writeFileSync('compr_'+filename, rleData);
}

function decompress(filename){
    let output = "";
    const data = fs.readFileSync(filename).toString('utf-8');
    for(let i = 0; i<data.length; i++){
        if(!isNaN(parseInt(data[i]))){
            for(let j = 0; j<parseInt(data[i]); j++){
                output += data[i+1];
            }
        }
    }
    return fs.writeFileSync('decompr_'+filename, output);

}

if(operation.toLowerCase() === 'c'){
    compress(fileArg);
}
if(operation.toLowerCase() === 'd'){
    decompress(fileArg);
}