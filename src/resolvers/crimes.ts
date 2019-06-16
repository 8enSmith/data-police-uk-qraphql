import { getUrl, getData, getPostCodeLatLng } from "../utils"

const getAllCrimesUrl = () => getUrl("crimes-street/all-crime")

interface IStreetLevelCrimesParams {
  lat: number
  lng: number
  date?: string
}

export const streetLevelCrimes = async (
  _: any,
  { lat, lng, date }: IStreetLevelCrimesParams
) => {
  let url = `${getAllCrimesUrl()}?lat=${lat}&lng=${lng}`

  if (date) {
    url = `${url}&date=${date}`
  }

  return await getData(url)
}

interface IStreetLevelCrimesByPostCodeParams {
  postCode: string
  date?: string
}

export const streetLevelCrimesByPostCode = async (
  _: any,
  { postCode, date }: IStreetLevelCrimesByPostCodeParams
) => {
  const { latitude, longitude } = await getPostCodeLatLng(postCode)
  let url = `${getAllCrimesUrl()}?lat=${latitude}&lng=${longitude}`

  if (date) {
    url = `${url}&date=${date}`
  }

  return await getData(url)
}
