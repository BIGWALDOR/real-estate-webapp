import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': 'afead47461msh5620abc30d93fa0p129318jsn5a0ac0e7001e',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  })

  return data
}
