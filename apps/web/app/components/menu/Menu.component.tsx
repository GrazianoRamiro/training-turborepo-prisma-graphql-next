'use client'

import Image from 'next/image'
import Link from 'next/link'

import {
  Box,
  CalendarIcon,
  DiceIcon,
  EventIcon,
  FlagIcon,
  HomeIcon,
  List,
  ListIcon,
  ListItem,
  PublicIcon,
  StarIcon,
  Text,
  UsersIcon,
} from '@repo/ui'

import { FacebookAlert } from './FacebookAlert.component'
import { ItemButton } from './ItemButton.component'

const menus = [
  {
    name: 'Destacado',
    icon: StarIcon,
    items: [
      { name: 'Liga Profesional' },
      { name: 'Prim. B Nacional' },
      { name: 'Libertadores' },
      { name: 'Sudamericana' },
      { name: 'Copa Argentina' },
      { name: 'Champions' },
      { name: 'Elim. Conmebol' },
      { name: 'Ranking Titulos' },
      { name: 'Ranking Copas Int' },
    ],
  },
  {
    name: 'Argentina',
    img: 'ar.png',
    items: [
      { name: 'Liga Profesional' },
      { name: 'Copa de la Liga' },
      { name: '-Historiales' },
      { name: '-Tabla Historica' },
      { name: 'Copa Argentina' },
      { name: 'Copas Nacionales' },
      { name: 'Ranking Titulos' },
      { name: 'Prim. B Nacional' },
      { name: 'B Metro' },
      { name: 'Federal A' },
      { name: 'Primera C' },
      { name: 'Prom. Amateur' },
      { name: 'Reserva' },
      { name: 'Femenino' },
    ],
  },
  {
    name: 'Copas Int.',
    icon: EventIcon,
    items: [
      { name: 'Ranking Copas Int' },
      { name: 'Mundial Clubes' },
      { name: 'Libertadores' },
      { name: 'Sudamericana' },
      { name: '+Copas Conmebol' },
      { name: 'Champions' },
      { name: 'Europa League' },
      { name: 'Conference' },
      { name: '+Copas UEFA' },
      { name: 'Concachampions' },
      { name: '+Copas Concacaf' },
      { name: 'Copas AFC' },
      { name: 'Copas CAF' },
      { name: 'Copas OFC' },
    ],
  },
  {
    name: 'Ligas',
    icon: PublicIcon,
    items: [
      { name: 'Premier League', img: 'in.png' },
      { name: 'La Liga', img: 'es.png' },
      { name: 'Serie A', img: 'it.png' },
      { name: 'Bundesliga', img: 'de.png' },
      { name: 'Ligue 1', img: 'fr.png' },
      { name: 'Eredivisie', img: 'ho.png' },
      { name: 'Brasileirao', img: 'br.png' },
      { name: 'Uruguay', img: 'uy.png' },
      { name: 'Paraguay', img: 'py.png' },
      { name: 'Colombia', img: 'co.png' },
      { name: 'Chile', img: 'cl.png' },
      { name: 'Liga MX', img: 'mx.png' },
      { name: 'MLS', img: 'us.png' },
    ],
  },
  {
    name: 'Selecciones',
    icon: FlagIcon,
    items: [
      { name: 'Qatar 22' },
      { name: 'Mundial FEM' },
      { name: 'Mundial Sub 20' },
      { name: '-Elim. Conmebol' },
      { name: 'Copa America' },
      { name: 'Eurocopa' },
      { name: 'J. Olimpicos' },
      { name: 'Naciones UEFA' },
      { name: 'Historial Seleccion' },
    ],
  },
]

export function Menu() {
  return (
    <List
      bg="brand.darkGreenShade1"
      pl="2px"
      height="100%"
      paddingTop="10px"
    >
      <FacebookAlert />

      <ItemButton
        text="Inicio"
        href="/"
        icon={HomeIcon}
        mb="1em"
      />

      {menus.map(menu => (
        <>
          <ListItem
            bg="brand.darkGreenShade5"
            color="brand.vibrantGreen"
            display="flex"
            alignItems="center"
          >
            {menu.icon && <ListIcon as={menu.icon} />}

            {menu.img && (
              <Box mr="0.5em">
                <Image
                  src={`/countries/${menu.img}`}
                  alt="menu.img"
                  width="15"
                  height="15"
                />
              </Box>
            )}

            <Text>{menu.name}</Text>
          </ListItem>

          <List>
            {menu.items.map((item: { name: string; img?: string }) => (
              <ListItem
                _odd={{ bg: 'brand.darkGreenShade3' }}
                _even={{ bg: 'brand.darkGreenShade4' }}
                display="flex"
                alignItems="center"
              >
                {item.img && (
                  <Box mr="0.5em">
                    <Image
                      src={`/countries/${item.img}`}
                      alt="item.img"
                      width="15"
                      height="15"
                    />
                  </Box>
                )}
                <Text>{item.name}</Text>
              </ListItem>
            ))}
          </List>
        </>
      ))}

      <ItemButton
        text="Comunidad"
        href="/"
        icon={UsersIcon}
        mt="1em"
      />

      <ItemButton
        text="Prodemios"
        href="/"
        icon={DiceIcon}
      />

      <ItemButton
        text="Calendario"
        href="/"
        icon={CalendarIcon}
        mb="40px"
      />

      <ListItem
        textAlign="center"
        color="brand.vibrantGreen"
        mb="20px"
      >
        <Link href="/contacto">Contacto</Link>
      </ListItem>

      <ListItem
        textAlign="center"
        color="brand.vibrantGreen"
        mb="20px"
      >
        <Link href="/Legal">Legal - Privacidad</Link>
      </ListItem>

      <ListItem
        fontSize="0.8em"
        mb="40px"
      >
        Promiedos 2009-2024
      </ListItem>
    </List>
  )
}
