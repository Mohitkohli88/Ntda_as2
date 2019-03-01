import axios from 'axios'

export const types={
    getAll: 'GET_ALL',
    select:'SELECT',
    unselect:'UNSELECT',
    addChild:'ADD_CHILD',
    addAdult:'ADD_ADULT',
    getEmp:'GET_EMP',
}

const getEmp = (emp) => dispatch =>{
    dispatch({
        type:types.getEmp,
        emp,
    })
}
//https://dog.ceo/api/breeds/list/all
 export const  getServer = () => async (dispatch) => {
    await axios.get('http://localhost:3001/api')
    /*axios.get('http://localhost:3001/api',{
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'same-origin',
        })*/
    .then(response => 
        alert(response)
    ).catch(error=>
        alert('error')
    );
    //  dispatch(getEmp());
}

export const getAll = (totalNum) => dispatch => {
    dispatch({
      type: types.getAll,
      totalNum,
    })
  }
  
export const select =(id) => dispatch => {
    dispatch({
        type: types.select,
        id,
    })
}

export const unselect=(id) => dispatch => {
    dispatch({
        type: types.unselect,
        id,
    })
}
export const addAdult=(id,value) => dispatch => {
    dispatch({
        type: types.addAdult,
        id,
        value,
    })
}
export const addChild=(id, value) => dispatch => {
    dispatch({
        type: types.addChild,
        id,
        value
    })
}

export const onSumit=(rooms) => dispatch => {
    //localStorage.setItem('Rooms', JSON.stringify(rooms))
   localStorage.setItem('Rooms', JSON.stringify(rooms.filter(room=> !room.isDefaultDisable)))
}