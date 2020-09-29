import React, { useState } from 'react';
import { Pets } from '../components';
import { DatePicker, Button as AntButton } from 'antd';
import 'antd/dist/antd.css';
import FloatingButton from '../components/FloatingButton';

const Home = (props) => {
  const [petList, setPetList] = useState([
    {
      name: 'Zelda',
    },
    {
      name: 'Ted',
    },
    {
      name: 'Gimli',
    },
    {
      name: 'Dharma',
    },
    {
      name: 'Bun-Bun',
    },
  ]);

  const plusBtnClicked = (event) => {
    event.preventDefault();
    console.log('plus button clicked');
    const newList = [...petList];
    newList.push({ name: 'Snek' });
    setPetList(newList);
  };

  return (
    <Pets petList={petList}>
      <DatePicker />
      <AntButton type='primary'>Button</AntButton>
      <FloatingButton btnClicked={plusBtnClicked} />
    </Pets>

    // <Container className='pet-container' fluid>
    // <Container>
    //   <Row>
    //     <Col sm={8} style={{ border: '2px solid pink' }}>
    //       sm=8
    //     </Col>
    //     <Col sm={4} style={{ border: '2px solid red' }}>
    //       sm=4
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col sm style={{ border: '2px solid green' }}>
    //       sm=true
    //     </Col>
    //     <Col sm style={{ border: '2px solid orange' }}>
    //       sm=true
    //     </Col>
    //     <Col sm style={{ border: '2px solid purple' }}>
    //       sm=true
    //     </Col>
    //   </Row>
    // </Container>

    //   {/* next section of card list */}
    //   <Row>
    //     {petList.map((pet, index) => (
    //       <Card petName={pet.name} key={index} />
    //     ))}
    //   </Row>
    //   <DatePicker />
    //   <AntButton type='primary'>Button</AntButton>

    //   <FloatingButton btnClicked={plusBtnClicked} />
    // </Container>
  );
};

export default Home;
