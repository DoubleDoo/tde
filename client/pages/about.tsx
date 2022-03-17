import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import {ProjectsCarousel} from '../components/projectsCarousel';
import {CustomHeader} from '../components/header';
import {CustomFooter} from '../components/footer';
import {Cap} from '../components/cap';

const { Header, Content, Footer } = Layout;

const About: NextPage = () => {
  return (
    <Layout>
    <CustomHeader/>
    <Cap/>
    <CustomFooter/>
  </Layout>
  )
}

export default About
