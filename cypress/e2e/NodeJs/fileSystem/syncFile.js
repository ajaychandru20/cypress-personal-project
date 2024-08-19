const fs = require('fs');
const dirPath = "./cypress/e2e/NodeJs/fileSystem/";


//Synchronized - Blocking Code 

// Check the file exist 

if (fs.existsSync(dirPath + 'SampleData.xlsx')) {
    console.log("The file found")
} else {
    console.log("File not found")
}

// Read and write file 

if(fs.existsSync(dirPath +'SampleData.xlsx')){

   const excelData =  fs.readFileSync(dirPath +'sampleText.txt','utf-8')
    console.log(excelData);
    fs.writeFileSync(dirPath + "writeFile.txt",excelData)

}else{
    console.log("File not found")
}

// Append File 

if(fs.existsSync(dirPath + "writeFile.txt")){
    console.log('file found')
    fs.appendFileSync(dirPath + "writeFile.txt",'\n append using append function')
    const appendedText = fs.readFileSync(dirPath + "writeFile.txt", 'utf-8');
    console.log(appendedText)
}else{
    console.log('file not found')
}

// Rename File 

if(fs.existsSync(dirPath + "writeFile.txt")){
    console.log("File found: doing rename file process")
    fs.renameSync(dirPath + "writeFile.txt", dirPath + "writeFile2.txt")
}else{
    console.log('file not found')
}

// Delete File 
if(fs.existsSync(dirPath + "writeFile2.txt")){
    console.log("File found and deleted")
    fs.unlinkSync(dirPath + "writeFile2.txt")
}else{
    console.log('file not found')
}











