import axios from "axios"
const policeBaseUrl = "https://data.police.uk/api/"
const postCodeIoBaseUrl = "https://api.postcodes.io/"

export const getUrl = (endpoint: string, baseUrl: string = policeBaseUrl) =>
    `${baseUrl}/${endpoint}`

export const getData = async (url: string) => {
    const result = await axios.get(url)
    return result.data
}

interface ICoordinates {
    latitude: number
    longitude: number
}

export const getPostCodeLatLng = async (
    postCode: string
): Promise<ICoordinates> => {
    const { result } = await getData(
        getUrl(`postcodes/${postCode}`, postCodeIoBaseUrl)
    )

    return { latitude: result.latitude, longitude: result.longitude }
}
