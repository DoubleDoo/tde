import React from 'react';
import styles from '../styles/Header.module.css'
import { Layout, Menu } from 'antd';
import { Row, Col } from 'antd';
import { PhoneFilled, MailOutlined } from '@ant-design/icons';
import { webmenu } from "./bd"
import Image from 'next/image'
import Link from 'next/link'
import { сurPageIndexActT } from '../.store/actions/сurPageIndex';
import store from '../.store/store';


class CustomHeader extends React.Component {
  render() {
    return <Layout.Header className="header">
      <Row wrap={false} className={styles.hdr}>
        <Col flex="100px">
          <div className={styles.imgbox}>
            <Link href={"/"}>
                <Image src="/whitelogo.png" className={styles.img} alt="Logo" layout='fill' onClick={() => store.dispatch({ type: сurPageIndexActT, value: 0 })}></Image>
            </Link>
          </div>
        </Col>
        <Col flex="auto"><Menu theme="dark" mode="horizontal" selectedKeys={(store.getState().сurPageIndex).toString()}>
          {webmenu.map((item, index) => {
            const key = index + 1;
            return <Menu.Item key={key} onClick={() => store.dispatch({ type: сurPageIndexActT, value: key })} ><Link href={item.link}>{item.name}</Link></Menu.Item>;
          })}
        </Menu></Col>
        <Col flex="150px" className={styles.emphwrper} xs={30}>
          <div className={styles.emph}>

          <PhoneFilled /> +7 (423) 240-21-87
          {/* <MailOutlined/>welcome@tde-tech.ru */}

          </div> 
        </Col>
      </Row>
    </Layout.Header>
  }
}

export { CustomHeader }
