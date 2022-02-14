import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import {PhoneFilled} from '@ant-design/icons';


const { Header, Content, Footer } = Layout;

const Home: NextPage = () => {
  let webmenu=new Array("О компании","Контакты","Продукция","Новости","Сертификаты","Наши заказчики")
  return (
    <Layout className="layout">
    <Header className="header">
    <Row wrap={false}>
      <Col  flex="100px"><Image src="/whitelogo.png" className="logo"  width={60} height= {60}/></Col>
      <Col  flex="auto"><Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        {webmenu.map((item, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{item}</Menu.Item>;
        })}
      </Menu></Col>
      <Col flex="150px" className="phone" xs={30}><PhoneFilled/> +7 (423) 240-21-87 </Col>
    </Row>
    </Header>

    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content">Content</div>
    </Content>

    <Footer style={{ textAlign: "center" }}>ООО ТДЭ ©2022 Created by dubinich</Footer>
  </Layout>
  )
}

export default Home
