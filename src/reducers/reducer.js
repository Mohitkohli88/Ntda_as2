import { types } from '../app1/action'

const init={
    rooms:[],
    emp:{},
}
//
export default (state=init, action) => {
    switch(action.type) {
        case types.getAll:{
            const rooms=[]
            let savedRooms=[]

            const obj= localStorage.getItem('Rooms')
            if(obj){
                savedRooms =(JSON.parse(obj))
            }
            for (let index = 1; index <= action.totalNum; index++) {
                const sr=savedRooms && savedRooms.filter(r=> r.id===index)[0]
                const room={
                    id:index,
                    name:`Room ${index}`,
                    adult: (sr)? sr.adult: 1,
                    child: sr? sr.child:0,
                    isRoomEnableChk: (index !== 1),
                    isDefaultDisable: sr? sr.isDefaultDisable:(index !== 1),
                }
                rooms.push(room)
            }
            return {
                ...state,
                rooms,
            }
        }
        case types.getEmp:
        return{
            ...state,
            emp:action.emp,
        }
        case types.select: 
            return{
                ...state,
                rooms: state.rooms.map((room)=>{
                    if(action.id>=room.id) {
                        room.isDefaultDisable=false
                    }
                    return room
                })
            }
        case types.unselect: 
            return{
                ...state,
                rooms: state.rooms.map((room)=>{
                    if(room.id !== 1 && action.id <= room.id) {
                        room.isDefaultDisable=true
                    }
                    return room
                })
            }
        case types.addChild: 
            return{
                ...state,
                rooms: state.rooms.map((room)=>{
                    if(room.id === action.id) {
                        room.child = action.value
                    }
                    return room
                })
            }
        case types.addAdult: 
            return{
                ...state,
                rooms: state.rooms.map((room)=>{
                    if(room.id === action.id) {
                        room.adult = action.value
                    }
                    return room
                })
            }
        default:
            return state
    }
}
