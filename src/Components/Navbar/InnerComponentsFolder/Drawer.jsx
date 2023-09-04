import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group, Burger, Tooltip, UnstyledButton, Navbar } from '@mantine/core';
import { BurgerComponent } from './Burger';
import { useState } from 'react';
import {
  IconHome2,
  IconDeviceDesktopAnalytics,
  IconCalendarStats,
  IconUser,
} from '@tabler/icons-react';
import './styles.css'



const linksMockdata = [
  'INICIO',
  'NOSOTROS',
  'SERVICIOS',
  'CONTACTO',

];

const mainLinksMockdata = [
  { icon: IconHome2, label: 'Inicio' },
  { icon: IconUser, label: 'Nosotros' },
    { icon: IconCalendarStats, label: 'Servicios' },
  { icon: IconDeviceDesktopAnalytics, label: 'Contacto' },
];



export const DrawerComponent =()=> {
  const [opened, { open, close }] = useDisclosure(false);
  const [activeLink, setActiveLink] = useState('Settings');


   const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
      
      >
        <link.icon size="1.4rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));
  
  const links = linksMockdata.map((link) => (
    <a
      className='links-sideBar'
      href="/"
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
      ));


  

  return (
    <>
      <Drawer opened={opened} onClose={close} >

        <Navbar.Section>

          <div className='contenedor-links'>
            
            <div className='contenedor-mainLinks'>     
            {mainLinks}
            </div>
            <div className='contenedor-linksflex'>
            {links}
           </div>
        </div>    
        </Navbar.Section>
      </Drawer>

      <BurgerComponent open={open} />


    </>
  );
}