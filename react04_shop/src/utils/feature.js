export const formatDate = date => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
  return new Date(date).toLocaleDateString('ko-KR', options)
}

// 디바운스 : 연속된 호출을 지연시켜 한번만 실행. 함수(함수, 대시시간)
export const debounce = (func, delay = 300) => {
  let timerId
  return function (...args) {
    if (timerId) clearTimeout(timerId)
    timerId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// 쓰로틀 : 일정 시간 동안 한 번만 실행. 함수(함수, 대시시간)
export const throttle = (func, limit = 300) => {
  let inThrottle
  return function (...args) {
    // 일반 함수로 변경
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
