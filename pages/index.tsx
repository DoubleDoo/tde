import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import {ProjectsCarousel} from '../components/projectsCarousel';
import {LastNews} from '../components/lastNews';
import {CustomHeader} from '../components/header';
import {CustomFooter} from '../components/footer';
import {AboutBlock} from '../components/aboutBlock';
import { LastProjects } from '../components/lastProjects';
import { SolutionsBlock } from '../components/SolutionsBlock';


const { Header, Content, Footer } = Layout;

const Home: NextPage = () => {
  return (
    <Layout className="layout">
    <CustomHeader/>
    <Content>
    {/* className="site-layout-content" */}
      <Row>
        <Col span={24}>
          <ProjectsCarousel/>
        </Col>
        <Col span={24}>
          <AboutBlock/>
        </Col>
        <Col span={24}>
        <SolutionsBlock/>
        </Col>
        <Col span={24}>
          <LastProjects/>
        </Col>
        <Col span={24}>
          <LastNews/>
        </Col>
      </Row>
    </Content>
    <CustomFooter/>
  </Layout>
  )
}

export default Home
