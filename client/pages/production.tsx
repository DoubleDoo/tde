import type { NextPage } from 'next'
import styles from '../styles/Production.module.css'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import {CustomHeader} from '../components/header';
import {CustomFooter} from '../components/footer';
import { CertificatesBlock } from "../components/certificatesBlock"
import { Typography } from 'antd';
import{solList} from "../components/bd"
import { Cap } from "../components/cap"

const { Title, Paragraph, Text } = Typography;

const { Header, Content, Footer } = Layout;

const Production: NextPage = () => {
  return (
    <Layout>
      <CustomHeader />
      <Cap></Cap>
      <CustomFooter />
    </Layout>
  )
}

export default Production
