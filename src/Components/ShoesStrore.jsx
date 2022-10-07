import React, { Component } from 'react';
import shoesData  from '../Data/shoesData.json';

import ProductList from './ProductList';
import Modal from './Modal';

class ShoesStrore extends Component { 
    // truyền dữ liệu mảng sản phẩm thông qua PROPs: 
    // tạo tên props mangSanPham = {}
    // truyền mảng sản phẩm this.mangSanPham vào trong props vừa tạo
    // => mangSanPhamn = {this.mangSanPham}
    constructor(props) {
        super(props);
        this.state = { 
            sanPhamModal: { id: 1, name: "Adidas Prophere", alias: "adidas-prophere", price: 350,
            description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
            shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.",
            quantity: 995, image: "http://svcy3.myclass.vn/images/adidas-prophere.png"},
            // tạo nguồn dữ liệu thay đổi
        }
    }
    // Dữ liệu thay đổi cần nhận ở đâu, thì mình sẽ tạo callback function tại component đó
    xemChiTiet = (sanPhamChiTiet) => {
        this.setState({
            sanPhamModal : sanPhamChiTiet
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h1 className='text-center my-5'>SHOES SHOP</h1>
                    <div className='row'>
                            <ProductList mangSanPham={shoesData} xemChiTiet={this.xemChiTiet}/>
                    </div>
                </div>
                <Modal sanPhamModal={this.state.sanPhamModal} />
            </React.Fragment>
        );
    }
}

export default ShoesStrore;

