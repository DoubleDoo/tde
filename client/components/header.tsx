import React from 'react';
import styles from '../styles/Header.module.css'
import { Layout, Menu} from 'antd';
import { Row, Col } from 'antd';
import {PhoneFilled} from '@ant-design/icons';
import {webmenu} from "./constants"
import Image from 'next/image'
import Link from 'next/link'
import {сurPageIndexActT} from '../.store/actions/сurPageIndex';
import store from '../.store/store';
{/* <Button onClick={()=>console.log(store.getState().сurPageIndex)}>press</Button>
<Button onClick={()=>store.dispatch({type: сurPageIndexActT, value:store.getState().сurPageIndex+1})}>+</Button>
<Button onClick={()=>store.dispatch({type: сurPageIndexActT, value:store.getState().сurPageIndex-1})}>-</Button> */}

class CustomHeader extends React.Component {
    render() {
      return <Layout.Header className="header">
      <Row wrap={false}>
        <Col  flex="150px">
        <div className={styles.imgbox}>
          <Link href={"/"}>
            <a>
             <Image src="/whitelogo.png" className={styles.img} alt="Logo"  layout='fill' onClick={()=>store.dispatch({type: сurPageIndexActT, value:0})}></Image>
            </a>
         </Link>
         </div>
        </Col>
        <Col  flex="auto"><Menu theme="dark" mode="horizontal" selectedKeys={(store.getState().сurPageIndex).toString()}>
          {webmenu.map((item, index) => {
            const key = index + 1;
            return <Menu.Item key={key}  onClick={()=>store.dispatch({type: сurPageIndexActT, value:key})} ><Link href={item.link}>{item.name}</Link></Menu.Item>;
          })}
        </Menu></Col>
        <Col flex="150px" className={styles.phone} xs={30}><PhoneFilled/> +7 (423) 240-21-87 </Col>
      </Row>
      </Layout.Header>
    }
  }

export { CustomHeader }

{/* <div key={index} className={styles.imgbox}>
<Image src={image.link}  className={styles.img}  
  layout="responsive"
  width={500}
  height={200}
/>
</div> */}
