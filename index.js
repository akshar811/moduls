const fs = require('fs');

let opr = process.argv[2]
let filename = process.argv[3]
let new_directory = process.argv[4]
let data = process.argv[5]

const write = () => {
    fs.writeFile(filename, data,(err)=>{
        if (err) throw err
        console.log(`file written successfully,${filename}`);
    })
}

const read = () => {
    fs.readFile(filename, "utf8",(err , data) =>{
        if (err) throw err
        console.log(`read successfully,${filename} \n ${data}`);
    } )

}

const unlink = () => {
    fs.unlink(filename , (err)=>{
        if (err) throw err
        console.log(`file unlink successfully,${filename}`);
    })
}

const rename = () => {
    fs.rename("node.js", "module.js" , (err)=>{
        if (err) throw err
        console.log(`rename successfully,${filename}`);
    })
}

const uppend = () => {
    fs.appendFile(filename , data , (err) => {
        if (err) throw err;
        console.log(`Data appended successfully to ${filename}`);
    })
}

const mkdir = () => {
    fs.mkdir(new_directory, (err) => {
        if (err) throw err;
        console.log(`folder created successfully: ${new_directory}`);
    });
};

const rmdir = () => {
    fs.rmdir(new_directory, (err) => {
        if (err) throw err;
        console.log(`folder removed successfully: ${new_directory}`);
    });
}

const copy = () => {
    fs.copyFile(filename, new_directory, (err) => {
        if (err) throw err;
        console.log(`file copied successfully from ${filename} to ${new_directory}`);
    });
};

if(opr == "write"){
    write();
}

else if(opr == "read"){
    read();
}
else if(opr == "unlink"){
    unlink();
}
else if(opr == "rename"){
    rename();
}
else if(opr == "uppend"){
    uppend();
}

else if (opr == 'mkdir') {
    mkdir();
}
else if (opr == 'rmdir') {
    rmdir();
}
else if (opr == 'copy') {
    copy();
}
else {
    console.log('Invalid operation.');
}