import React from 'react';
import styles from '../styles/ContactBlock.module.css'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { contacts } from "./bd"
import Image from 'next/image'
import { Image as AImage } from 'antd';
import { newsList } from "./bd"
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
    return <div className={styles.lastBlock}>{contacts.map((cont, index) => (<div key={"rw"+index}>
      <Row className={index==1?styles.block:styles.firstblock}>
        <Col span={1}/>
        <Col xs={{ span: 22 }} sm={{ span: 22 }} lg={{ span: 16 }}>
          <Typography>
            <Title  level={2}>
              {cont.Title}
            </Title>
          </Typography>
        </Col>
        <Col span={1}></Col>
      </Row>
      <Row>
        <Col span={1} order={1}/>
        <Col xs={{ span: 22, order: 2 }} sm={{ span: 22, order: 2 }} lg={{ span: 10, order: 2 }}>
          <Divider />
        </Col>
        <Col span={1} order={3}/>
        <Col span={1} order={4}/>
        <Col xs={{ span: 22, order: 8 }} sm={{ span: 22, order: 8 }} lg={{ span: 10, order: 5 }}>
          <Divider />
        </Col>
        <Col span={1} order={6}/>
        <Col span={1} order={7}/>
        <Col xs={{ span: 22, order: 5 }} sm={{ span: 22, order: 5 }} lg={{ span: 10, order: 8 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>Адрес:</Paragraph></Typography>
            </Col>
            <Col span={11}> <Typography><Paragraph>{cont.Adress}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={9}/>
        <Col span={1} order={10}/>
        <Col xs={{ span: 22, order: 11 }} sm={{ span: 22, order: 11 }} lg={{ span: 10, order: 11 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>Почта:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography><Paragraph>{cont.Email}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={1} order={1}/>
        <Col xs={{ span: 22, order: 2 }} sm={{ span: 22, order: 2 }} lg={{ span: 10, order: 2 }}>
          <Divider />
        </Col>
        <Col span={1} order={3}/>
        <Col span={1} order={4}/>
        <Col xs={{ span: 22, order: 8 }} sm={{ span: 22, order: 8 }} lg={{ span: 10, order: 5 }}>
          <Divider />
        </Col>
        <Col span={1} order={6}/>
        <Col span={1} order={7}/>
        <Col xs={{ span: 22, order: 5 }} sm={{ span: 22, order: 5 }} lg={{ span: 10, order: 8 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>Телефон:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography><Paragraph>{cont.Phone}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={9}/>
        <Col span={1} order={10}/>
        <Col xs={{ span: 22, order: 11 }} sm={{ span: 22, order: 11 }} lg={{ span: 10, order: 11 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>Факс:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography><Paragraph>{cont.Fax}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={1} order={1}/>
        <Col xs={{ span: 22, order: 2 }} sm={{ span: 22, order: 2 }} lg={{ span: 10, order: 2 }}>
          <Divider />
        </Col>
        <Col span={1} order={3}/>
        <Col span={1} order={4}/>
        <Col xs={{ span: 22, order: 8 }} sm={{ span: 22, order: 8 }} lg={{ span: 10, order: 5 }}>
          <Divider />
        </Col>
        <Col span={1} order={6}/>
        <Col span={1} order={7}/>
        <Col xs={{ span: 22, order: 5 }} sm={{ span: 22, order: 5 }} lg={{ span: 10, order: 8 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>Время работы:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography><Paragraph>{cont.Time}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={9}/>
        <Col span={1} order={10}/>
        <Col xs={{ span: 22, order: 11 }} sm={{ span: 22, order: 11 }} lg={{ span: 10, order: 11 }}>
          <Row>
            <Col span={11}>
              <Typography ><Paragraph>Местное время:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography><Paragraph>{cont.LocalTime}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={12}/>
        <Col span={1} order={13}/>
        <Col xs={{ span: 22, order: 14 }} sm={{ span: 22, order: 14 }} lg={{ span: 10, order: 14 }}>
          <Divider />
        </Col>
        <Col span={1} order={15}/>
        <Col span={1} order={16}/>
        <Col xs={{ span: 0, order: 17 }} sm={{ span: 0, order: 17 }} lg={{ span: 10, order: 17 }}>
          <Divider />
        </Col>
        <Col span={1} order={18}/>
      </Row>
    </div>))}</div>
  }
}

export { ContactBlock }

