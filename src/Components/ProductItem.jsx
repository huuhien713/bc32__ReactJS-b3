import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        let {sanPham, xemChiTiet} = this.props;

        return (
            <div className="col-3 mb-3">
                <div className="card text-dark bg-white" >
                    <img className="card-img-top" src={sanPham.image} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.name}</h4>
                        <p className="card-text">$ {sanPham.price}</p>
                        <button onClick={() => {xemChiTiet(sanPham)}} className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;