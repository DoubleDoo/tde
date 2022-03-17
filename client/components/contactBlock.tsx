import React from 'react';
import styles from '../styles/ContactBlock.module.css'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { contacts } from "./constants"
import Image from 'next/image'
import { Image as AImage } from 'antd';
import { newsList } from "./constants"
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Typography, Divider } from 'antd';
import { Form, Input, Button, Space } from 'antd';

const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography;

type Props = {

};
type State = {

};

class ContactBlock extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return <div className={styles.lastBlock}>{contacts.map((cont, index) => (<>
      <Row className={index==1?styles.block:styles.firstblock}>
        <Col span={1}></Col>
        <Col xs={{ span: 22 }} sm={{ span: 22 }} lg={{ span: 16 }}>
          <Typography>
            <Title className={styles.titlesBlock} type={"secondary"} level={1}>
              {cont.Title}
            </Title>
          </Typography>
        </Col>
        <Col span={1}></Col>
      </Row>
      <Row className={styles.block}>
        <Col span={1} order={1} ></Col>
        <Col xs={{ span: 22, order: 2 }} sm={{ span: 22, order: 2 }} lg={{ span: 10, order: 2 }}>
          <Divider />
        </Col>
        <Col span={1} order={3} ></Col>
        <Col span={1} order={4}></Col>
        <Col xs={{ span: 22, order: 8 }} sm={{ span: 22, order: 8 }} lg={{ span: 10, order: 5 }}>
          <Divider />
        </Col>
        <Col span={1} order={6} ></Col>
        <Col span={1} order={7} ></Col>
        <Col xs={{ span: 22, order: 5 }} sm={{ span: 22, order: 5 }} lg={{ span: 10, order: 8 }}>
          <Row>
            <Col span={11}>
              <Typography>Адрес: </Typography>
            </Col>
            <Col span={11}> <Typography>{cont.Adress}  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={9} ></Col>
        <Col span={1} order={10} ></Col>
        <Col xs={{ span: 22, order: 11 }} sm={{ span: 22, order: 11 }} lg={{ span: 10, order: 11 }}>
          <Row>
            <Col span={11}>
              <Typography>Почта: </Typography>
            </Col>
            <Col span={11}> <Typography>{cont.Email}  </Typography></Col>
          </Row>
        </Col>
      </Row>
      <Row className={styles.block}>
        <Col span={1} order={1} ></Col>
        <Col xs={{ span: 22, order: 2 }} sm={{ span: 22, order: 2 }} lg={{ span: 10, order: 2 }}>
          <Divider />
        </Col>
        <Col span={1} order={3} ></Col>
        <Col span={1} order={4}></Col>
        <Col xs={{ span: 22, order: 8 }} sm={{ span: 22, order: 8 }} lg={{ span: 10, order: 5 }}>
          <Divider />
        </Col>
        <Col span={1} order={6} ></Col>
        <Col span={1} order={7} ></Col>
        <Col xs={{ span: 22, order: 5 }} sm={{ span: 22, order: 5 }} lg={{ span: 10, order: 8 }}>
          <Row>
            <Col span={11}>
              <Typography>Телефон: </Typography>
            </Col>
            <Col span={11}> <Typography>{cont.Phone}  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={9} ></Col>
        <Col span={1} order={10} ></Col>
        <Col xs={{ span: 22, order: 11 }} sm={{ span: 22, order: 11 }} lg={{ span: 10, order: 11 }}>
          <Row>
            <Col span={11}>
              <Typography>Факс: </Typography>
            </Col>
            <Col span={11}> <Typography>{cont.Fax}  </Typography></Col>
          </Row>
        </Col>
      </Row>
      <Row className={styles.block}>
        <Col span={1} order={1} ></Col>
        <Col xs={{ span: 22, order: 2 }} sm={{ span: 22, order: 2 }} lg={{ span: 10, order: 2 }}>
          <Divider />
        </Col>
        <Col span={1} order={3} ></Col>
        <Col span={1} order={4}></Col>
        <Col xs={{ span: 22, order: 8 }} sm={{ span: 22, order: 8 }} lg={{ span: 10, order: 5 }}>
          <Divider />
        </Col>
        <Col span={1} order={6} ></Col>
        <Col span={1} order={7} ></Col>
        <Col xs={{ span: 22, order: 5 }} sm={{ span: 22, order: 5 }} lg={{ span: 10, order: 8 }}>
          <Row>
            <Col span={11}>
              <Typography>Время работы: </Typography>
            </Col>
            <Col span={11}> <Typography>{cont.Time}  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={9} ></Col>
        <Col span={1} order={10} ></Col>
        <Col xs={{ span: 22, order: 11 }} sm={{ span: 22, order: 11 }} lg={{ span: 10, order: 11 }}>
          <Row>
            <Col span={11}>
              <Typography>Местное время: </Typography>
            </Col>
            <Col span={11}> <Typography>{cont.LocalTime}  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={12} ></Col>
        <Col span={1} order={13} ></Col>
        <Col xs={{ span: 22, order: 14 }} sm={{ span: 22, order: 14 }} lg={{ span: 10, order: 14 }}>
          <Divider />
        </Col>
        <Col span={1} order={15} ></Col>
        <Col span={1} order={16} ></Col>
        <Col xs={{ span: 0, order: 17 }} sm={{ span: 0, order: 17 }} lg={{ span: 10, order: 17 }}>
          <Divider />
        </Col>
        <Col span={1} order={18} ></Col>
      </Row>
    </>))}</div>
  }
}

export { ContactBlock }

