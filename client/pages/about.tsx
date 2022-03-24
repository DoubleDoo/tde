import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import 'antd/dist/antd.css';
import { Layout,Card, Button } from 'antd';
import { Row, Col } from 'antd';
import { CustomHeader } from '../components/header';
import { CustomFooter } from '../components/footer';
import { Typography } from 'antd';
import { newsList,newsTags } from "../components/bd"

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;


const About: NextPage = () => {
  return (
    <Layout>
      <CustomHeader />
      <Row>
        <Col span={1}>
        </Col>
        <Col span={22}>
          <Typography>
            <Title className={styles.titlesBlock} type={"secondary"} level={1}>Новости</Title>
          </Typography>
        </Col>
        <Col span={1}>
        </Col>
      </Row>

      <Row>
        <Col span={1}>
        </Col>
        <Col span={22}>
          <Row>
              {newsTags.map((image, index) => (
                <Col key={index}>
                  <Button>
                     {image.tag}
                  </Button>
                </Col>))}
                <Col>
                  <Button>
                     Год
                  </Button>
                </Col>
          </Row>
        </Col>
        <Col span={1}>
        </Col>
      </Row>



      <Row>
        <Col span={1} />

        {newsList.map((image, index) => (
          <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 22 }} lg={{ span: 22 }} key={index}>
            <Card
              bordered={false}
              className={styles.newsCard}
              hoverable
              cover={<Image alt="example" src={image.imglink} layout="responsive" width={600} height={300} />}>
              <Meta title={image.name} description={image.text} />
            </Card>
          </Col>))}
        <Col span={1} />
      </Row>
      <CustomFooter />
    </Layout>
  )
}

export default About
