const fs = require('fs');

// fs.readFile('./sample2.json', 'utf-8', (err, jsonString) => {
//     if(err){
//         console.log(err);
//     } else{
//         try {
//             const data = JSON.parse(jsonString);
//             console.log(data);
//         } catch (error) {
//             console.log('Error in the JSON', error);
//         }     
        
//     }    
// })

function jsonReader(filePath, cb){
    fs.readFile(filePath, 'utf-8', (err, fileData) => {
        if (err){
            return cb && cb(err);
        }

        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object);
        } catch (error) {
            return cb && cb(err);
        }
    })
}

function done(filePath){
    jsonReader(filePath, (err, data) => {
        if (err){
            console.log(err);
        } else {
            console.log(data);
        }
    })
}

done('sample2.json');