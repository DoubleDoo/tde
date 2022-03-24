import React from 'react';
import styles from '../styles/Footer.module.css'
import { Layout } from 'antd';

class CustomFooter extends React.Component {
    render() {
      return <Layout.Footer style={{ textAlign: "center"}}>
        ООО ТДЭ ©2022 Created by dubinich
      </Layout.Footer>
    }
  }

export { CustomFooter }
