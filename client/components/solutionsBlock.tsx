import React from 'react';
import styles from '../styles/SolutionsBlock.module.css'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import Image from 'next/image'

const { Title, Paragraph, Text, Link } = Typography;

type Props = {

};
type State = {

};

class SolutionsBlock extends React.Component<Props, State> {
  
    constructor (props:Props) {
      super(props)
    }

    render() {  
        return  <> 
        <Row className={styles.topBlock}>
        <Col span={1}></Col>
          <Col span={22} className={styles.data}>
            <Typography>
              <Title className={styles.titlesBlock} type={"secondary"} level={1}>Типовые решения</Title>
            </Typography>
          </Col>
          <Col span={1}></Col>
        </Row>
        <Row className={styles.whiteBlock}>
        <Col span={1} order={1}></Col>
          <Col xs={{span: 22, order:2}} sm={{span: 10 , order:2}} lg={{span: 10, order:2}} className={styles.data}>
            <Image src={"/r1.png"} layout="responsive" width={500} height={300}/>
          </Col>
          <Col span={1} order={3}></Col>
          <Col span={1} order={4}></Col>
          <Col xs={{span: 22, order:8}} sm={{span: 10 , order:5}} lg={{span: 10, order:5}} className={styles.data}>
            <Image src={"/r2.png"} layout="responsive" width={500} height={300}/>
          </Col>
          <Col span={1} order={6}></Col>

        <Col span={1} order={7}></Col>
          <Col xs={{span: 22, order:5}} sm={{span: 10 , order:8}} lg={{span: 10, order:8}}>
          <Paragraph className={styles.textBlock}  type={"secondary"}>
            <ol>
              <li>
              БКТП от 6 до 35кВ с использованием оболочек из бетона производства «Бастион»
              </li>
              <li>
              ПС35 в оболочке Блочно-Модульных зданий из сэндвич панелей и композитов
              </li>
            </ol>
          </Paragraph>
          </Col>
          <Col span={1} order={9}></Col>
          <Col span={1} order={10}></Col>
          <Col xs={{span: 22, order:11}} sm={{span: 10 , order:11}} lg={{span: 10, order:11}}>
          <Paragraph className={styles.textBlock}  type={"secondary"}>
            <ol start={3}>
              <li>
              Блочно Модульные здания
              </li>
              <li>
              ЗРУ 35 кВ, ЗРУ 10 кВ, ОПУ в блочно-модульно зданиях
              </li>
              <li>
              КРУ 35, 20, 10 кВ
              </li>
              <li>
              Шкафы РЗА, АСУ, ССПИ, АИИСКУЭ
              </li>
              <li>
              НКУ на базе шкафов типа ШСР 
              </li>
            </ol>
          </Paragraph>   
          </Col>
          <Col span={1} order={12}></Col>
        </Row>
      </>
    }
  }

export { SolutionsBlock }

