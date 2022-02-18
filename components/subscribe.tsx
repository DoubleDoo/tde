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
      <Col span={16}>
        <Typography>
          <Title className={styles.titlesBlock} type={"secondary"} level={1}>
          Подпишитесь на нашу новостную рассылку, чтобы получать самую актуальную информацию о новых продуктах нашей компании
          </Title>
        </Typography>
      </Col>
      <Col span={7}></Col>
    </Row>
    <Row className={styles.block}>

<Col span={2}></Col>
<Col span={20}>

<Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={()=>{}}
      onFinishFailed={()=>{}}
      autoComplete="off"
    >
      <Form.Item
        label="Как к вам можно обращаться?"
        name="username"
        rules={[{ required: true, message: 'ФИО' }]}
      >
      <Input />
      </Form.Item>

      <Form.Item
        label="Укажите ваш почтовый ящик"
        name="email"
        rules={[{ required: true, message: 'Адрес электронной почты' }]}
      >
      <Input/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Подписаться
        </Button>
      </Form.Item>
    </Form>



</Col>
<Col span={2}></Col>
    </Row>
    </>
    }
  }

export { Subscribe }

