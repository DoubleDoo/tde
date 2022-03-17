import { Button } from 'antd';
import React from 'react';
import styles from '../styles/CertificatesBlock.module.css'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import {imgCarousel} from "./constants"
import Image from 'next/image'
import {Image as AImage} from 'antd' ; 
import {newsList} from "./constants"
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import {certificates} from '../components/constants';
import {
  DownloadOutlined
} from '@ant-design/icons';

const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography;

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

