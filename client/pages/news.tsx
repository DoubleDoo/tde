import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/News.module.css'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import {ProjectsCarousel} from '../components/projectsCarousel';
import {CustomHeader} from '../components/header';
import {CustomFooter} from '../components/footer';


const { Header, Content, Footer } = Layout;

const News: NextPage = () => {
  return (
    <Layout className="layout">
    <CustomHeader/>
    <Content>
      <div className="site-layout-content">News</div>
    </Content>
    <CustomFooter/>
  </Layout>
  )
}

export default News