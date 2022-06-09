const fs = require('fs');

const newObj = {
    name: "cat",
    age: 8,
    action: "meow"
};

fs.writeFile('./objFile.json', JSON.stringify(newObj, null, 2), err => {
    if (err){
        console.log(err);
    } else {
        console.log('Successfully written');
    }
})