import { Button } from 'antd';
import React from 'react';
import styles from '../styles/LastNews.module.css'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import {imgCarousel} from "./bd"
import Image from 'next/image'
import {Image as AImage} from 'antd' ; 
import {newsList} from "./bd"
import { Card } from 'antd';
import { Row, Col,Grid,Divider } from 'antd';
import { Typography } from 'antd';
import { CloseOutlined,ArrowRightOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography;
const { useBreakpoint } = Grid;
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
      <Col span={22}>
        <Typography>
          <Title className={styles.titlesBlock} type={"secondary"} level={1}>Актуальные новости</Title>
        </Typography>
      </Col>
      <Col span={1}></Col>
    </Row>
    <Row className={styles.whiteBlock}>
    <Col span={1}></Col>
    <Col span={22}>
      <Row>
    {newsList.map((image, index) => (
      index<3?
                <Col xs={{ span: 24, order: 0 }} sm={{ span: 24, order: 0  }} md={{ span: 8, order: 0  }} lg={{ span: 8, order: 0  }} key={index} className={styles.smallNewsCard}>
                  <Row>
                    <Col span={24} className={styles.newsTextWrap}>
                      <Divider />
                      <Typography>
                        <Paragraph className={styles.smallDataCard} type={"secondary"}>
                          {image.data}
                        </Paragraph>
                        <Paragraph className={styles.smallTitleCard} type={"secondary"}>{image.name}</Paragraph>
                        {/* <Paragraph className={styles.smallTextCard} type={"secondary"}>{image.text}</Paragraph> */}
                      </Typography>
                    </Col>
                    <Col span={24}>
                      <div className={styles.imgbox}>
                        <Image className={styles.img} alt="example" src={image.imglink} layout="fill" />
                      </div>
                    </Col>
                    <Col span={24}>
                      <Typography>
                        <Paragraph className={styles.infolink} type={"secondary"}>Подробнее <ArrowRightOutlined /></Paragraph>
                      </Typography>
                    </Col>
                  </Row>
                </Col>:<></>))}
                <Col span={24}>
                        <Typography>
                          <Paragraph className={styles.newslink} type={"secondary"}>Все новости <ArrowRightOutlined /></Paragraph>
                        </Typography>
                      </Col>
                </Row>
            <Col span={1}></Col>     
            </Col>
    </Row>
    </>
    }
  }

export { LastNews }

