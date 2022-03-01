import React, { Fragment, useState } from 'react';
import Header from '../../components/header';
import Notes from '../../components/notes';

const HomeScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <Fragment>
      <Header setIsOpen={setIsOpen}/>
      <Notes setIsOpen={setIsOpen} isOpen={isOpen} />
    </Fragment>
  );
}
export default HomeScreen;