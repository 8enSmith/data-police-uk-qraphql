import { ApolloServer } from "apollo-server"
import resolvers from "./resolvers/index"
import typeDefs from "./typeDefs"
import environment from "./environment"

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground
})

server.listen().then(({ url }: { url: String }) => {
  console.log(`Server ready at ${url}`)
})

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => server.stop())
}
