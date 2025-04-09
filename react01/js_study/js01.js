console.log('고차원 스터디')

console.clear()
const fruits = ['레몬', '사과', '오렌지', '포도', '참외']

fruits.forEach(item => console.log(item)) // forEach는 return을 사용하지 않음

console.clear()

const item1 = { name: '사과', price: 1000 }
const item2 = { name: '바나나', price: 1500 }
const item3 = { name: '오렌지', price: 500 }
const products = [item1, item2, item3, item2]

console.log(products)

let result
result = products.filter(item => item.name !== '바나나')
console.log(result)

result = products.findIndex(item => item.name == '바나나')
console.log(result) // 1

result = products.findIndex(item => item.name == '수박')
console.log(result) // -1

console.clear()

const array = ['a', 'b', 'c']

// entries() - [인덱스, 값] 쌍의 반복자 반환
for (const [index, element] of array.entries()) {
  console.log(index, element)
}

// keys() - 인덱스의 반복자 반환
for (const index of array.keys()) {
  console.log(index)
}

// values() - 값의 반복자 반환
for (const element of array.values()) {
  console.log(element)
}
