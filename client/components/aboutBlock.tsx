import React from 'react';
import styles from '../styles/AboutBlock.module.css'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Paragraph,Title } = Typography;

type Props = {

};
type State = {

};

class AboutBlock extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return <>
      <Row className={styles.block}>
        <Col span={1}/>
        <Col xs={{ span: 22 }} sm={{ span: 22 }} lg={{ span: 17 }}>
          <Typography>
            <Title level={2} >От имени коллектива компании я рад приветствовать вас на нашем сайте!</Title>
          </Typography>
        </Col>
        <Col xs={{ span: 1 }} sm={{ span: 1 }} lg={{ span: 6 }}/>
        <Col span={1}/>
        <Col xs={{ span: 22 }} sm={{ span: 22 }} lg={{ span: 16 }}>
          <Typography>
            <Paragraph>
            ООО «ТДЭ» является производителем блочно модульных подстанций и зданий, а также поставщиком различной электротехнической 
            продукции. Наличие многолетнего опыта, высокого профессионализма и знаний сотрудников, применение современных методов 
            работы, позволяет нам выпускать продукцию хорошего качества. Мы совершенствуем наши изделия, обновляем ассортимент, 
            расширяем географию продаж. Неизменным приоритетом для нашей компании всегда является качество и безопасность производимой 
            продукции. Специалисты ООО "ТДЭ" всегда готовы оказать консультации по модернизации существующего оборудования, а также 
            учитывая пожелания заказчика, изготовить индивидуальное оборудование по заданию заказчика, или предложить оптимальное 
            решение собственных разработок.
            </Paragraph>
            <Paragraph>
            Желаю вам, вдохновения, и удачи во всех делах.
            </Paragraph>
            <Paragraph>
            С уважением, директор ООО «ТДЭ»
            </Paragraph>
            <Paragraph>
            Батурин Дмитрий Геннадиевич
            </Paragraph>
          </Typography>
        </Col>
        <Col xs={{ span: 1 }} sm={{ span: 1 }} lg={{ span: 7 }}/>
      </Row>
    </>
  }
}


export { AboutBlock }

