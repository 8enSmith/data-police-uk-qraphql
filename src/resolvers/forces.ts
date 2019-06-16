import { getData, getUrl } from "../utils"

const getForcesUrl = () => getUrl("forces")

export const forces = async () => {
  const url = getForcesUrl()

  return await getData(url)
}

export const force = async (_: any, { id }: { id: string }) => {
  const url = `${getForcesUrl()}/${id}`

  return await getData(url)
}

export const forceSeniorOfficers = async (_: any, { id }: { id: string }) => {
  const url = `${getForcesUrl()}/${id}/people`

  return await getData(url)
}
