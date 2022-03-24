import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Layout} from 'antd';
import { Row, Col } from 'antd';
import {MainCarousel} from '../components/mainCarousel';
import {LastNews} from '../components/lastNews';
import {CustomHeader} from '../components/header';
import {CustomFooter} from '../components/footer';
import {AboutBlock} from '../components/aboutBlock';
import { LastProjects } from '../components/lastProjects';
import { SolutionsBlock } from '../components/solutionsBlock';
import { Partners } from '../components/partners';
import { Subscribe } from '../components/subscribe';
import { Test } from '../components/test';

const { Header, Content, Footer } = Layout;

const Home: NextPage = () => {
  return (
    <Layout>
    <CustomHeader/>
    <Content className={styles.content}>
      <Row>
        <Col span={24}>
          <MainCarousel/>
        </Col>
        <Col span={24}>
          <AboutBlock/>
        </Col>
        <Col span={24}>
          <SolutionsBlock/>
        </Col>
        <Col span={24}>
          <Subscribe/>
        </Col>
      </Row>
    </Content>
    <CustomFooter/>
  </Layout>
  )
}

export default Home


