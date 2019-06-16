import { forces, force, forceSeniorOfficers } from "./forces"
import { streetLevelCrimes, streetLevelCrimesByPostCode } from "./crimes"
import { IResolvers } from "graphql-tools"

const resolvers: IResolvers = {
  Query: {
    forces,
    force,
    forceSeniorOfficers,
    streetLevelCrimes,
    streetLevelCrimesByPostCode
  }
}

export default resolvers
