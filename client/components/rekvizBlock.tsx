import React from 'react';
import styles from '../styles/RekvizBlock.module.css'
import 'antd/dist/antd.css';
import { rekviz } from "./bd"
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Typography, Divider } from 'antd';

const { Meta } = Card;
const { Title,Paragraph } = Typography;

type Props = {

};
type State = {

};

class RekvizBlock extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return <>
      <Row className={styles.block}>
        <Col span={1} />
        <Col xs={{ span: 22 }} sm={{ span: 22 }} lg={{ span: 16 }}>
          <Typography>
            <Title  level={2}>
              Реквизиты
            </Title>
          </Typography>
        </Col>
        <Col span={1}></Col>
      </Row>
      <Row>
        <Col span={1} order={1} />
        <Col xs={{ span: 22, order: 2 }} sm={{ span: 22, order: 2 }} lg={{ span: 10, order: 2 }}>
          <Divider />
        </Col>
        <Col span={1} order={3} />
        <Col span={1} order={4} />
        <Col xs={{ span: 22, order: 8 }} sm={{ span: 22, order: 8 }} lg={{ span: 10, order: 5 }}>
          <Divider />
        </Col>
        <Col span={1} order={6} />
        <Col span={1} order={7} />
        <Col xs={{ span: 22, order: 5 }} sm={{ span: 22, order: 5 }} lg={{ span: 10, order: 8 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>Сокращенное наименование:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography> <Paragraph>{rekviz[0].shortName}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={9} />
        <Col span={1} order={10} />
        <Col xs={{ span: 22, order: 11 }} sm={{ span: 22, order: 11 }} lg={{ span: 10, order: 11 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>Полное наименование:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography><Paragraph>{rekviz[0].longName}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={1} order={1} />
        <Col xs={{ span: 22, order: 2 }} sm={{ span: 22, order: 2 }} lg={{ span: 10, order: 2 }}>
          <Divider />
        </Col>
        <Col span={1} order={3} />
        <Col span={1} order={4} />
        <Col xs={{ span: 22, order: 8 }} sm={{ span: 22, order: 8 }} lg={{ span: 10, order: 5 }}>
          <Divider />
        </Col>
        <Col span={1} order={6} />
        <Col span={1} order={7} />
        <Col xs={{ span: 22, order: 5 }} sm={{ span: 22, order: 5 }} lg={{ span: 10, order: 8 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>Юридический адрес:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography className={styles.text}>{rekviz[0].urAddres}  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={9} />
        <Col span={1} order={10} />
        <Col xs={{ span: 22, order: 11 }} sm={{ span: 22, order: 11 }} lg={{ span: 10, order: 11 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>ИНН:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography><Paragraph>{rekviz[0].inn}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={1} order={1} />
        <Col xs={{ span: 22, order: 2 }} sm={{ span: 22, order: 2 }} lg={{ span: 10, order: 2 }}>
          <Divider />
        </Col>
        <Col span={1} order={3} />
        <Col span={1} order={4} />
        <Col xs={{ span: 22, order: 8 }} sm={{ span: 22, order: 8 }} lg={{ span: 10, order: 5 }}>
          <Divider />
        </Col>
        <Col span={1} order={6} />
        <Col span={1} order={7} />
        <Col xs={{ span: 22, order: 5 }} sm={{ span: 22, order: 5 }} lg={{ span: 10, order: 8 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>КПП:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography><Paragraph>{rekviz[0].kpp}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={9} />
        <Col span={1} order={10} />
        <Col xs={{ span: 22, order: 11 }} sm={{ span: 22, order: 11 }} lg={{ span: 10, order: 11 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>ОГРН:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography><Paragraph>{rekviz[0].ogrn}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={12} />
      </Row>
      <Row>
        <Col span={1} order={1} />
        <Col xs={{ span: 22, order: 2 }} sm={{ span: 22, order: 2 }} lg={{ span: 10, order: 2 }}>
          <Divider />
        </Col>
        <Col span={1} order={3} />
        <Col span={1} order={4} />
        <Col xs={{ span: 22, order: 8 }} sm={{ span: 22, order: 8 }} lg={{ span: 10, order: 5 }}>
          <Divider />
        </Col>
        <Col span={1} order={6} />
        <Col span={1} order={7} />
        <Col xs={{ span: 22, order: 5 }} sm={{ span: 22, order: 5 }} lg={{ span: 10, order: 8 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>ОКАТО:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography className={styles.text}>{rekviz[0].okato}  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={9} />
        <Col span={1} order={10} />
        <Col xs={{ span: 22, order: 11 }} sm={{ span: 22, order: 11 }} lg={{ span: 10, order: 11 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>ОКВЭД:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography><Paragraph>{rekviz[0].okved}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={12} />
      </Row>
      <Row>
        <Col span={1} order={1} />
        <Col xs={{ span: 22, order: 2 }} sm={{ span: 22, order: 2 }} lg={{ span: 10, order: 2 }}>
          <Divider />
        </Col>
        <Col span={1} order={3} />
        <Col span={1} order={4} />
        <Col xs={{ span: 22, order: 8 }} sm={{ span: 22, order: 8 }} lg={{ span: 10, order: 5 }}>
          <Divider />
        </Col>
        <Col span={1} order={6} />
        <Col span={1} order={7} />
        <Col xs={{ span: 22, order: 5 }} sm={{ span: 22, order: 5 }} lg={{ span: 10, order: 8 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>ОКПО:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography><Paragraph>{rekviz[0].okpo}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={9} />
        <Col span={1} order={10} />
        <Col xs={{ span: 22, order: 11 }} sm={{ span: 22, order: 11 }} lg={{ span: 10, order: 11 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>ОКОГУ:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography><Paragraph>{rekviz[0].okogu}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={12} />
      </Row>
      <Row>
        <Col span={1} order={1} />
        <Col xs={{ span: 22, order: 2 }} sm={{ span: 22, order: 2 }} lg={{ span: 10, order: 2 }}>
          <Divider />
        </Col>
        <Col span={1} order={3} />
        <Col span={1} order={4} />
        <Col xs={{ span: 22, order: 8 }} sm={{ span: 22, order: 8 }} lg={{ span: 10, order: 5 }}>
          <Divider />
        </Col>
        <Col span={1} order={6} />
        <Col span={1} order={7} />
        <Col xs={{ span: 22, order: 5 }} sm={{ span: 22, order: 5 }} lg={{ span: 10, order: 8 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>ОКТМО:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography><Paragraph>{rekviz[0].oktmo}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={9} />
        <Col span={1} order={10} />
        <Col xs={{ span: 22, order: 11 }} sm={{ span: 22, order: 11 }} lg={{ span: 10, order: 11 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>Расчетный счет:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography><Paragraph>{rekviz[0].payAddress}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={12} />
      </Row>
      <Row>
        <Col span={1} order={1} />
        <Col xs={{ span: 22, order: 2 }} sm={{ span: 22, order: 2 }} lg={{ span: 10, order: 2 }}>
          <Divider />
        </Col>
        <Col span={1} order={3} />
        <Col span={1} order={4} />
        <Col xs={{ span: 22, order: 8 }} sm={{ span: 22, order: 8 }} lg={{ span: 10, order: 5 }}>
          <Divider />
        </Col>
        <Col span={1} order={6} />
        <Col span={1} order={7} />
        <Col xs={{ span: 22, order: 5 }} sm={{ span: 22, order: 5 }} lg={{ span: 10, order: 8 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>Полное наименование банка:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography className={styles.text}>{rekviz[0].bank}  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={9} />
        <Col span={1} order={10} />
        <Col xs={{ span: 22, order: 11 }} sm={{ span: 22, order: 11 }} lg={{ span: 10, order: 11 }}>
          <Row>
            <Col span={11}>
              <Typography> <Paragraph>Корреспондентский счет: </Paragraph></Typography>
            </Col>
            <Col span={11}> <Typography><Paragraph>{rekviz[0].corespAddress}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={12} />
      </Row>
      <Row>
        <Col span={1} order={1} />
        <Col xs={{ span: 22, order: 2 }} sm={{ span: 22, order: 2 }} lg={{ span: 10, order: 2 }}>
          <Divider />
        </Col>
        <Col span={1} order={3} />
        <Col span={1} order={4} />
        <Col xs={{ span: 22, order: 8 }} sm={{ span: 22, order: 8 }} lg={{ span: 10, order: 5 }}>
          <Divider />
        </Col>
        <Col span={1} order={6} />
        <Col span={1} order={7} />
        <Col xs={{ span: 22, order: 5 }} sm={{ span: 22, order: 5 }} lg={{ span: 10, order: 8 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>БИК:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography><Paragraph>{rekviz[0].bik}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={9} />
        <Col span={1} order={10} />
        <Col xs={{ span: 22, order: 11 }} sm={{ span: 22, order: 11 }} lg={{ span: 10, order: 11 }}>
          <Row>
            <Col span={11}>
              <Typography><Paragraph>Директор:</Paragraph> </Typography>
            </Col>
            <Col span={11}> <Typography> <Paragraph>{rekviz[0].dirrector}</Paragraph>  </Typography></Col>
          </Row>
        </Col>
        <Col span={1} order={12} />
        <Col span={1} order={13} />
        <Col xs={{ span: 22, order: 14 }} sm={{ span: 22, order: 14 }} lg={{ span: 10, order: 14 }}>
          <Divider />
        </Col>
        <Col span={1} order={15} />
        <Col span={1} order={16} />
        <Col xs={{ span: 0, order: 17 }} sm={{ span: 0, order: 17 }} lg={{ span: 10, order: 17 }}>
          <Divider />
        </Col>
        <Col span={1} order={18} />
      </Row>
    </>
  }
}

export { RekvizBlock }

