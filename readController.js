const fs = require('fs');
const csv=require('csvtojson')


var readFile = (title)=>{
    title = title.split(" ");
    title.forEach((ele)=>{
        console.log(ele, 'e')
        readELE(ele)
    })
    
}

function readELE(title){
    var noteString = fs.readFileSync('./files/'+title, { encoding: 'utf8' });
    csv({
        noheader:true,
        output: "line"
    })
    .fromString(noteString)
    .subscribe((csvRow)=>{ 
        if(csvRow.includes('LTC-AUD') || csvRow.includes('ZEC-AUD') || csvRow.includes('BTC-AUD')){
        var csvRow = csvRow.replace(/,/g, '\t');
        console.log(csvRow)
        }
    })
}


module.exports = {readFile};