import axios from 'axios'
// const BASE_URL = 'http://localhost:3000/products'

export const getProductsData = async (query = '') => {
  try {
    const res = await axios.get(`/api/products?${query}`) // GET요청
    return res.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getProductById = async id => {
  try {
    const res = await axios.get(`/api/products/${id}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const getProductsByCategory = async (category, limit = 10) => {
  try {
    const res = await axios.get(`/api/products/`, {
      params: {
        category,
        _limit: limit,
      },
    })
    return res.data
  } catch (err) {
    console.log(err)
  }
}
