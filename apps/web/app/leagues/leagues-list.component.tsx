'use client'

import { Image } from '@chakra-ui/next-js'
import { Card, CardBody, Flex, SimpleGrid, Text } from '@chakra-ui/react'

import { League } from '../graphql/__generated__/graphql'

export default function LeaguesList({ leagues }: { leagues: Array<League> }) {
  return (
    <SimpleGrid
      columns={{ base: 2, md: 3, lg: 5 }}
      spacing={4}
      padding={4}
    >
      {leagues.map(league => (
        <Card key={league.id}>
          <CardBody>
            <Flex
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>{league.name}</Text>
              <Image
                src={league.logo}
                alt={`${league.name} logo`}
                width={10}
                height={10}
              />
            </Flex>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  )
}
