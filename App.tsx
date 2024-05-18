import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';




function App() {
  const [txt, setTxt] = useState("")
  let [txtList, setTxtList] = useState<any>([])
  const del = (i: any) => {
    txtList.splice(i, 1)
    setTxtList([...txtList])
  }

  const eddit = (i: any) => {
    let newVal = prompt("Enter New Value")
    txtList.splice(i, 1, newVal)
    setTxtList([...txtList])
  }

  const delAll = (i: any) => {
    let delVal = ""
    txtList = delVal
    setTxtList([...txtList])
    console.log(setTxtList)
  }

  return (
    <div className="App">
      <h1 className='mt-4 pt-4 text-info mb-5 fw-bold'>TODO APP</h1>
      <div className="row">
        <div className="col-md-8">
          <input className='w-100 mb-5 ms-5 mt-2' type="text" onChange={(e) => {
            setTxt(e.target.value)
            console.log(setTxt)
          }} />
        </div>
        <div className="col-md-4">

          <button className='ms-2 me-2 btn btn-success ' onClick={() => {
            txtList.push(txt)
            console.log(txtList)
            setTxtList([...txtList])
          }}>
            Add
          </button>
          <button className='btn btn-danger ms-2 me-2' onClick={() => {
            delAll(1)
          }}>Delete All</button>
        </div>
        <div className="row">
          <div className="col-md-10">
            {txtList.map((x: any, i: any) => {
              return (<li className='mt-4 w-50' key={i}>{x}
                <button className='ms-4   me 4 btn btn-danger' onClick={() => {
                  del(i)
                }}

                >Delete</button>
                <button className='  ms-2 me-2 btn btn-primary' onClick={() => {
                  eddit(i)
                }}>Edit</button>

              </li>)
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
export default App;
