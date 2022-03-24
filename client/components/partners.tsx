import { Button } from 'antd';
import React from 'react';
import styles from '../styles/Partners.module.css'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import Image from 'next/image'
import {Image as AImage} from 'antd' ; 
import {newsList} from "./bd"
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography;

type Props = {

};
type State = {

};

class Partners extends React.Component<Props, State> {
  
    constructor (props:Props) {
      super(props)
    }

    render() {  
      return <Row className={styles.block}>
      <Col span={1}></Col>
      <Col span={22}>
        <Typography>
          <Title className={styles.titlesBlock} type={"secondary"} level={1}>Наши партнеры</Title>
        </Typography>
      </Col>
      <Col span={1}></Col>
    </Row>
    }
  }

export { Partners }

