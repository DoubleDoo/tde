import React from 'react';
import styles from '../styles/Cap.module.css'
import 'antd/dist/antd.css';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import { Layout} from 'antd';



const { Title,Paragraph} = Typography;
const { Content } = Layout;

type Props = {

};
type State = {

};

class Cap extends React.Component<Props, State> {
  
    constructor (props:Props) {
      super(props)
    }

    render() {  
      return <Content className={styles.Content}>
      <Typography>
                <Paragraph className={styles.title}>Cтраница в процессе разработки</Paragraph>
      </Typography>
      </Content>
    }
  }

export { Cap }

