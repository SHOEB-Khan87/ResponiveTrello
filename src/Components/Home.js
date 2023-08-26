import React, { useState } from 'react'
import { Add_item, Add_item1, Add_item2, Delete_item, Delete_item1, Delete_item2 } from '../Actions';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
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


  // var container = document.getElementById("game1");

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



  // var html;
  // window.onload = function () {
  //   html = document.getElementById('game1').innerHTML;
  // };


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
<Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: "120px", }}>


<Grid item sm={6} xs={12} md={6} lg={4}>

    <Grid container justifyContent="center">
    <Card sx={{ width: 450,background:"#101204" ,borderRadius:"25px"}} onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}>
            <h4 style={{ color: "white", textIndent: "20px" }}>To Do</h4>

            <form style={{ display: "flex", justifyContent: "center", marginTop: "10px" ,marginBottom:"60px",gap:"5px"}}>
              {show1 === true ? " " : <> <input placeholder='Add Card' type='text' onChange={change} value={val} /> <Button color='error' size='small' variant='outlined' onClick={x1}>X</Button></>}
              <Button color='success' variant='outlined' size="small" className='btn' onClick={add}>Add Card</Button>
            </form>

            {state.map((elem) => {
              return <div  key={elem.id} id={elem.id} draggable={true} onDragStart={(e) => drag(e)} className='p'>
               <p style={{marginLeft:"10px"}}>{elem.data}</p></div>
            })}

</Card>
         </Grid>
</Grid>
<Grid item sm={6} xs={12} md={6} lg={4}>

    <Grid container justifyContent="center">
    <Card sx={{ width: 450,background:"#101204" ,borderRadius:"25px"}} onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}>
            <h4 style={{ color: "white", textIndent: "20px" }}>Doing</h4>

            <form style={{ display: "flex", justifyContent: "center", marginTop: "10px" ,gap:"5px",marginBottom:"60px"}}>
              {show2 === true ? "" : <>   <input placeholder='Add Card' type='text' onChange={change1} value={val1} /> <Button color='error' size='small' variant='outlined' className='btn' onClick={x2}>X</Button></>}
             
              <Button color='success' variant='outlined' size="small"   onClick={add1}>Add Card</Button>
            </form>

            {state1.map((elem) => {
              return <div  key={elem.id} id={elem.id} draggable={true} onDragStart={(e) => drag(e)} className='p'>
              <p style={{marginLeft:"10px"}}>{elem.data}</p></div>
            })}
            </Card>
         </Grid>
</Grid>
<Grid item sm={6} xs={12} md={6} lg={4}>

    <Grid container justifyContent="center">
    <Card sx={{ width: 450,background:"#101204" ,borderRadius:"25px"}} onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}>
            <h4 style={{ color: "white", textIndent: "20px" }}>Done</h4>

            <form style={{ display: "flex", justifyContent: "center", marginTop: "10px",gap:"5px",marginBottom:"60px" }}>
              {show3 === true ? "" : <> <input placeholder='Add Card' type='text' onChange={change2} value={val2} /><Button onClick={x3}  size='small' color='error' variant='outlined'>X</Button> </>}
              <Button variant='outlined' size='small' color='success' onClick={add2}>Add Card</Button>
            </form>

            {state2.map((elem) => {
              return <div  key={elem.id} id={elem.id} draggable={true} onDragStart={(e) => drag(e)} className='p'>
              <p style={{marginLeft:"10px"}}>{elem.data}</p></div>
            })}
            </Card>
         </Grid>
</Grid>

</Grid>


     
       


      
 



        
       
     

    </>
  )
}

export default Home