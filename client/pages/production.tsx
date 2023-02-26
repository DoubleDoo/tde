import type { NextPage } from 'next'
import styles from '../styles/Production.module.css'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import {CustomHeader} from '../components/header';
import {CustomFooter} from '../components/footer';
import { CertificatesBlock } from "../components/certificatesBlock"
import { Typography } from 'antd';
import{solList} from "../components/bd"
import { Cap } from "../components/cap"
import { Carousel } from 'antd';
import { oCarouselContent } from "../components/bd"
import Image from 'next/image'
import Link from 'next/link'

const { Title, Paragraph, Text } = Typography;

const { Header, Content, Footer } = Layout;

const Production: NextPage = () => {
  return (
    <Layout>
      <CustomHeader />
      <Content className={styles.content}>
        <Row className={styles.block}>
          <Col span={1}/>
          <Col span={22}>
            <Typography>
              <Title level={1}>Наша продукция</Title>
            </Typography>
          </Col>
          <Col span={1}/>
        </Row>
        <Row className={styles.block}>
          <Col span={1}/>
          <Col span={22}>
            <Typography>
              <Title level={2}>ЯКНО 6(10)кВ.</Title>
            </Typography>
          </Col>
          <Col span={1}/>
        </Row>
        <Row className={styles.block}>
          <Col span={1}/>
          <Col span={22}>
            <Image className={styles.img}
            src={oCarouselContent[0].link}
            alt="Picture of the author"
            width={500}
            height={500}
          /> 
          </Col>
          <Col span={1}/>
          </Row>
          <Row className={styles.block}>
          <Col span={1}/>
          <Col span={22}>
          <Typography>
            Наш партнер производственная площадка г.Красноярск компания <Link href={"https://abaz24.ru/servis"}>{"АБАЗ-24"}</Link>
          </Typography>
          </Col>
          <Col span={1}/>
        </Row>
        <Row className={styles.block}>
          <Col span={1}/>
          <Col span={22}>
            <Typography>
              <Title level={1}>Прочая продукция</Title>
            </Typography>
          </Col>
          <Col span={1}/>
        </Row>
        <Row className={styles.block}>
          <Col span={1}/>
          <Col span={22}>
            <Typography>
            <Paragraph>
              <ul>
                <li>
                Блочно Модульные Здания
                </li>
                <li>
                КТПБ
                </li>
                <li>
                Низковольтные распределительные устройства 0.4кВ
                </li>
                <li>
                Комплектные распределительные устройства 35кВ
                </li>
                <li>
                Комплектные распределительные устройства 6кВ
                </li>
                <li>
                КТПНУ,КТПН
                </li>
                <li>
                Сборка Дизель генераторных энергокомплексов
                </li>
                <li>
                Конструкции для солнечных электростанций (СЭС)
                </li>
              </ul>
            </Paragraph>
            </Typography>
          </Col>
          <Col span={1}/>
        </Row>

        </Content>
      <CustomFooter />
    </Layout>
  )
}

export default Production
