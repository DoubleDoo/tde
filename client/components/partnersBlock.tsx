import React from 'react';
import styles from '../styles/PartnersBlock.module.css'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

type Props = {

};
type State = {

};

class PartnersBlock extends React.Component<Props, State> {
  
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

export { PartnersBlock }

