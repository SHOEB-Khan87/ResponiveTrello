import React, { useState } from 'react'
import { Add_item, Add_item1, Add_item2 } from '../Actions';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  let state = useSelector(state => state.todoReducer.list)
  let state1 = useSelector(state => state.todoReducer1.list1)
  let state2 = useSelector(state => state.todoReducer2.list2)

  let dispatch = useDispatch();

  let [show1, setShow1] = useState(true)
  let [show2, setShow2] = useState(true)
  let [show3, setShow3] = useState(true)
  let [val, setVal] = useState("")
  let [val1, setVal1] = useState("")
  let [val2, setVal2] = useState("")


  var container = document.getElementById("game1");

  console.log(state2)

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }


  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var evtarget = ev.target;
    if (evtarget == "[object HTMLImageElement]") {
      evtarget = evtarget.parentNode;

    }
    else {
      ev.target.appendChild(document.getElementById(data));
    }
  }



  var html;
  window.onload = function () {
    html = document.getElementById('game1').innerHTML;
  };


  let add = (e) => {
    setShow1(false)
    if (val !== "") {
      dispatch(Add_item(val))
    }

    e.preventDefault();
    setVal("")

  }


  let add1 = (e) => {
    setShow2(false)
    if (val1 !== "") {
      dispatch(Add_item1(val1))
    }

    e.preventDefault();
    setVal1("")
  }


  let add2 = (e) => {
    setShow3(false)
    if (val2 !== "") {
      dispatch(Add_item2(val2))
    }

    e.preventDefault();
    setVal2("")
  }


  let change = (e) => {
    setVal(e.target.value)
  }


  let change1 = (e) => {
    setVal1(e.target.value)
  }


  let change2 = (e) => {
    setVal2(e.target.value)
  }


  let x1 = () => {
    setShow1(true)
    setVal("")
  }

  let x2 = () => {
    setShow2(true)
    setVal1("")
  }

  let x3 = () => {
    setShow3(true)
    setVal2("")
  }


  return (
    <>

      <div id="game1" style={{ marginTop: "20px" }}>
        <div className="container1">


          <div style={{ background: "#101204" }} id="div2" onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}>
            <h4 style={{ color: "white", textIndent: "20px" }}>To Do</h4>

            <form style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
              {show1 === true ? " " : <> <input placeholder='Add Card' type='text' onChange={change} value={val} /> <button className='btn' onClick={x1}>X</button></>}
              <button className='btn' onClick={add}>Add Card</button>
            </form>

            {state.map((elem) => {
              return <p className='p' key={elem.id} id={elem.id} draggable={true} onDragStart={(e) => drag(e)} >{elem.data}</p>
            })}



          </div>



          <div style={{ background: "#101204" }} id="div5" onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}>
            <h4 style={{ color: "white", textIndent: "20px" }}>Doing</h4>

            <form style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
              {show2 === true ? "" : <>   <input placeholder='Add Card' type='text' onChange={change1} value={val1} /> <button className='btn' onClick={x2}>X</button></>}
              <button className='btn' style={{ color: "white" }} onClick={add1}>Add Card</button>
            </form>

            {state1.map((elem) => {
              return <p className='p' key={elem.id} id={elem.id} draggable={true} onDragStart={(e) => drag(e)} >{elem.data}</p>
            })}
          </div>



          <div style={{ background: "#101204" }} id="div6" onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}>
            <h4 style={{ color: "white", textIndent: "20px" }}>Done</h4>

            <form style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
              {show3 === true ? "" : <> <input placeholder='Add Card' type='text' onChange={change2} value={val2} /><button onClick={x3} className='btn'>X</button> </>}
              <button className='btn' onClick={add2}>Add Card</button>
            </form>

            {state2.map((elem) => {
              return <p className='p' key={elem.id} id={elem.id} draggable={true} onDragStart={(e) => drag(e)} >{elem.data}</p>
            })}

          </div>

        </div>
      </div>

    </>
  )
}

export default Home