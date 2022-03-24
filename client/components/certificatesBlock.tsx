import React from 'react';
import styles from '../styles/CertificatesBlock.module.css'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {
  DownloadOutlined
} from '@ant-design/icons';

const { Meta } = Card;

type Props = {
obj:{
  name: string,
  link: string,
  data: string 
}
};
type State = {

};

class CertificatesBlock extends React.Component<Props, State> {
  
    constructor (props:Props) {
      super(props)
    }

    render() {  
      return<div className={styles.rowblock}>
       <Card title={this.props.obj.name} className={styles.cblock}  extra={<a href={this.props.obj.link}><DownloadOutlined /></a>} bordered={true}>
      <p className={styles.textblock}>{this.props.obj.data}</p>
      </Card>
    </div>
    }
  }

export { CertificatesBlock }

