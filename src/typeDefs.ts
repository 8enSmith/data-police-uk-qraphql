import { gql } from "apollo-server"

const typeDefs = gql`
  type Query {
    forces: [Force]
    force(id: String!): ForceDetail
    forceSeniorOfficers(id: String!): [SeniorOfficer]
    streetLevelCrimes(lat: Float!, lng: Float!, date: String): [CrimeReport]
    streetLevelCrimesByPostCode(postCode: String!, date: String): [CrimeReport]
  }

  type Force {
    name: String
    id: String
  }

  type ForceDetail {
    description: String
    url: String
    telephone: String
    id: String
    name: String
    engagement_methods: [EngagementMethod]
  }

  type EngagementMethod {
    url: String
    description: String
    title: String
  }

  type SeniorOfficer {
    bio: String
    contact_details: ContactDetails
    name: String
    rank: String
  }

  type ContactDetails {
    email: String
    telephone: String
    mobile: String
    fax: String
    web: String
    address: String
    facebook: String
    twitter: String
    youtube: String
    myspace: String
    bebo: String
    flickr: String
    googlePlus: String
    forum: String
    eMessaging: String
  }

  type CrimeReport {
    category: String
    persistent_id: String
    month: String
    location: Location
    context: String
    id: String
    location_type: String
    location_subtype: String
    outcome_status: OutcomeStatus
  }

  type OutcomeStatus {
    category: String
    date: String
  }

  type Location {
    latitude: Float
    street: Street
    longitude: Float
  }

  type Street {
    id: String
    name: String
  }

  type CrimeCategory {
    url: String
    name: String
  }
`

export default typeDefs
