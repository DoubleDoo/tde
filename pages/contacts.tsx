import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Contacts.module.css'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import {ProjectsCarousel} from '../components/projectsCarousel';
import {CustomHeader} from '../components/header';
import {CustomFooter} from '../components/footer';


const { Header, Content, Footer } = Layout;

const Contacts: NextPage = () => {
  return (
    <Layout className="layout">
    <CustomHeader/>
    <Content>
      <div className="site-layout-content">Contacts</div>
    </Content>
    <CustomFooter/>
  </Layout>
  )
}

export default Contacts
