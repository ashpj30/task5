import React,{useState} from 'react'
import { Navbar } from './Navbar'
import './Home.css'
import { data } from './data'

export const Home = () => {
  const [counter, setCounter] = useState(data[0].quantity);
  const [counter1, setCounter1] = useState(data[1].quantity);

  const [amount,setAmount] = useState(data[0].uprice);
  const [amount1,setAmount1] = useState(data[1].uprice);

  const [totalPrice, setTotalPrice] = useState(data[0].uprice * data[0].quantity);
  const [totalPrice1, setTotalPrice1] = useState(data[1].uprice * data[1].quantity);

  const [subtotal, setSubTotal] = useState(totalPrice + totalPrice1);

  
  const calculatesubtotal = () => {
    setSubTotal(totalPrice + totalPrice1);
   };

  
   const [Shippingfees, setSheepingfees] = useState(subtotal + data[0].Shippingfee);
   
  const calculatetotal =() =>{
    totalPrice(subtotal + data[0].Shippingfee);
  }

  
//increment
  const incrementCounter = () => {
    data[0].quantity += 1;
    setCounter( data[0].quantity);
  setTotalPrice(data[0].uprice * data[0].quantity);
setSubTotal(totalPrice + totalPrice1);
    };
    
    const incrementCounter1 = () => {
      var temp = 0
      data[1].quantity += 1;
      setCounter1( data[1].quantity);
     setTotalPrice1(data[1].uprice * data[1].quantity);
     temp = setTotalPrice1
     setSubTotal(totalPrice + totalPrice1);
    
      };

      //decrement

  const decrementCounter = () => {
    data[0].quantity -= 1;
    setCounter(data[0].quantity);
    setTotalPrice(data[0].uprice * data[0].quantity);
 
 };
 const decrementCounter1 = () => {
  data[1].quantity -= 1;
  setCounter1(data[1].quantity);
  setTotalPrice1(data[1].uprice * data[1].quantity);
  
};


  
  return (
    <div>
       <div>
        <Navbar/>
       </div>
       <div className='table'>
        <table>
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>QTY</th>
          <th>UNIT PRICE</th>
          
<tr>
  <td><img style={{marginBottom:"40px"}} className='img' src={data[0].img}></img><img src={data[0].img1}>
    </img><p className='brand'>{data[0].brand}</p></td>
  <td>{totalPrice}</td>
   <td>{/*<p> {data[0].quantity}</p> */}
    <p className='box'><button onClick={decrementCounter}>-</button><button>{data[0].quantity}</button>
    <button onClick={incrementCounter}>+</button></p></td>
  <td>{data[0].uprice}</td>
</tr>
<tr>
  <td><img style={{marginBottom:"40px"}} className='img' src={data[0].img}></img><img src={data[1].img1}></img>
  <p className='brand1'>{data[1].brand}</p></td>
  <td>{totalPrice1}</td>
  <td > {/*<p> {data[1].quantity}</p> */}
    <p className='box'><button onClick={decrementCounter1}>-</button><button>{data[1].quantity}</button>
    <button onClick={incrementCounter1}>+</button></p></td>
  <td>{data[1].uprice}</td>
</tr>

{/* {data.map((item, index) => (
  <tr key={index}>
    <td>
      <img src={item.img1} alt={item.brand} />
      {item.brand}
    </td>
    <td>{totalPrice}</td>
    <td>
      <p>{item.quantity}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </td>
    <td>{item.uprice}</td>
  </tr>
))} */}
 </table>
       </div>
       <div className='coupon'>
 <input placeholder='Voucher code'></input><button>Redeem</button>
 </div>
 <div className='table1'>
  <tr>
    <td>Subtotal</td>
    <td>{subtotal}</td>
  </tr>
  <tr>
    <td>Shipping fee</td>
    <td>{data[0].Shippingfee}</td>
  </tr>
  <tr>
    <td>Coupon</td>
    <td>{data[0].coupon}</td>
  </tr>&nbsp;
  <tr>
    <td><b>TOTAL</b></td>
    <td><b>{Shippingfees}</b></td>
  </tr>
  <button>Check out</button>
 </div>
    </div>
  )
}
