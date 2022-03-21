import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Certificates.module.css'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb,Divider  } from 'antd';
import { Row, Col } from 'antd';
import { ProjectsCarousel } from '../components/projectsCarousel';
import { CustomHeader } from '../components/header';
import { CustomFooter } from '../components/footer';
import Link from 'next/link'
import { CertificatesBlock } from "../components/certificatesBlock"
import { Typography } from 'antd';
import{certificates,protocols} from "../components/constants"

const { Title, Paragraph, Text } = Typography;

const { Header, Content, Footer } = Layout;

const Certificates: NextPage = () => {
  return (
    <Layout>
      <CustomHeader />
      <Content className={styles.Content}>
        <Row>
          <Col span={1}>
          </Col>
          <Col span={22}>
            <Typography>
              <Title className={styles.titlesBlock} type={"secondary"} level={1}>Сертификаты</Title>
            </Typography>
          </Col>
          <Col span={1}>
          </Col>
        </Row>
        <Row>
          <Col span={1}>
          </Col>
          <Col span={22}>
            <Row justify="start" >
            {certificates.map((cerf, index) => (<Col key={index+"cerfcol"} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                <CertificatesBlock obj={cerf}/>
              </Col>))}
            </Row>
          </Col>
          <Col span={1}>
          </Col>
        </Row>

        <Row>
          <Col span={1}>
          </Col>
          <Col span={22}>
            <Typography>
              <Title className={styles.titlesBlock} type={"secondary"} level={1}>Протоколы испытаний</Title>
            </Typography>
          </Col>
          <Col span={1}>
          </Col>
        </Row>
        <Row>
          <Col span={1}>
          </Col>
          <Col span={22}>
            <Row >
            {protocols.map((prot, index) => (<Col key={index+"protcol"} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                <CertificatesBlock obj={prot}/>
              </Col>))}
            </Row>
          </Col>
          <Col span={1}>
          </Col>
        </Row>


      </Content>
      <CustomFooter />
    </Layout>
  )
}

export default Certificates
