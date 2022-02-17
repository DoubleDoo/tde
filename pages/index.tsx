import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import {ProjectsCarousel} from '../components/projectsCarousel';
import {LastNews} from '../components/lastNews';
import {CustomHeader} from '../components/header';
import {CustomFooter} from '../components/footer';


const { Header, Content, Footer } = Layout;

const Home: NextPage = () => {
  return (
    <Layout className="layout">
    <CustomHeader/>
    <Content>
      <Row>
        <Col span={24}>
          <ProjectsCarousel/>
        </Col>
        <Col span={24} className={styles.data}>
          <h2>О нас</h2>
          <p>ООО «ТДЭ» специализируется на поставке электрооборудования и электромонтажных материалов. 
          Мы гарантируем вам приобретение качественного оборудования. Весь наш товар имеет необходимые сертификаты. 
          Предоставляется гарантийное и послегарантийное обслуживание. Имея собственные и партнерские производства в
          Санкт-Петербурге АО ПО «Электробалт», ООО «Терма Энерго»,ООО «Элтех» г.Чебоксары статус партнеры, 
          и собственные сборочные площадки в г.Чебоксары по сборке БМЗ и ПС. 
          Наш коллектив выполняет как типовые так и не стандартные технические решения по изготовлению Подстанций.</p>
          <h1>Миссия</h1>
          <p>
          Мы стремимся повысить конкурентоспособность наших Заказчиков, предлагая высокоэффективные и надежные решения в области энергоснабжения 
          </p>
          <h1>Видение</h1>
          <p>
          Мы реализуем стратегию устойчивого развития, осваиваем новые технологии, развиваем свои возможности с целью выхода на объем реализации 1 млрд. руб. по итогу 2022 года и 3 млрд. руб. в 2025 году.
          </p>
        </Col>
        <Col span={24} className={styles.data}>
        <h1> Наши проекты</h1>
        <LastNews/>
        </Col>
        <Col span={24} className={styles.data}>
          <h1>Новости</h1>
          <LastNews/>
        </Col>
        <Col span={24} className={styles.data}>
        <h1>Наши заказчики</h1>
        </Col>
      </Row>
    </Content>
    <CustomFooter/>
  </Layout>
  )
}

export default Home
