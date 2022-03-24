import { Button } from 'antd';
import React from 'react';
import styles from '../styles/Cap.module.css'
import { Carousel, } from 'antd';
import 'antd/dist/antd.css';
import Image from 'next/image'
import {Image as AImage} from 'antd' ; 
import {newsList} from "./bd"
import { Card } from 'antd';
import { Row, Col  } from 'antd';
import { Typography } from 'antd';
import {сurPageIndexActT} from '../.store/actions/сurPageIndex';
import store from '../.store/store';
import type { NextPage } from 'next'
import Head from 'next/head'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';

import {CustomHeader} from '../components/header';
import {CustomFooter} from '../components/footer';


const { Title, Paragraph, Text } = Typography;
const { Header, Content, Footer } = Layout;

type Props = {

};
type State = {

};

class Cap extends React.Component<Props, State> {
  
    constructor (props:Props) {
      super(props)
    }

    render() {  
      return <Content className={styles.Content}>
      <Typography>
                <Title className={styles.titlesBlock} type={"secondary"} level={1}>Cтраница в процессе разработки</Title>
      </Typography>
      </Content>
    }
  }

export { Cap }

