export function tableData (columns, data) {
  var columns1 = []
  // var data1 = []
  // console.log(columns)
  for (var i = 0; i < columns.length; i++) {
    var dic = {}
    dic.title = columns[i]
    dic.width = 100
    dic.key = columns[i]
    columns1.push(dic)
  }
  // console.log(data)
  // for (var j = 0; j < data.length; j++) {
  //   var dic1 = {}
  //   for (var k = 0; k < columns.length; k++) {
  //     // console.log(columns[k])
  //     // console.log(data[j])
  //     // console.log(data[j]['2月'])
  //     dic1[columns[k]] = data[j][columns[k]]
  //     // console.log(dic1)
  //   }
  //   data1.push(dic1)
  // }
  return [columns1, data]
}
