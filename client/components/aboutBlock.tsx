import React from 'react';
import styles from '../styles/AboutBlock.module.css'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

type Props = {

};
type State = {

};

class AboutBlock extends React.Component<Props, State> {
  
    constructor (props:Props) {
      super(props)
    }

    render() {  
        return  <> 
        <Row className={styles.topBlock}>
        <Col span={1} ></Col>
          <Col xs={{span: 22}} sm={{span: 22}} lg={{span: 17}}>
            <Typography>
              <Title className={styles.titlesBlock} type={"secondary"} level={1}>ООО «ТДЭ» специализируется на поставке электрооборудования и электромонтажных материалов</Title>
            </Typography>
          </Col>
          <Col xs={{span: 1}} sm={{span: 1}} lg={{span: 6}}></Col>
        </Row>
        <Row className={styles.whiteBlock}>
        <Col span={1}></Col>
          <Col xs={{span: 22}} sm={{span: 22}} lg={{span: 16}}>
            <Typography>
              <Paragraph  className={styles.textBlock} type={"secondary"}>
              ООО «ТДЭ» специализируется на производстве и поставке электрооборудования и электромонтажных материалов
Всё выпускаемое оборудование сертифицируется на соответствие российским требованиям по безопасности электротехнической
 продукции. Предоставляется гарантийное и послегарантийное обслуживание. Имея собственные площади в г.Чебоксары по изготовлению
  и комплектации блочно-модульных подстанций, а таже партнерские производства на северо-западе и в центральной части Российской
   Федерации, наш коллектив выполняет как типовые, так и нестандартные технические решения по обеспечению электроснабжения 
   предприятий и организаций.
              </Paragraph>
            </Typography>
          </Col>
          <Col xs={{span: 1}} sm={{span: 1}} lg={{span: 7}}></Col>
        </Row>
        <Row className={styles.mhgreyBlock}>
        <Col span={1} order={1}></Col>
          <Col xs={{span: 22, order:2}} sm={{span: 10 , order:2}} lg={{span: 10, order:2}}>
            <Typography>
              <Title className={styles.titlesBlock} type={"secondary"} level={1}>Миссия</Title>
            </Typography>
          </Col>
          <Col span={1} order={3}></Col>
          <Col span={1} order={4}></Col>
          <Col xs={{span: 22, order:8}} sm={{span: 10 , order:5}} lg={{span: 10, order:5}}>
            <Typography>
              <Title className={styles.titlesBlock} type={"secondary"} level={1}>Видение</Title>
            </Typography>
          </Col>
          <Col span={1} order={6}></Col>
        <Col span={1} order={7}></Col>
          <Col xs={{span: 22, order:5}} sm={{span: 10 , order:8}} lg={{span: 10, order:8}}>
            <Typography>
              <Paragraph  className={styles.textBlock} type={"secondary"}>
               Мы стремимся повысить конкурентоспособность наших Заказчиков, предлагая высокоэффективные и надежные решения в области энергоснабжения 
              </Paragraph>
            </Typography>
          </Col>
          <Col span={1} order={9}></Col>
          <Col span={1} order={10}></Col>
          <Col xs={{span: 22, order:11}} sm={{span: 10 , order:11}} lg={{span: 10, order:11}}>
            <Typography>
              <Paragraph  className={styles.textBlock} type={"secondary"}>
              Мы реализуем стратегию устойчивого развития, осваиваем новые технологии, развиваем свои возможности с целью выхода на объем реализации 1 млрд. руб. по итогу 2022 года и 3 млрд. руб. в 2025 году.
              </Paragraph>
            </Typography>
          </Col>
          <Col span={1} order={12}></Col>
        </Row>
      </>
    }
  }

export { AboutBlock }

