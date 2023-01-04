import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import { Layout} from 'antd';
import { Row, Col } from 'antd';

import {MainCarouselBlock} from '../components/mainCarouselBlock';
import {CustomHeader} from '../components/header';
import {CustomFooter} from '../components/footer';
import {AboutBlock} from '../components/aboutBlock';
import { SolutionsBlock } from '../components/solutionsBlock';
import { SubscribeBlock } from '../components/subscribeBlock';


const { Header, Content, Footer } = Layout;

const Home: NextPage = () => {
  return (
    <Layout>
    <CustomHeader/>
    <Content className={styles.content}>
      <Row>
        <Col span={24}>
          Admin
        </Col>
      </Row>
    </Content>
    <CustomFooter/>
  </Layout>
  )
}

export default Home


