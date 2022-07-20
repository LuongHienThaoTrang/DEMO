import React from 'react'
import { Row } from "reactstrap"
import ProductItem from "./ProductItem"

class ProductList extends React.Component {
    state = {
        products: [
            {"name":"Product 0","price":30,'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-than-co-ai-valknut-ver3-0020659/20e84677-cfab-4000-cb68-0018ddf94dfe.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 1","price":84, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-ngan-ha-space-ver16-0020556/41df38d0-015d-e700-f7d7-0018ac665d36.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 2","price":9, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-ngan-ha-space-ver14-0020752/1b604dbb-c4eb-2e00-656f-0018fa2fcae7.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 3","price":72, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-ngan-ha-space-ver14-0020547/103ab4ab-aa6a-1000-9d7d-0018b1dcd5c9.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 4","price":67, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-ngan-ha-space-ver14-0020548/e33d0e51-7b50-2300-54e3-0018b1dcfe51.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 5","price":11, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-ngan-ha-space-ver14-0020549/2d2330da-f046-3300-5e43-0018b1dd69a1.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 6","price":6, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tru-on-gian-12vahdt-van-hien-chi-bang-ver11-0020651/33b6f64a-2ef0-0100-c8d2-0018f0e497c1.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 7","price":22, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-than-co-ai-valknut-ver3-0020660/882e50fe-67bb-5100-88c3-0018ddf9ddb0.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 8","price":4, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-toi-gian-ver12-0020772/8d37fdf7-e945-0200-a992-0019046480a2.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 9","price":98, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-ngan-ha-space-ver14-0020550/e18efe4f-e887-4500-73e8-0018b1ddb5fc.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 10","price":39, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-toi-gian-m2-0020683/e14f2372-ab6e-1d00-e79d-0018ef286fb5.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 11","price":55, 'image':'https://cdn2.yame.vn/pimg/ao-thun-tn-tc-solid-m6-0019935/54f25a80-2f55-4600-8205-001818dbddd9.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 12","price":8, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-ngan-ha-space-ver14-0020552/7667c83f-782a-6500-4dd3-0018b1de9c94.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 13","price":15, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-toi-gian-m7-0020769/680fc4e0-6ca9-0100-084e-001901603576.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 14","price":36, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-toi-gian-m7-0020770/6b7e1779-6ac8-0200-95dd-001901605e16.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 15","price":82, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-ngan-ha-space-ver14-0020546/99d0e0c0-028f-0100-7fc1-0018b1dc92bf.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 16","price":55, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-y-nguyen-ban-ver56-0020776/e0f029f7-7382-4000-de5f-00190b754995.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 17","price":61, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-than-co-ai-horus-ver8-0020796/87f7aa75-fe1a-0e00-34c9-001915106b43.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 18","price":46, 'image':'https://cdn2.yame.vn/pimg/ao-thun-sweater-on-gian-12vahdt-long-van-thien-o-ver2-0021006/005456b0-629c-a700-b4d3-00193c399ae5.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 17","price":61, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-than-co-ai-horus-ver8-0020796/87f7aa75-fe1a-0e00-34c9-001915106b43.jpg?w=540&h=756&c=true&ntf=false'},
            {"name":"Product 18","price":22, 'image':'https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-than-co-ai-valknut-ver3-0020660/882e50fe-67bb-5100-88c3-0018ddf9ddb0.jpg?w=540&h=756&c=true&ntf=false'}
        ]
    }
    render() {
        return (
            <Row>
                {this.state.products.map((product, index) => (
                    <ProductItem 
                        key={index}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </Row>
        )
    }
}

export default ProductList