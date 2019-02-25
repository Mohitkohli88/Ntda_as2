import { connect } from 'react-redux';
import Rooms from './'
import {getAll, select, unselect, addChild, addAdult, onSumit} from './action'

const mapDispatchToProps = dispatch => ({
    getAll: (num) => dispatch(getAll(num)),
    onCheck: (id) => dispatch(select(id)),
    onUnCheck: (id) => dispatch(unselect(id)),
    addAdult: (id,val) => dispatch(addAdult(id,val)),
    addChild: (id,val) => dispatch(addChild(id,val)),
    onSumit:(rooms)=>dispatch(onSumit(rooms)),
  })

  const mapStateToProps = state => ({
    rooms :state.app.rooms,
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Rooms)