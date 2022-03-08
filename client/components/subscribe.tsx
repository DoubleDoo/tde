import React from 'react';
import styles from '../styles/Subscribe.module.css'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import {imgCarousel} from "./constants"
import Image from 'next/image'
import {Image as AImage} from 'antd' ; 
import {newsList} from "./constants"
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { Form, Input, Button, Space } from 'antd';

const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography;

type Props = {

};
type State = {

};

class Subscribe extends React.Component<Props, State> {
  
    constructor (props:Props) {
      super(props)
    }

    render() {  
      return <> <Row className={styles.block}>
      <Col span={1}></Col>
      <Col xs={{span: 22}} sm={{span: 16}} lg={{span: 16}}>
        <Typography>
          <Title className={styles.titlesBlock} type={"secondary"} level={1}>
          Подпишитесь на нашу новостную рассылку, чтобы получать самую актуальную информацию о новых продуктах нашей компании
          </Title>
        </Typography>
      </Col>
      <Col xs={{span: 1}} sm={{span: 7}} lg={{span: 7}}></Col>
    </Row>
    <Row className={styles.block}>

      <Col span={1}></Col>
      <Col span={22}>
          <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={()=>{}}
                onFinishFailed={()=>{}}
                autoComplete="off"
              >
            <Form.Item 
            wrapperCol={{span: 12, offset: 0}} 
            labelCol={{span: 24, offset: 0}}
              label= "Как к вам можно обращаться?"
              name="username"
              rules={[{ required: true, message: 'ФИО' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            wrapperCol={{span: 12, offset: 0}} 
            labelCol={{span: 24, offset: 0}}
              label="Укажите ваш почтовый ящик"
              name="email"
              rules={[{ required: true, message: 'Адрес электронной почты' }]}
            >
            <Input/>
            </Form.Item>

            <Form.Item 
            >
              <Button type="primary" htmlType="submit">
                Подписаться
              </Button>
            </Form.Item>
          </Form>
      </Col>
      <Col span={1}></Col>
    </Row>
    </>
    }
  }

export { Subscribe }

