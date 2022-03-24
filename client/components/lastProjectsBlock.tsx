import React from 'react';
import styles from '../styles/LastProjectsBlock.module.css'
import 'antd/dist/antd.css';
import Image from 'next/image'
import {projList} from "./bd"
import { Card,Divider } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title, Paragraph} = Typography;

type Props = {

};
type State = {

};

class LastProjectsBlock extends React.Component<Props, State> {
  
    constructor (props:Props) {
      super(props)
    }

    render() {  
        return <><Row className={styles.topBlock}>
        <Col span={1}></Col>
        <Col span={22}>
          <Typography>
            <Title className={styles.titlesBlock} type={"secondary"} level={1}>Реализованные проекты</Title>
          </Typography>
        </Col>
        <Col span={1}></Col>
      </Row>
      <Row className={styles.greyBlock}>
      <Col span={1}></Col>
      <Col span={22}>
        <Row>
      {projList.map((image, index) => (
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
                          <Paragraph className={styles.newslink} type={"secondary"}>Все реализованные проекты <ArrowRightOutlined /></Paragraph>
                        </Typography>
                      </Col>
                  </Row>
              <Col span={1}></Col>     
              </Col>
              
      </Row>
      </>
    }
  }

export { LastProjectsBlock }

