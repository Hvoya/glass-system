import React from 'react';

import classes from './styles.module.css';
import Sidebar from '../../features/navbar';

const BaseLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className={classes.container}>{children}</div>
    </>
  );
};

export default BaseLayout;
