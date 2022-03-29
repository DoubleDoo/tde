import type { NextPage } from 'next'
import styles from '../styles/Orders.module.css'
import 'antd/dist/antd.css';
import { Layout} from 'antd';
import { Row, Col,Card } from 'antd';
import {CustomHeader} from '../components/header';
import {CustomFooter} from '../components/footer';
import 'antd/dist/antd.css';
import { CertificatesBlock } from "../components/certificatesBlock"
import { Typography } from 'antd';
import{stor} from "../components/bd"
import { Cap } from "../components/cap"
import Image from 'next/image'
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';

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
            <Row justify="center" >

<List 
    itemLayout="vertical"
    size="small"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 4,
      className:styles.pagin,
    }}
    dataSource={stor}
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[

        ]}
        extra={
          <Carousel className={styles.car}>
          {item.img.map((image, index) => (
            <div key={index+"skl"}className={styles.imgbox}>
            <Image className={styles.img} alt="example" src={image}   layout="responsive" width={300} height={200}/>
          </div>
          ))}
    
         </Carousel>
      }
      >
        <List.Item.Meta
          title={item.title}
          description={item.price}
        />
        {item.content}
      </List.Item>
    )}
  />
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
