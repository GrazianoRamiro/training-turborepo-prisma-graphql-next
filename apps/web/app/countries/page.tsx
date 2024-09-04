import { Get_CountriesDocument, Get_CountriesQuery } from '../graphql/__generated__/graphql'
import { apolloClient } from '../graphql/apollo.client'
import CountriesList from './countries-list.component'

export default async function CountriesPage() {
  const { data } = await apolloClient.query<Get_CountriesQuery>({
    query: Get_CountriesDocument,
  })

  return <CountriesList countries={data.countries} />
}
