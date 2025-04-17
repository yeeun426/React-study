import { getProductById, getProductsByCategory } from '@/api/productsApi'

export const detailPageLoader = async info => {
  const params = info.params

  try {
    // 상품 ID에 해당하는 정보
    const product = await getProductById(params.productId)
    if (!product) {
      throw new Response('상품이 존재하지 않습니다', {
        status: 400,
      })
    }

    // 상품 ID의 카테고리 정보와 일치하는 상품들
    const relatedProducts = await getProductsByCategory(product.category, 10)

    return { product, relatedProducts }
  } catch (err) {
    console.log('err----', err)
    throw new Response('상품 데이터를 가져오는 중 오류가 발생했습니다.', {
      status: err.status || 500,
    })
  }
}
