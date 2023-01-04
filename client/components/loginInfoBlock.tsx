import { Button } from 'antd';
import React from 'react';
import styles from '../styles/LoginInfoBlock.module.css'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import store from '../.store/store';
import Image from 'next/image'

const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography;

type Props = {

};
type State = {

};

class LoginInfoBlock extends React.Component<Props, State> {
  
    constructor (props:Props) {
      super(props)
    }

    render() {  
      return <div  className={styles.block}>
         <Image className={styles.img}
            src={"/log.jpg"}
            alt="Picture of the author"
            width={2000}
            height={2000}
          /> 
          <Paragraph className={styles.text}>
            <Title className={styles.fnt} level={3}>Добро пожаловать в новую панель администратора</Title>
          </Paragraph>
          </div>
    }
  }

export { LoginInfoBlock }


// import {сurPageIndexActT} from '../.store/actions/сurPageIndex';
// import store from '../.store/store';
// <Button onClick={()=>console.log(store.getState().сurPageIndex)}>press</Button>
// <Button onClick={()=>store.dispatch({type: сurPageIndexActT, value:store.getState().сurPageIndex+1})}>+</Button>
// <Button onClick={()=>store.dispatch({type: сurPageIndexActT, value:store.getState().сurPageIndex-1})}>-</Button>