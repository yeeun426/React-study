import { getProductById, getProductsByCategory, getProductsData } from '@/api/productsApi'

// 지연 함수 추가
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const detailPageLoader = async info => {
  console.log('productsLoaders.js:info', info)
  const params = info.params
  try {
    //지연 추가
    await delay(10)

    // 상품 ID에 해당하는 정보
    const product = await getProductById(params.productId)
    console.log('productsLoaders.js:product', product.category)

    if (!product) {
      throw new Response('상품이 존재하지 않습니다.', {
        status: 404,
      })
    }

    // 상품 ID의 카테고리 정보와 일치하는 상품들
    const relatedProducts = await getProductsByCategory(product.category, 10)
    const filteredRelatedProducts = relatedProducts.filter(p => p.id !== product.id)

    return { product, filteredRelatedProducts }
  } catch (err) {
    console.log('err----', err)
    throw new Response('상품 데이터를 가져오는 중 오류 발생', {
      status: err.status || 500,
    })
  }
}

export const shopPageLoader = async ({ request }) => {
  // console.log('productsLoaders.js:info', request.url)
  const url = new URL(request.url)
  const page = url.searchParams.get('_page') || 1
  const per_page = url.searchParams.get('_per_page') || 12
  const category = url.searchParams.get('category') || ''
  const sort = url.searchParams.get('_sort') || ''
  // const per_page = 12
  let queryString = `_page=${page}&_per_page=${per_page}`
  category ? (queryString += `&category=${category}`) : queryString
  sort ? (queryString += `&_sort=${sort}`) : queryString

  console.log('-----------------', queryString)

  try {
    const products = await getProductsData(queryString)
    console.log('productsLoaders.js:products ----- ', products)

    return { products, per_page }
  } catch (err) {
    console.log('err----', err)
    throw new Response('상품 데이터를 가져오는 중 오류 발생', {
      status: err.status || 500,
    })
  }
}
