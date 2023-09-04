
import { Burger, Group } from '@mantine/core'
import React from 'react'

export const BurgerComponent = ({open}) => {
  return (
    <>
     <Group position="right">
        <Burger onClick={open}>Open Drawer</Burger>
      </Group>
    
    </>
  )
}
