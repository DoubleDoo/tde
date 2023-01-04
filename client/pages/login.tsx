import type { NextPage } from 'next'
import styles from '../styles/Login.module.css'
import 'antd/dist/antd.css';
import { Layout  } from 'antd';
import { Card  } from 'antd';
import { Row, Col } from 'antd';
import { CustomHeader } from '../components/header';
import { CustomFooter } from '../components/footer';
import { Typography } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { LoginBlock } from '../components/loginBlock';
import { LoginInfoBlock } from '../components/loginInfoBlock';

const { Title, Paragraph, Text } = Typography;

const { Header, Content, Footer } = Layout;

const Solutions: NextPage = () => {
  return (
    <Row className={styles.block}>
        <Col xs={{ span: 0}} sm={{ span: 0 }} md={{ span: 7 }} lg={{ span: 7}}>
        <LoginInfoBlock></LoginInfoBlock>
        </Col>
        <Col xs={{ span: 24}} sm={{ span: 24 }} md={{ span: 17 }}  lg={{ span: 17}}>
        <LoginBlock></LoginBlock>
        </Col>
    </Row>
  )
}

export default Solutions
