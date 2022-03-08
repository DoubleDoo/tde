import React from 'react';
import styles from '../styles/ContactBlock.module.css'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import {contacts} from "./constants"
import Image from 'next/image'
import {Image as AImage} from 'antd' ; 
import {newsList} from "./constants"
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Typography , Divider } from 'antd';
import { Form, Input, Button, Space } from 'antd';

const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography;

type Props = {

};
type State = {

};

class ContactBlock extends React.Component<Props, State> {
  
    constructor (props:Props) {
      super(props)
    }

    render() {  
      return <> <Row className={styles.block}>
      <Col span={1}></Col>
      <Col xs={{span: 22}} sm={{span: 16}} lg={{span: 16}}>
        <Typography>
          <Title className={styles.titlesBlock} type={"secondary"} level={1}>
           {contacts[0].Title}
          </Title>
        </Typography>
      </Col>
      <Col span={1}></Col>
    </Row>
    <Row className={styles.block}>

      <Col span={1}></Col>
      <Col span={10}>
      <Divider/>
      </Col>    
      <Col span={1}></Col>
      <Col span={1}></Col>
      <Col span={10}>
      <Divider/>
      </Col>    
      <Col span={1}></Col>
    </Row>
    <Row className={styles.block}>

      <Col span={1}></Col>
      <Col span={5}>
      <Typography>Адрес: </Typography>
      </Col>    
      <Col> <Typography>{contacts[0].Adress}  </Typography></Col>
      <Col span={1}></Col>
      <Col span={1}></Col>
      <Col span={10}>
      <Divider/>
      </Col>    
      <Col span={1}></Col>
    </Row>
    </>
    }
  }

export { ContactBlock }

