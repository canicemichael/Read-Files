let jsonReader = require('./fsReadfile');
const fs = require('fs');

function done(filePath){
    jsonReader(filePath, (err, data) => {
        if (err){
            console.log(err);
        } else {
            data.age += 1;
            fs.writeFile(filePath, JSON.stringify(data, null, 2), err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('file updated');
                }
            })
        }
    })
}

done('sample2.json');