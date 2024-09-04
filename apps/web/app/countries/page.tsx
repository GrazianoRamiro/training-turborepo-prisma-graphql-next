import { Get_CountriesDocument, Get_CountriesQuery } from '../graphql/__generated__/graphql'
import { apolloClient } from '../graphql/apollo.client'

export default async function CountriesPage() {
  const { data } = await apolloClient.query<Get_CountriesQuery>({
    query: Get_CountriesDocument,
  })

  return (
    <div>
      {data.countries.map(country => (
        <div key={country.id}>
          <h2>{country.name}</h2>
          <p>Code: {country.code}</p>
        </div>
      ))}
    </div>
  )
}
