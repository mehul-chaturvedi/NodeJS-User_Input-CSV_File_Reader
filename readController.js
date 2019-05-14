const fs = require('fs');
const csv=require('csvtojson')

//function splites the string into array 
var readFile = (title)=>{
    //splites string into array and stores in different index when it encounters " "
    title = title.split(" ");
    title.forEach((ele)=>{
        readELE(ele)
    })
    
}

//csvtojson to print response in a good format
function readELE(title){
    var noteString = fs.readFileSync('./files/'+title, { encoding: 'utf8' });
    csv({
        noheader:true,
        output: "line"
    })
    .fromString(noteString)
    .subscribe((csvRow)=>{ 
        //to print only those includes LTC-AUD, ZEC-AUD and BTC-AUD
        if(csvRow.includes('LTC-AUD') || csvRow.includes('ZEC-AUD') || csvRow.includes('BTC-AUD')){
        var csvRow = csvRow.replace(/,/g, '\t');
        console.log(csvRow)
        }
    })
}


module.exports = {readFile};
