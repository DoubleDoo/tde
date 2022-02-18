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
        <Col span={1}></Col>
          <Col span={22}>
            <Typography>
              <Title className={styles.titlesBlock} type={"secondary"} level={1}>ООО «ТДЭ» специализируется на поставке электрооборудования и электромонтажных материалов</Title>
            </Typography>
          </Col>
          <Col span={1}></Col>
        </Row>
        <Row className={styles.whiteBlock}>
        <Col span={1}></Col>
          <Col span={16}>
            <Typography>
              <Paragraph  className={styles.textBlock} type={"secondary"}>
                Мы гарантируем вам приобретение качественного оборудования. Весь наш товар имеет необходимые сертификаты. 
                Предоставляется гарантийное и послегарантийное обслуживание. Имея собственные и партнерские производства в
                Санкт-Петербурге АО ПО «Электробалт», ООО «Терма Энерго»,ООО «Элтех» г.Чебоксары статус партнеры, 
                и собственные сборочные площадки в г.Чебоксары по сборке БМЗ и ПС. 
                Наш коллектив выполняет как типовые так и не стандартные технические решения по изготовлению Подстанций.
              </Paragraph>
            </Typography>
          </Col>
          <Col span={7}></Col>
        </Row>
        <Row className={styles.mhgreyBlock}>
        <Col span={1}></Col>
          <Col span={10}>
            <Typography>
              <Title className={styles.titlesBlock} type={"secondary"} level={1}>Миссия</Title>
            </Typography>
          </Col>
          <Col span={2}></Col>
          <Col span={10}>
            <Typography>
              <Title className={styles.titlesBlock} type={"secondary"} level={1}>Видение</Title>
            </Typography>
          </Col>
          <Col span={1}></Col>
        </Row>
        <Row className={styles.mbgreyBlock}>
        <Col span={1}></Col>
          <Col span={10}>
            <Typography>
              <Paragraph  className={styles.textBlock} type={"secondary"}>
               Мы стремимся повысить конкурентоспособность наших Заказчиков, предлагая высокоэффективные и надежные решения в области энергоснабжения 
              </Paragraph>
            </Typography>
          </Col>
          <Col span={2}></Col>
          <Col span={10}>
            <Typography>
              <Paragraph  className={styles.textBlock} type={"secondary"}>
              Мы реализуем стратегию устойчивого развития, осваиваем новые технологии, развиваем свои возможности с целью выхода на объем реализации 1 млрд. руб. по итогу 2022 года и 3 млрд. руб. в 2025 году.
              </Paragraph>
            </Typography>
          </Col>
          <Col span={1}></Col>
        </Row>
      </>
    }
  }

export { AboutBlock }

