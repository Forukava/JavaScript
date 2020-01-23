function htmlTable(data){
    let parseData = data.map(x => JSON.parse(x))

    let createTable = content => `<table>\n${content}\n</table>`
    let createRow = content => `<tr>\n  ${content}\n</tr>`
    let createData = content => `<td>\n    ${content}\n</td>`

    console.log(createTable('Im table'))
    console.log(createRow('I m Row'))
    console.log(createData('Im data'))
   //parseData.reduce((accRows, row)=>{
    //console.log(row.name)
    //Object.value(row).reduce((tdAcc, td) =>{
        //return tdAcc + createData(td)
    //})
  // } , '')
}
htmlTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'])