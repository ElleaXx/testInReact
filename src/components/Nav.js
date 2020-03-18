import React from 'react';

const Nav = () => {
    return (
        <div className ='header'>
        <div className="nav" style = {{flex: 2, marginLeft: 0, backgroundColor: '#4aa516', color: 'white'}}>
            <div className="newReserve">
                Новый резерв
            </div>
        </div>
        <div className="nav" style={{ flex: 6, justifyContent: 'space-between' }}>
            <div className="calendar">
                <select>
                    <option>Завтра, 4 февраля (понедельник)</option>
                    <option>послезавтра, 5 февраля (вторник)</option>
                </select>
            </div>
        </div>
        <div className="nav">
            <div className="calendarRange">
                <img src={require("../image/date_range.png")}/>
            </div>
        </div>
        <div className="nav">
            <div className="value">
                <div className="valueMain">
                    <select>
                        <option selected = "true">Несколько значений</option>
                        <option>Много значений</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="nav">
            <div className="vector">
                <img src={require('../image/Vector.png')}/>
            </div>
        </div>
        <div className="nav">
            <div className="searvh">
                <img src={require('../image/search.png')}/>
            </div>
        </div>
        <div className="nav">
            <div className="settings">
                <img src={require('../image/settings.png')}/>
            </div>
        </div>
        <div className="nav" style= {{marginRight: 0}}>
            <div className="assigment">
                <img src={require('../image/assignment.png')}/>
            </div>
        </div>
    </div>
    )
}

export default Nav