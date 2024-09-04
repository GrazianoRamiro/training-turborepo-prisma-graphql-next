'use client'

import { Image } from '@chakra-ui/next-js'
import { Card, CardBody, Flex, SimpleGrid, Text } from '@chakra-ui/react'

import { Country } from '../graphql/__generated__/graphql'

export default function CountriesList({ countries }: { countries: Array<Country> }) {
  return (
    <SimpleGrid
      columns={{ base: 2, md: 3, lg: 5 }}
      spacing={4}
      padding={4}
    >
      {countries.map(country => (
        <Card key={country.id}>
          <CardBody>
            <Flex
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>{country.name}</Text>
              {country.flag && (
                <Image
                  src={country.flag}
                  alt={`${country.name} flag`}
                  width={10}
                  height={10}
                  loading="lazy"
                />
              )}
            </Flex>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  )
}
