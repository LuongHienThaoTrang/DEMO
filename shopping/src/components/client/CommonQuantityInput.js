import React from 'react'
import { Col, Row } from 'reactstrap'
import '../assets/style/common-input.scss';

export default function CommonQuantityInput({ value, onChange }) {
  return (
    <div className="wrapperCommonQuantityInput">
        <Row className="quantity-input">
            <Col md={4} className="minus" onClick={() => {onChange && onChange(-1)}}>
                -
            </Col>
            <Col md={4} className="quantity">
                {value || 0}
            </Col>
            <Col md={4} className="plus" onClick={() => {onChange && onChange(1)}}>
                +
            </Col>
        </Row>
    </div>
  )
}
