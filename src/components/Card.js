import React from 'react'

const Card = ({waiting,status,count,time,name,phone,halls,created, edit, deleteComp}) => {
    return (
        <div className="order">
        <div className="part" style = {{width: '70%'}}>
            <div className="position">
                <div className="time">{waiting}</div>
            </div>
            <div className="position">
                <div className="expectation">{status}</div>
            </div>
        </div>
        <div className="part" style = {{width: '70%'}}>
            <div className="position" style = {{width: '70%', display: 'flex', justifyContent: 'space-between'}}>
                <img src={require("../image/group.png")}/>
                <div>{count}</div>
            </div>
            <div className="position" style = {{width: '70%', display: 'flex', justifyContent: 'space-between'}}>
                <img src={require("../image/schedule.png")} style = {{paddingLeft: '7px'}}/>
                <div>{time}</div>
            </div>
        </div>
        <div className="part" style = {{width: '170%'}}>
            <div className="partNumber">
                <div className="position">
                    <img src={require("../image/account_box.png")}/>
                    <div>{name}</div>
                </div>
                <div className="position">
                    <img src={require("../image/local_phone.png")}/>
                    <div>{phone}</div>
                </div>
            </div>
        </div>
        <div className="part" style = {{width: '170%'}}>
            <div className="position">
                <img src={require("../image/Union.png")}/>
                <div>Оснорвной {halls}.</div>
            </div>
        </div>
        <div className="part">
            <div className="position">
                <div>{created}</div>
            </div>
        </div>
        <div className="part" style = {{width: '50%', border: 'none', position: 'relative'}}>
            <div className="position">
                <img onClick = {edit} src={require("../image/border_color.png")}/>
                <img className = "delete" onClick = {deleteComp} src={require("../image/Delete-80_icon-icons.com_57340 (1).png")}/>
            </div>
        </div>
    </div>
    )
    }
export default Card