import { connect } from 'react-redux';
import Rooms from './'
import {getAll, select, unselect, addChild, addAdult, onSumit, getServer} from './action'

const mapDispatchToProps = dispatch => ({
    getAll: (num) => dispatch(getAll(num)),
    onCheck: (id) => dispatch(select(id)),
    onUnCheck: (id) => dispatch(unselect(id)),
    addAdult: (id,val) => dispatch(addAdult(id,val)),
    addChild: (id,val) => dispatch(addChild(id,val)),
    onSumit:(rooms)=>dispatch(onSumit(rooms)),
    getServer:()=>dispatch(getServer()),
  })

  const mapStateToProps = state => ({
    rooms :state.app.rooms,
    employ:state.app.emp,
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Rooms)