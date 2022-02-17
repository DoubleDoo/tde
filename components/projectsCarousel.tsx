import { Button } from 'antd';
import React from 'react';
import styles from '../styles/projectsCarousel.module.css'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import {imgCarousel} from "./constants"
import Image from 'next/image'
import {Image as AImage} from 'antd' ; 

type Props = {

};
type State = {

};

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


class ProjectsCarousel extends React.Component<Props, State> {
  
    constructor (props:Props) {
      super(props)
    }

    render() { 
        return  <Carousel autoplay>
        {imgCarousel.map((image, index) => (
          <div key={index}>
            <Image src={image.link}    
              layout="responsive"
              width={500}
              height={200}
            />
          </div>
        ))}
      </Carousel>
      
    }

    componentDidMount(){
  
    }

    componentDidUpdate(){
   
    }
  }

export { ProjectsCarousel }

    //   return  <Carousel autoplay>
    //   {imgCarousel.map((image, index) => (
    //     <div key={index} className="test">
    //       <Image src={image.link}   layout="fill"/>
    //     </div>
    //   ))}
    // </Carousel>
