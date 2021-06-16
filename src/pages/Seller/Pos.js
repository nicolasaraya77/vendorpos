import React, {useContext} from 'react'
import { Row, Col, Space, Button } from 'antd';
import ListProducts from "../../components/ListProducts"
import SearchBar from "../../components/SearchBar"
import ListCart from "../../components/ListCart"

import { clearCart } from "../../components/ListCart/ListCart"
import { CartContext } from "../../context/CartContext"
import { RightCircleTwoTone } from "@ant-design/icons"

const Pos = () => {

  const [cart, setCart] = useContext(CartContext)

  return (
    <>
      
        <SearchBar></SearchBar>
        <Row gutter={16}>
        <Col  span={16}>
          <ListProducts></ListProducts>
            {/* <div style={ {background: "#fff"}} >matriz de productos</div> */}
        </Col>
        {/* style={{background: "#fff"}} */}
        <Col  span={8} >
            <Row gutter={[16,16]}>
              {/* carrito */}
              <Col span={24} style={{}}>
                <Button onClick={()=> clearCart(setCart)}>Clear Cart</Button>
                <ListCart></ListCart>
              </Col>
            </Row>
            <Row gutter={[16,16]}>
              {/* numpad y boton pago */}
              <Col span={24} style={{}}>
                <Button icon={< RightCircleTwoTone />} type="primary" shape="round" size="Large" style = {{float:"right"}} 
                  onClick={() => {window.location.replace("/pos/pago")}}
                >
                  Pago
                </Button>
                {/* <Button onClick={() => {window.location.replace("/pos/pago")}}>Pago</Button> */}
                {/* <ConfirmSale></ConfirmSale> */}
              </Col>
            </Row>
        </Col>
        </Row>
     
    </>
  )
};

export default Pos;
