import React from 'react'
import Room from '../room'
import './app1.css'

const total =[1,2,3,4]
class Rooms extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.onRoomCheck = this.onRoomCheck.bind(this)
        this.onAdultChk = this.onAdultChk.bind(this)
        this.onChildChk = this.onChildChk.bind(this)
        this.submit = this.submit.bind(this)
    }
    componentDidMount(){
        this.props.getAll(total.length)
    }
    onRoomCheck(id, checked) {
        if(checked){
            this.props.onCheck(id)
        }else{
            this.props.onUnCheck(id)
        }
    }
    onAdultChk(id, val) {
        this.props.addAdult(id,val)
    }
    onChildChk(id, val) {
        this.props.addChild(id, val)
    }
    submit(){
        this.props.onSumit(this.props.rooms)
    }
    render() {
        const {rooms} =this.props
        return(
            <div>
                <div className='materPanel'>
                    {rooms && rooms.map((room)=>
                        <Room 
                            id={room.id}
                            roomName={room.name}
                            adult={room.adult}
                            child={room.child}
                            isRoomEnableChk={room.isRoomEnableChk}
                            isDefaultDisable={room.isDefaultDisable}                            
                            onRoomCheck={(checked) => this.onRoomCheck(room.id, checked)}
                            onAdultChk={(val) => this.onAdultChk(room.id, val)}
                            onChildChk={(val) => this.onChildChk(room.id, val)}
                        />
                    )}
                </div>
                <div>
                    <button className="btn" onClick={this.submit}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Rooms