import React, { useState } from 'react'


const Calculator = () => {
    let [amount, setAmount] = useState();
    let [months, setMonths] = useState();
    let [intrest, setInterest] = useState();
    let [result, setResult] = useState();
    let calculateValue = e => {
        e.preventDefault();
        let result = amount * Math.pow(1 + intrest, months / 12);
        setResult(result)
    }

    return (
        <div className=" flex justify-center my-10 py-10 " >
        <form className='flex flex-col border-2 w-56 h-52 px-10'>
          <label>Loan Amount:</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter Amount"
            onChange={e => setAmount(e.target.value)}
          />
          <label>Months:</label>
          <input
            type="number"
            name="months"
            placeholder="Months"
            onChange={e => setMonths(e.target.value)}
          />
          <label>Loan Amount:</label>
          <input
            type="number"
            name="intrest"
            placeholder="Intrest"
            onChange={e => setInterest(e.target.value)}
          />
          <button className='bg-blue-300 w-20 font-medium' onClick={calculateValue}>Calculate</button>
        </form>
           <div className='px-10'>
           <div >Monthly EMI:{Math.round(result / months)}</div>
            <div >InterestAmount:{Math.round(result - amount)}</div>
            <div>TotalAmount:{ Math.round(result)}</div>
           </div>
      </div>
    )
}

export default Calculator
