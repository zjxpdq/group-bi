/**
 * 获取菜单列表
 * */
export const getMenuByRouter = list => {
  let newList = []
  list.forEach(item => {
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      newList.push(item)
    }
  })
  return newList
}
export const debounce = (func, wait, immediate) => {
  let timeout, args, context, timestamp, result
  const later = () => {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp
    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }
  return (...args) => {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }
    return result
  }
}
/**
 *
 * @param route 传入当前路由
 */
export const getBreadCrumbList = route => {
  let list = getFromLocalstorage() || []
  let routeMetched = route.matched
  let homeRes = routeMetched.filter(item => {
    return item.meta === undefined || !item.meta.hideInBread
  }).map(item => {
    return {
      name: item.name,
      meta: item.meta
    }
  })
  if (typeof list[0] !== 'undefined' && list[0].name === homeRes[0].name) {
    let res = homeRes.map(item => {
      let obj = {
        name: item.name,
        meta: item.meta
      }
      list.forEach(child => {
        if (item.name === child.name && child.query) {
          obj.query = child.query
        }
      })
      if (item.name === route.name) {
        obj.query = route.query
      }
      return obj
    })
    setInLocalstorage(res || [])
  } else {
    setInLocalstorage(homeRes || [])
  }
  return getFromLocalstorage()
}
/**
 *
 * @param list 传入路由集
 */
export const setInLocalstorage = list => {
  localStorage.tagNaveList = JSON.stringify(list)
}
/**
 *
 * @returns {Array} 其中的每个元素包含路由原信息
 */
export const getFromLocalstorage = () => {
  const list = localStorage.tagNaveList
  return list ? JSON.parse(list) : []
}
/**
 * 计算百分比
 * @param num 值
 * @param total 总值
 * @returns {string} 返回计算出的结果带%
 */
export const countPercent = (num, total) => {
  num = parseFloat(num)
  total = parseFloat(total)
  if (isNaN(num) || isNaN(total)) {
    return '-'
  }
  return total <= 0 ? '0%' : (Math.round(num / total * 10000) / 100.00 + '%')
} // 计算百分比
