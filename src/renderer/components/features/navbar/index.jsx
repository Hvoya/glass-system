import React from 'react';
import { Alignment, Button, Navbar, NavbarDivider } from '@blueprintjs/core';

const Header = () => {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Button large minimal icon="box">
          Заказы
        </Button>
        <NavbarDivider />
        <Button large minimal icon="people">
          Работники
        </Button>
        <NavbarDivider />
        <Button large minimal icon="form">
          Задачи
        </Button>
      </Navbar.Group>
    </Navbar>
  );
};

export default Header;
