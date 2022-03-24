import { Button } from 'antd';
import React from 'react';
import styles from '../styles/Test.module.css'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import Image from 'next/image'
import {Image as AImage} from 'antd' ; 
import {newsList} from "./bd"
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import {сurPageIndexActT} from '../.store/actions/сurPageIndex';
import store from '../.store/store';

const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography;

type Props = {

};
type State = {

};

class Test extends React.Component<Props, State> {
  
    constructor (props:Props) {
      super(props)
    }

    render() {  
      return <Row className={styles.block}>
        <Col span={24}>
          <Button onClick={()=>console.log(store.getState().сurPageIndex)}>press</Button>
          <Button onClick={()=>store.dispatch({type: сurPageIndexActT, value:store.getState().сurPageIndex+1})}>+</Button>
          <Button onClick={()=>store.dispatch({type: сurPageIndexActT, value:store.getState().сurPageIndex-1})}>-</Button>
        </Col>
    </Row>
    }
  }

export { Test }


// import {сurPageIndexActT} from '../.store/actions/сurPageIndex';
// import store from '../.store/store';
// <Button onClick={()=>console.log(store.getState().сurPageIndex)}>press</Button>
// <Button onClick={()=>store.dispatch({type: сurPageIndexActT, value:store.getState().сurPageIndex+1})}>+</Button>
// <Button onClick={()=>store.dispatch({type: сurPageIndexActT, value:store.getState().сurPageIndex-1})}>-</Button>