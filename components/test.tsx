import { Button } from 'antd';
import React from 'react';
import styles from '../styles/test.module.css'

type Props = {

};
type State = {

};

class Body extends React.Component<Props, State> {
  
    constructor (props:Props) {
      super(props)
    }

    render() {
      return <>
        <h1 className={styles.test}>Body</h1>;
        <div>
          Body      
        </div> 
      </>
    }

    componentDidMount(){
  
    }

    componentDidUpdate(){
   
    }
  }

export { Body }
