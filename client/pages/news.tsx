import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/News.module.css'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Card, Button, Tag, Select, Divider } from 'antd';
import { Row, Col,Grid } from 'antd';
import { CustomHeader } from '../components/header';
import { CustomFooter } from '../components/footer';
import { Cap } from '../components/cap';
import { Image as AImage } from 'antd';
import { Typography } from 'antd';
import { CloseOutlined,ArrowRightOutlined } from '@ant-design/icons';
import { newsList, newsTags } from "../components/bd"
import { Pagination } from 'antd';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { Title, Paragraph, Text, } = Typography;
const { Option } = Select;
const { useBreakpoint } = Grid;

const News: NextPage = () => {
  const screens = useBreakpoint();
  return (
    <Layout>
      <CustomHeader />
      <Content className={styles.Content}>
      <Row>
        <Col span={1}>
        </Col>
        <Col span={22}>
          <Typography>
            <Title className={styles.bigimg} type={"secondary"} level={1}>Новости</Title>
          </Typography>

        </Col>
        <Col span={1}>
        </Col>
      </Row>

      <Row>
        <Col span={1}>
        </Col>
        <Col span={22}>
          <Row className={styles.bigimg}>
            {newsTags.map((image, index) => (
              <Col className={styles.tagBox} key={index}>
                <Button className={styles.tag}>
                  {image.tag}
                </Button>
              </Col>))}
            <Col className={styles.tagBox}>
              <Select placeholder="Год" style={{ width: 120 }} className={styles.tag}>
                <Option value="2021">2021</Option>
                <Option value="2022">2022</Option>
              </Select>
            </Col>
            <Col className={styles.tagBox}>
              <Select placeholder="Месяц" style={{ width: 120 }} className={styles.tag}>
                <Option value="1">Январь</Option>
                <Option value="2">Февраль</Option>
                <Option value="3">Март</Option>
                <Option value="4">Апрель</Option>
                <Option value="5">Май</Option>
                <Option value="6">Июнь</Option>
                <Option value="7">Июль</Option>
                <Option value="8">Август</Option>
                <Option value="9">Сентябрь</Option>
                <Option value="10">Октябрь</Option>
                <Option value="11">Ноябрь</Option>
                <Option value="12">Декабрь</Option>
              </Select>
            </Col>
            <Col className={styles.tagBox}>
              <Button danger type="primary" icon={<CloseOutlined />}>
                Сбросить фильтры
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={1}>
        </Col>
      </Row>
      <Row>
        <Col span={1}>
        </Col>
        <Col span={22}>
          <Row>
          {!screens["sm"] ? <></> :
            <Col span={24}>
              <Row className={styles.bigimg}>
                <Col xs={{ span: 24, order: 2}} sm={{ span: 24, order: 2  }} md={{ span: 24, order: 2  }} lg={{ span: 16, order: 1  }}>
                  <div className={styles.bigimgbox}>
                    <Image className={styles.img} alt="example" src={newsList[0].imglink} layout="fill" />
                  </div>
                </Col>
                <Col  xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1  }} md={{ span: 24, order: 1  }} lg={{ span: 8, order: 2  }}>
                  <Row className={screens["lg"]?styles.textimg:styles.textimgnopad}>
                    <Col span={24}>
                      <Divider className={styles.devider}/>
                      <Typography>
                      <Paragraph className={styles.smallDataCard} type={"secondary"}>
                          {newsList[0].data}
                        </Paragraph>
                        <Paragraph className={styles.bigTitleCard} type={"secondary"}>{newsList[0].name}</Paragraph>
                      </Typography>
                    </Col>
                    <Col span={24}>
                      <Typography>
                        <Title className={styles.newsText} type={"secondary"} level={5}>{newsList[0].text}</Title>
                      </Typography>
                    </Col>
                  </Row>
                </Col>
                {!screens["sm"] ? <></> :<Col span={24} order= {3}>
                      <Typography>
                        <Paragraph className={styles.infolink} type={"secondary"}>Подробнее <ArrowRightOutlined /></Paragraph>
                      </Typography>
                    </Col>}
              </Row>
            </Col>}


            {newsList.map((image, index) => (
              index == 0&&screens["sm"] ? <></> :
                <Col xs={{ span: 24, order: 0 }} sm={{ span: 12, order: 0  }} md={{ span: 8, order: 0  }} lg={{ span: 6, order: 0  }} key={index} className={styles.smallNewsCard}>
                  <Row>
                    <Col span={24} className={styles.newsTextWrap}>
                      <Divider />
                      <Typography>
                        <Paragraph className={styles.smallDataCard} type={"secondary"}>
                          {image.data}
                        </Paragraph>
                        <Paragraph className={styles.smallTitleCard} type={"secondary"}>{image.name}</Paragraph>
                        {/* <Paragraph className={styles.smallTextCard} type={"secondary"}>{image.text}</Paragraph> */}
                      </Typography>
                    </Col>
                    <Col span={24}>
                      <div className={styles.imgbox}>
                        <Image className={styles.img} alt="example" src={image.imglink} layout="fill" />
                      </div>
                    </Col>
                    <Col span={24}>
                      <Typography>
                        <Paragraph className={styles.infolink} type={"secondary"}>Подробнее <ArrowRightOutlined /></Paragraph>
                      </Typography>
                    </Col>
                  </Row>
                </Col>))}
          </Row>
        </Col>
        <Col span={1} />
      </Row>
      <Row justify="center">
        <Col className={styles.pagin}>
        <Pagination defaultCurrent={1} total={500} />
        </Col>

        </Row>



      

      </Content>
      <CustomFooter />
    </Layout>
  )
}

export default News
