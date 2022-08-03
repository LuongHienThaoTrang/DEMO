import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

class ImageContainer extends Component {
    state = {
        items: [],
        selected: 0,
    }

    componentDidMount() {
        this.setState({
            items: this.props.items,
        })
    }
    

    handleSelect = (index) => {
        
        var imgs = document.querySelectorAll('.container-fluid .img')
        var imgActive = document.querySelector('.img.img-active')
        if (!imgActive) {
            imgs[index].classList.add('img-active')
        } else {
            imgActive.classList.remove('img-active')
            imgs[index].classList.add('img-active')
        }

        this.setState({
            selected: index,
        })
        
    }

   
    render() {
        
        
        return (
            <div>
                <Container fluid>
                    <Row>
                        <img className="img-productDetail" src={(typeof this.state.items !== 'string') ? this.state.items[this.state.selected] : this.state.items} alt="" />
                    </Row>
                    {(typeof this.state.items) !== 'string' && <Row className="mt-3">
                        {this.state.items.map((item, index) => (
                            <Col md={4} key={index}>    
                                <div className="wrapper">
                                    <img className="img-productDetail img"  onClick={() => this.handleSelect(index)} src={item} alt="" />
                                </div>
                            </Col>
                        ))}
                    </Row>}
                </Container>
            </div>
        );
    }
}

export default ImageContainer;