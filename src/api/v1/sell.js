import i from '@/utils/request'


const getList = {
  getList: params => i.get('/api/v1/bi/sales/monthpaper', params)
}


// const getList1 = {
//   getList1s: params => i.get('/api/v1/bi/dashboard/makeshow', params)
// }


// const getList2 = {
//   getList2s: params => i.get('/api/v1/bi/dashboard/makeshow', params)
// }

// const getList = function getList (data) {
//     return i({
//         url: '/api/v1/bi/dashboard/makeshow',
//         method: 'post',
//         data
//     })
// }


export {
  getList
  // getList1,
  // getList2
}
