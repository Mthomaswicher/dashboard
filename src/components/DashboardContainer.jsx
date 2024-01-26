import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ticker from './DashboardNewsHeader';
import DashClock from './DashClock';
import NewsCenter from './NewsCenter';
import Music from './music';
import DashboardNewsHeader from './DashboardNewsHeader';
import { Stack } from 'react-bootstrap';

const DashboardContainer = (props) => {
    return(


<Container>
    <DashboardNewsHeader/>
    <Row>
    <Col lg={3}><DashClock/></Col>

    </Row>
<Row>
  <Col md={6}>{<NewsCenter/>}</Col>
  <Col md={{ span: 5, offset: 1}}><Music/></Col>
</Row>
<Row>
  <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
  <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
</Row>
<Row>
  <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
</Row>
</Container>
            
    )
}

export default DashboardContainer;