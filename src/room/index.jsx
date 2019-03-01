import React from 'react'
import './room.css';

class Room extends React.Component{
    constructor(props){
        super(props)
        this.oncheck=this.oncheck.bind(this)
        this.onAdultChk = this.onAdultChk.bind(this)
        this.onChildChk = this.onChildChk.bind(this)

    }
    oncheck(e){
        this.props.onRoomCheck(e.currentTarget.checked)
    }
    onAdultChk(e){
        this.props.onAdultChk(e.target.value)
    }   
    onChildChk(e){
        this.props.onChildChk(e.target.value)
    }
    render(){
        const {roomName, isRoomEnableChk, isDefaultDisable,adult, child} =this.props
        //  const{isDisable} =this.state

        return(
            <div className={!isDefaultDisable? 'conatiner' :'con_unsel'}>
                <div className='header'>
                    <span className={ !isDefaultDisable? 'enabledChk':''}>
                        {isRoomEnableChk && 
                            <input type='checkbox' checked={!isDefaultDisable} className='chkBox' onChange={this.oncheck}/>
                        }{roomName} 
                    </span> 
                </div>
                <div classname="row">
                    <div className="column">
                        <div>
                            Adults (18+)
                        </div>
                        <div className='chk'>
                            <select id='adult' disabled={isDefaultDisable} value={adult} onChange={this.onAdultChk}>
                                <option value='1'>1</ option>
                                <option value='2'>2</ option>
                            </select>
                        </div>
                    </div>
                    <div className="column">
                        <div>
                            Children (0-17)
                        </div>
                        <div className='chk'>
                            <select id='child' disabled={isDefaultDisable}  value={child} onChange={this.onChildChk}>
                                <option value='0'>0</ option>
                                <option  value='1'>1</ option>
                                <option value='2'>2</ option>
                            </select>
                        </div></div>
                </div>
            </div>
        )
    }

}

export default Room