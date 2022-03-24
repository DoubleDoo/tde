import React from 'react';
import styles from '../styles/ProjectsCarousel.module.css'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { mainCarouselContent } from "./bd"
import Image from 'next/image'

type Props = {

};
type State = {

};

class MainCarousel extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return <Carousel autoplay>
      {mainCarouselContent.map((image, index) => (
        <div key={index} className={styles.imgbox}>
          <Image src={image.link} className={styles.img}
            layout="responsive"
            width={500}
            height={200}
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

export { MainCarousel }