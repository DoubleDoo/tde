import React from 'react';
import styles from '../styles/MainCarouselBlock.module.css'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { mainCarouselContent } from "./bd"
import Image from 'next/image'

type Props = {

};
type State = {

};

class MainCarouselBlock extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return <Carousel autoplay>
      {mainCarouselContent.map((image, index) => (
        <div key={index} className={styles.imgbox}>
          <Image className={styles.img}
            src={image.link}
            alt="Picture of the author"
            width={1600}
            height={750}
          /> 
        </div>
      ))}

    </Carousel>

  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }
}

export { MainCarouselBlock }