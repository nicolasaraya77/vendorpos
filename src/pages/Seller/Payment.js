import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Divider } from 'antd';
import { CodeFilled, CreditCardFilled } from "@ant-design/icons"
import { DollarCircleFilled } from "@ant-design/icons"
import { BankFilled } from "@ant-design/icons"
import { List, Avatar, Button, Checkbox } from 'antd';
import { CartContext } from "../../context/CartContext";
import { LeftCircleTwoTone } from "@ant-design/icons"
import { RightCircleTwoTone } from "@ant-design/icons"
import ConfirmSale from "../../components/ConfirmSale";

/*style de padding solo afecta los gutterrow 2 y 3 */
const style = { padding: '31px 0' };
/*lo que ocurre con la seleccion de una casilla */
var value = 0;




const Payment = () => {

  const [suma, setsuma] = useState("");
  const [param1, setparam1] = useState(false);
  const [param2, setparam2] = useState(false);
  const [param3, setparam3] = useState(false);

  const [cart, setCart] = useContext(CartContext)
  useEffect(() => {
    const data = localStorage.getItem("POS-Almacenes-Cart")
    if (data) {
      setCart(JSON.parse(data))
    }
  }, [])
  return (
    <div>
      <>
        <Row gutter={100}>
          <Col className="gutter-row" span={8}>
            <Button icon={<LeftCircleTwoTone />} type="primary" shape="round" size="Large" onClick={() => { window.location.replace("/pos") }} >Volver</Button>
            <Divider >Productos</Divider>
            <List
              itemLayout="horizontal"
              footer={<Row>
                <Col span={12}>Total</Col>
                <Col span={12} ><div style={{ float: 'right' }}>{cart.total}</div></Col>
              </Row>}
              dataSource={cart.productList}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    /*avatar={<Avatar src="/uploads/perro_729fefb8c4.png" />}*/
                    title={item.productName}
                    description={<div>{item.quantity} unidades a ${item.unitPrice}/unidad   </div>}


                  />
                  <div>{item.totalPrice}</div>

                </List.Item>
              )}
            />

          </Col>

          <Col className="gutter-row" span={5}>
            <div style={style}>
              <Divider >Medio de pago</Divider>
              <div>
                <Row>
                  <Col span={12}><div ><h3> <DollarCircleFilled /> Efectivo </h3> </div ></Col>
                  <Col span={12}>
                    <div>
                      <input id= "checkbox1" type="checkbox" class="radiocheckbox" value="A" onChange={() => (setparam1(true), setparam2(false), setparam3(false))} checked = {param1}   />
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col span={12}><div ><h3> <CreditCardFilled /> Credito </h3></div ></Col>
                  <Col span={12}>
                    <div>
                      <input  id= "checkbox2" type="checkbox" class="radiocheckbox" value="B" onChange={() => (setparam2(true), setparam1(false), setparam3(false))} checked = {param2} />
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col span={12}><div><h3><BankFilled /> Debito </h3></div ></Col>
                  <Col span={12}>
                    <div>
                      <input  id= "checkbox3" type="checkbox" class="radiocheckbox" value="V" onChange={() => (setparam3(true), setparam2(false), setparam1(false))} checked = {param3}  />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <Divider >Ingrese monto para calculo de vuelto</Divider>

            <div class="btn-group-vertical ml-4 mt-4" role="group" aria-label="Basic example">
              <div class="btn-group">
                <input style={{ width: "96%", height: 50 }} type="int" class="text-center form-control-lg mb-1" id="code" ></input>
              </div>
              <div class="btn-group">
                <button type="button" style={{ width: "32%", height: 50, background: "#FFF0F5" }} class="btn btn-outline-secondary py-3" onClick={() => ( document.getElementById('code').value = document.getElementById('code').value + '1' , setsuma(suma + '1'))}>1</button>
                <button type="button" style={{ width: "32%", height: 50, background: "#FFF0F5" }} class="btn btn-outline-secondary py-3" onClick={() => ( document.getElementById('code').value = document.getElementById('code').value + '2' , setsuma(suma + '2'))}>2</button>
                <button type="button" style={{ width: "32%", height: 50, background: "#FFF0F5" }} class="btn btn-outline-secondary py-3" onClick={() => ( document.getElementById('code').value = document.getElementById('code').value + '3' , setsuma(suma + '3'))}>3</button>
              </div>
              <div class="btn-group">
                <button type="button" style={{ width: "32%", height: 50, background: "#FFF0F5" }} class="btn btn-outline-secondary py-3" onClick={() => ( document.getElementById('code').value = document.getElementById('code').value + '4' , setsuma(suma + '4'))}>4</button>
                <button type="button" style={{ width: "32%", height: 50, background: "#FFF0F5" }} class="btn btn-outline-secondary py-3" onClick={() => ( document.getElementById('code').value = document.getElementById('code').value + '5' , setsuma(suma + '5'))}>5</button>
                <button type="button" style={{ width: "32%", height: 50, background: "#FFF0F5" }} class="btn btn-outline-secondary py-3" onClick={() => ( document.getElementById('code').value = document.getElementById('code').value + '6' , setsuma(suma + '6'))}>6</button>
              </div>
              <div class="btn-group">
                <button type="button" style={{ width: "32%", height: 50, background: "#FFF0F5" }} class="btn btn-outline-secondary py-3" onClick={() => ( document.getElementById('code').value = document.getElementById('code').value + '7' , setsuma(suma + '7'))}>7</button>
                <button type="button" style={{ width: "32%", height: 50, background: "#FFF0F5" }} class="btn btn-outline-secondary py-3" onClick={() => ( document.getElementById('code').value = document.getElementById('code').value + '8' , setsuma(suma + '8'))}>8</button>
                <button type="button" style={{ width: "32%", height: 50, background: "#FFF0F5" }} class="btn btn-outline-secondary py-3" onClick={() => ( document.getElementById('code').value = document.getElementById('code').value + '9' , setsuma(suma + '9'))}>9</button>
              </div>
              <div class="btn-group">
                <button type="button" style={{ width: "32%", height: 50, background: "#FFF0F5" }} class="btn btn-outline-secondary py-3" onClick={() => ( document.getElementById('code').value = document.getElementById('code').value.slice(0, -1), setsuma(suma.slice(0,-1)))}>&lt;</button>
                <button type="button" style={{ width: "32%", height: 50, background: "#FFF0F5" }} class="btn btn-outline-secondary py-3" onClick={() => ( document.getElementById('code').value = document.getElementById('code').value + '0', setsuma(suma + '0') )}>0</button>
                <button type="button" style={{ width: "32%", height: 50, background: "#FFF0F5" }} class="btn btn-primary py-3" onClick={() => ( document.getElementById('code').value = '', setsuma("") )}>Limpiar</button>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div style={style}>

              <Divider >Vuelto</Divider>
              <div>Total: {cart.total}</div>
              <div>Efectivo entregado: {suma}</div>
              <div>Vuelto: {suma-cart.total}</div>
              
              <Divider >Terminar</Divider>
              <ConfirmSale></ConfirmSale>
            </div>

          </Col>

        </Row>
      </>
    </div>
  );
};



export default Payment;
