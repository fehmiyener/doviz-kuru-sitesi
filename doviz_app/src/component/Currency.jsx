import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL= "https://api.freecurrencyapi.com/v1/latest";
let API_KEY="fca_live_JtcmV3OPlvLT9mSdQMWihLmLNjhlUj8cKVAQSNkX";


function Currency() {


  const [amount,setAmount]=useState ();
  const [fromCurrency,setFromCurrency]=useState ('USD');//  USD EUR olduğu için string veri tipidir o yüzden '' kullandık.
  const [toCurrency,setToCurrency]=useState ('TRY');
  const [result,setResult]=useState (0);

  const exchange = async() =>{
   const response= await axios.get (`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
   const result = (response.data.data[toCurrency]* amount).toFixed(2);
   setResult(result);
  }


  return (
    <div className='currency-div'>

      <div className='title'>
        <h3>DÖVİZ KURU UYGULAMASI</h3>
      </div>
      
      <div style={{marginTop:'25px'}}>
      <input type="number" className='amount' value={amount} onChange={(e)=> setAmount(e.target.value)} />
        <select onChange={(e)=> setFromCurrency(e.target.value)} className='from-currency-option' >
          <option min='0' >USD</option> 
          <option min='0' >EUR</option>
          <option min='0' >TRY</option>
          <option min='0' >GBP</option>
          <option min='0' >JPY</option>
          <option min='0' >CNY</option>
          <option min='0' >RUB</option>
        </select>
         
        <FaArrowAltCircleRight className='icon' />
        <select onChange={(e)=> setToCurrency(e.target.value)} className='to-currency-option'>
          <option min='0' >TRY</option>
          <option min='0'>EUR</option>
          <option min='0'>USD</option>
          <option min='0' >GBP</option>
          <option min='0' >JPY</option>
          <option min='0' >CNY</option>
          <option min='0' >RUB</option>
        </select>

        <input value={result} type="number" className='result' />

        
      </div>

      <div >
      <button  onClick={exchange} className='result-button'>Çevir</button>
      </div>
        
    </div>
  )
}

export default Currency