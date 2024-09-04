/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
}

export type Country = {
  __typename?: 'Country'
  code?: Maybe<Scalars['String']['output']>
  flag?: Maybe<Scalars['String']['output']>
  id: Scalars['Float']['output']
  name: Scalars['String']['output']
}

export type League = {
  __typename?: 'League'
  country: Country
  id: Scalars['Float']['output']
  logo: Scalars['String']['output']
  name: Scalars['String']['output']
}

export type Player = {
  __typename?: 'Player'
  id: Scalars['Float']['output']
}

export type Query = {
  __typename?: 'Query'
  countries: Array<Country>
  country: Country
  leagues: Array<League>
  players: Array<Player>
  seasons: Array<Season>
  teams: Array<Team>
  user: User
  users: Array<User>
}

export type QueryCountryArgs = {
  id: Scalars['Int']['input']
}

export type QueryUserArgs = {
  id: Scalars['Int']['input']
}

export type Season = {
  __typename?: 'Season'
  id: Scalars['Float']['output']
}

export type Team = {
  __typename?: 'Team'
  id: Scalars['Float']['output']
}

export type User = {
  __typename?: 'User'
  createdAt: Scalars['DateTime']['output']
  email: Scalars['String']['output']
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
  password: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type Get_CountriesQueryVariables = Exact<{ [key: string]: never }>

export type Get_CountriesQuery = {
  __typename?: 'Query'
  countries: Array<{
    __typename?: 'Country'
    id: number
    name: string
    code?: string | null
    flag?: string | null
  }>
}

export const Get_CountriesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GET_COUNTRIES' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                { kind: 'Field', name: { kind: 'Name', value: 'flag' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<Get_CountriesQuery, Get_CountriesQueryVariables>
