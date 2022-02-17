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

const { Meta } = Card;

type Props = {

};
type State = {

};

class LastNews extends React.Component<Props, State> {
  
    constructor (props:Props) {
      super(props)
    }

    render() {  
        return <Row className={styles.newsCardsRow}>
          {newsList.map((image, index) => (
            <Col span={6} key={index}><Card 
              className={styles.newsCard}
              hoverable
              cover={<Image  alt="example" src={image.imglink} layout="responsive" width={500} height={200}/>}>
              <Meta  title={image.name} description={image.text} />
            </Card>
            </Col>))}
        </Row>
    }
  }

export { LastNews }

    //   return  <Carousel autoplay>
    //   {imgCarousel.map((image, index) => (
    //     <div key={index} className="test">
    //       <Image src={image.link}   layout="fill"/>
    //     </div>
    //   ))}
    // </Carousel>
