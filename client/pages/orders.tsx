import type { NextPage } from 'next'
import styles from '../styles/Solutions.module.css'
import 'antd/dist/antd.css';
import { Layout} from 'antd';
import { Row, Col,Card } from 'antd';
import {CustomHeader} from '../components/header';
import {CustomFooter} from '../components/footer';
import 'antd/dist/antd.css';
import { CertificatesBlock } from "../components/certificatesBlock"
import { Typography } from 'antd';
import{ordrsList} from "../components/bd"
import { Cap } from "../components/cap"
import Image from 'next/image'

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;
const { Header, Content, Footer } = Layout;

const Orders: NextPage = () => {
  return (
    <Layout>
      <CustomHeader />
      {/* <Cap></Cap> */}
      <Content className={styles.content}>
        <Row className={styles.block}>
          <Col span={1}>
          </Col>
          <Col span={22}>
            <Typography>
              <Title level={2}>Продукция со склада</Title>
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
            {/* <Card
              hoverable
              style={{ width: 400,height: 400,  }}
              cover={<div className={styles.imgbox}>
              <Image className={styles.img} alt="example" src={"/store/1.jpeg"} layout="fill" />
            </div>}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card> */}
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

export default Orders
