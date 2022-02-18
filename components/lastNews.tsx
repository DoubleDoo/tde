import { Button } from 'antd';
import React from 'react';
import styles from '../styles/LastNews.module.css'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import {imgCarousel} from "./constants"
import Image from 'next/image'
import {Image as AImage} from 'antd' ; 
import {newsList} from "./constants"
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography;

type Props = {

};
type State = {

};

class LastNews extends React.Component<Props, State> {
  
    constructor (props:Props) {
      super(props)
    }

    render() {  
      return <><Row className={styles.topBlock}>
      <Col span={1}></Col>
      <Col span={22} className={styles.data}>
        <Typography>
          <Title className={styles.titlesBlock} type={"secondary"} level={1}>Новости</Title>
        </Typography>
      </Col>
      <Col span={1}></Col>
    </Row>
    <Row className={styles.whiteBlock}>
        {newsList.map((image, index) => (
        <Col span={6} key={index}><Card 
          className={styles.newsCard}
          hoverable
          cover={<Image  alt="example" src={image.imglink} layout="responsive" width={500} height={200}/>}>
          <Meta  title={image.name} description={image.text} />
        </Card>
        </Col>))}
    </Row>
    </>
    }
  }

export { LastNews }

