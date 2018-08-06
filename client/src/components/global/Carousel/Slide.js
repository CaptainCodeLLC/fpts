import React from 'react';
import {Container,Row,Col} from  'reactstrap'
const Slide = props => (
    <div className = "slide-container">
        <header className = "overlay"/>
        <div className = "carousel-img">
            <img src = {props.img}/>
            <Container className = "text-container">
                <Row style = {{textAlign:'center'}}>
                    <Col xs = {{size:11 , offset:1}}
                         sm = {{size:11, offset:1 }}
                         md = {{size:11, offset:1 }} 
                         lg={{size:8, offset:4}}
                         xl = {{size: 5, offset:7}}
                        xxl = {{size:5, offset:7}}
                         >
                            <h1>Florida Property Tax Service</h1>
                    </Col>
                </Row>
              
            </Container>
            <Container className = "text-container">
                <Row>
                    <Col xs = {{size:11 , offset:1}}
                         sm = {{size:11, offset:1 }}
                         md = {{size:11, offset:1 }} 
                         lg={{size:8, offset:4}}
                         xl = {{size: 5, offset:7}}
                        xxl = {{size:5, offset:7}}>
                            <h2>Saving our clients millions annually</h2>
                    </Col>
                </Row>
              
            </Container>
        </div>
    
    </div>
)

export default Slide;