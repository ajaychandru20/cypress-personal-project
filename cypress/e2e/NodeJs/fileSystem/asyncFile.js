import fs from 'node:fs';
const dirPath = './cypress/e2e/NodeJs/fileSystem'

//sampleText.txt

// Async - Non Blocking Code 

// File exisit 

fs.readFile(dirPath + '/sampleText.txt', 'utf-8', (err, data)=>{
    if (err) {
            console.log(err.message);
    } else {
        console.log(`ReadFile: ${data}`)
    }
})


fs.writeFile(dirPath + '/asyncWrite.txt',"Hi this word written by ", (err)=>{

    if (err) {
        console.log(err.message)
    }else{
        console.log("Write File: The content written in the file ")
    }

} )

fs.appendFile(dirPath + '/asyncWrite.txt',"\n Append using Async", (err)=>{

    if (err) {
        console.log(err.message)
    }else{
        console.log("Append File: The content is appened")
    }

} )

fs.unlink(dirPath + '/asyncWrite.txt', (err)=>{

    if(err){
        console.log(err.message)
    }else{
        console.log("Delete File: file deleted sucessfully!!")
    }
})
