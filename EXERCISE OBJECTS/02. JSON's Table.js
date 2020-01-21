function htmlTable(data){
    let parseData = data.map(x => JSON.parse(x))

    let createTable = content => `<table>\n${content}\n</table>`
    let createRow = content => `<table>\n  ${content}\n</table>`
    let createData = content => `<table>\n    ${content}\n</table>`

   parseData.reduce((accRows, row)=>{
    console.log(row.name)
    Object.value(row).reduce((tdAcc, td) =>{
        return tdAcc + createData(td)
    })
   } , '')
}
htmlTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'])