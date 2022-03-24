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
            <Title className={styles.title}>ООО «ТДЭ» специализируется на поставке электрооборудования и электромонтажных материалов</Title>
          </Typography>
        </Col>
        <Col xs={{ span: 1 }} sm={{ span: 1 }} lg={{ span: 6 }}/>
        <Col span={1}/>
        <Col xs={{ span: 22 }} sm={{ span: 22 }} lg={{ span: 16 }}>
          <Typography>
            <Paragraph className={styles.text}>
              ООО «ТДЭ» специализируется на производстве и поставке электрооборудования и электромонтажных материалов
              Всё выпускаемое оборудование сертифицируется на соответствие российским требованиям по безопасности электротехнической
              продукции. Предоставляется гарантийное и послегарантийное обслуживание. Имея собственные площади в г.Чебоксары по изготовлению
              и комплектации блочно-модульных подстанций, а таже партнерские производства на северо-западе и в центральной части Российской
              Федерации, наш коллектив выполняет как типовые, так и нестандартные технические решения по обеспечению электроснабжения
              предприятий и организаций.
            </Paragraph>
          </Typography>
        </Col>
        <Col xs={{ span: 1 }} sm={{ span: 1 }} lg={{ span: 7 }}/>
      </Row>
    </>
  }
}


export { AboutBlock }

