/**
 * 计算表格增长百分比并以图的形式渲染到面上
 * @param h 函数
 * @param params 接收的参数值
 * @param colors 渲染的颜色值以数组rgba()方式传入
 * @returns {*}
 */
export const getBgcGradual = (h, params, colors = []) => {
  let linear = 'linear-gradient(to right, ' + (colors[0] || 'rgba(243,126,101,.6)') + ' 70%,' + (colors[1] || '#fff') + ')'
  let newNum = null
  if (typeof params === 'string') {
    newNum = parseFloat(params.replace(/[,%]/g, ''))
  } else {
    newNum = parseFloat(params)
  }
  return h('div', {
    style: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      position: 'relative'
    }
  }, [
    h('div', {
      style: {
        width: (newNum > 120 ? 120 : newNum) + '%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '0',
        backgroundImage: linear
      }
    }),
    h('span', {
      style: {
        position: 'relative',
        zIndex: '1'
      }
    }, params)
  ])
}
