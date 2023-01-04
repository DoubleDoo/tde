import { Button } from 'antd';
import React from 'react';
import styles from '../styles/LoginBlock.module.css'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import store from '../.store/store';
import { Checkbox, Form, Input } from 'antd';

const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography;

type Props = {

};
type State = {

};

class LoginBlock extends React.Component<Props, State> {
  
    constructor (props:Props) {
      super(props)
    }

    render() {  
      return <div className={styles.block}>
          <div className={styles.lblock}>
          <Paragraph className={styles.text}>
            <Title className={styles.fnt} level={1}>Вход в панель администратора</Title>
            <Title className={styles.fnt} level={5}>У вас нет логина и пароля? Запросите его у <Link href="https://ant.design" target="_blank">
            администратора
            </Link>
            ...
            </Title>
          </Paragraph>
            <Form
            name="basic"
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: false }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item 
              name="username"
              rules={[{ required: true, message: 'Пожалуйста, введите логин!' }]}
            >
              <Input placeholder="Введите логин" className={styles.but}/>
            </Form.Item>
            {/* wrapperCol={{ offset: 8, span: 16 }} */}
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
            >
              <Input.Password placeholder="Введите пароль" className={styles.but}/>
            </Form.Item>

            <Form.Item>
              <Button className={styles.but} type="primary" htmlType="submit">
                Подтвердить
              </Button>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" >
              <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>
            
          </Form>
          
          </div>
        </div>
    }
  }

export { LoginBlock }


// import {сurPageIndexActT} from '../.store/actions/сurPageIndex';
// import store from '../.store/store';
// <Button onClick={()=>console.log(store.getState().сurPageIndex)}>press</Button>
// <Button onClick={()=>store.dispatch({type: сurPageIndexActT, value:store.getState().сurPageIndex+1})}>+</Button>
// <Button onClick={()=>store.dispatch({type: сurPageIndexActT, value:store.getState().сurPageIndex-1})}>-</Button>