import i18nJSON from '../i18n.json'
import atob from 'atob'

export const blockShape = {
  I: [[1, 1, 1, 1]],
  L: [[0, 0, 1], [1, 1, 1]],
  J: [[1, 0, 0], [1, 1, 1]],
  Z: [[1, 1, 0], [0, 1, 1]],
  S: [[0, 1, 1], [1, 1, 0]],
  O: [[1, 1], [1, 1]],
  T: [[0, 1, 0], [1, 1, 1]]
}

export const origin = {
  I: [[-1, 1], [1, -1]],
  L: [[0, 0]],
  J: [[0, 0]],
  Z: [[0, 0]],
  S: [[0, 0]],
  O: [[0, 0]],
  T: [[0, 0], [1, 0], [-1, 1], [0, -1]]
}

export const blockType = Object.keys(blockShape)

export const speeds = [800, 650, 500, 370, 250, 160]

export const delays = [50, 60, 70, 80, 90, 100]

export const fillLine = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

export const blankLine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

export const blankMatrix = (() => {
  const matrix = []
  for (let i = 0; i < 20; i++) {
    matrix.push(blankLine)
  }
  return matrix
})()

export const clearPoints = [100, 300, 700, 1500]

export const StorageKey = 'VUE_TETRIS'

export const lastRecord = (() => {
  // 上一把的状态
  // let data = window.localStorage.getItem(StorageKey)
  let data
  try {
    data = wx.getStorageSync(StorageKey)
  } catch (e) {
  }
  if (!data) {
    return false
  }
  try {
    data = atob(data)
    data = decodeURIComponent(data)
    data = JSON.parse(data)
  } catch (e) {
    if (window.console || window.console.error) {
      window.console.error('读取记录错误:', e)
    }
    return false
  }
  return data
})()

export const maxPoint = 999999

export const transform = (function() {
  const trans = [
    'transform',
    'webkitTransform',
    'msTransform',
    'mozTransform',
    'oTransform'
  ]
  // const body = document.body
  return trans[0]
})()

export const eachLines = 20 // 每消除eachLines行, 增加速度

export const getParam = param => {
  return ''
}

export const lan = (() => {
  return i18nJSON.default
})()

export let i18n = i18nJSON.data
