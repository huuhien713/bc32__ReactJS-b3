import React, { Component } from 'react'

import ProductItem from './ProductItem'

class ProductList extends Component {
  

  renderSP = () => {
    // lấy prop mảng sản phẩm từ component bên ngoài
    let { mangSanPham, xemChiTiet } = this.props;

    return mangSanPham.map((sanPham, index) => {
      return <ProductItem xemChiTiet={xemChiTiet} sanPham={sanPham} key={index}/>
    })
  }

  render() {
    return <React.Fragment>{this.renderSP()}</React.Fragment>
  }
}

export default ProductList
