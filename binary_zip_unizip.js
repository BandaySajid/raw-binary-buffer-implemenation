const zlib = require('zlib');
const fs = require('fs');

function compress(input, output){
    fs.readFile(input, (err, buffer)=>{
        if(err){
            return console.log(err.message);
        }
        zlib.gzip(buffer, (err, result)=>{
            if(err){
                return console.log(err.message);
            }

            fs.writeFile(output, result,  (err)=>{
                console.log('Data compressed to file:'+output);
            })
        })
    });
};

function decompress(input, output){
    fs.readFile(input, (err, buffer)=>{
        if(err){
            return console.log(err.message);
        }
        zlib.gunzip(buffer, (err, result)=>{
            if(err){
                return console.log(err.message);
            }

            fs.writeFile(output, result,  (err)=>{
                console.log('Data decompressed to file:'+output);
            })
        })
    });
};

// compress('data.txt', 'final.zip')
decompress('final.zip', 'final.txt')
