import type { NextPage } from 'next'
import styles from '../styles/Contacts.module.css'
import 'antd/dist/antd.css';
import { Layout} from 'antd';
import {CustomHeader} from '../components/header';
import {CustomFooter} from '../components/footer';
import {ContactBlock} from "../components/contactBlock"
import {RekvizBlock} from "../components/rekvizBlock"


const { Header, Content, Footer } = Layout;

const Contacts: NextPage = () => {
  return (
    <Layout>
    <CustomHeader/>
    <Content className={styles.content}>
      <RekvizBlock/>
      <ContactBlock/>
    </Content>
    <CustomFooter/>
  </Layout>
  )
}

export default Contacts
