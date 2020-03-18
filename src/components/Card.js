import React from 'react'

const Card = (props) => {
    return (
        <div className="order">
        <div className="part" style = {{width: '70%'}}>
            <div className="position">
                <div className="time">{props.time}</div>
            </div>
            <div className="position">
                <div className="expectation">{props.status}</div>
            </div>
        </div>
        <div className="part" style = {{width: '70%'}}>
            <div className="position" style = {{width: '70%', display: 'flex', justifyContent: 'space-between'}}>
                <img src={require("../image/group.png")}/>
                <div>{props.quantityPerson}</div>
            </div>
            <div className="position" style = {{width: '70%', display: 'flex', justifyContent: 'space-between'}}>
                <img src={require("../image/schedule.png")} style = {{paddingLeft: '7px'}}/>
                <div>{props.quantityTime}</div>
            </div>
        </div>
        <div className="part" style = {{width: '170%'}}>
            <div className="partNumber">
                <div className="position">
                    <img src={require("../image/account_box.png")}/>
                    <div>{props.name}</div>
                </div>
                <div className="position">
                    <img src={require("../image/local_phone.png")}/>
                    <div>{props.phone}</div>
                </div>
            </div>
        </div>
        <div className="part" style = {{width: '170%'}}>
            <div className="position">
                <img src={require("../image/Union.png")}/>
                <div>{props.hall}</div>
            </div>
        </div>
        <div className="part">
            <div className="position">
                <div>{props.createdDate}</div>
            </div>
            <div className="position">
                <div>{props.createdTime}</div>
            </div>
        </div>
        <div className="part" style = {{width: '50%', border: 'none', position: 'relative'}}>
            <div className="position">
                <img src={require("../image/border_color.png")}/>
                <img className = "delete" onClick = {props.onClick} src={require("../image/Delete-80_icon-icons.com_57340 (1).png")}/>
            </div>
        </div>
    </div>
    )
    }
export default Card