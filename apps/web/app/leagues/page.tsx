import { Get_LeaguesDocument, Get_LeaguesQuery } from '../graphql/__generated__/graphql'
import { apolloClient } from '../graphql/apollo.client'
import LeaguesList from './leagues-list.component'

export default async function LeaguesPage() {
  try {
    const { data } = await apolloClient.query<Get_LeaguesQuery>({
      query: Get_LeaguesDocument,
    })

    return <LeaguesList leagues={data.leagues || []} />
  } catch (err) {
    return <LeaguesList leagues={[]} />
  }
}
