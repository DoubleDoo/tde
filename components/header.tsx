import React from 'react';
import styles from '../styles/header.module.css'
import { Layout, Menu} from 'antd';
import { Row, Col } from 'antd';
import {PhoneFilled} from '@ant-design/icons';
import {webmenu} from "./constants"
import Image from 'next/image'
import Link from 'next/link'

class CustomHeader extends React.Component {
    render() {
      return <Layout.Header className="header">
      <Row wrap={false}>
        <Col  flex="100px"><Image src="/whitelogo.png" className="logo" alt="Logo"  width={60} height= {60}/></Col>
        {/* <Link href={"/"}> */}
        <Col  flex="auto"><Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          {webmenu.map((item, index) => {
            const key = index + 1;
            return <Menu.Item key={key}><Link href={item.link}>{item.name}</Link></Menu.Item>;
          })}
        </Menu></Col>
        <Col flex="150px" className="phone" xs={30}><PhoneFilled/> +7 (423) 240-21-87 </Col>
      </Row>
      </Layout.Header>
    }
  }

export { CustomHeader }

