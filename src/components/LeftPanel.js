import React from 'react'


const leftPanel = () => {
    return (
        <div className="leftPanel">
            <div className="tab">
                <div style ={{fontSize: '24px'}}>17.22</div>
            </div>
            <div className="tab">
                <div className="notifications">
                    <img src={require('../image/notifications.png')}/>
                </div>
            </div>
            <div className="tab">
            </div>
            <div className="tab">
                <div className="doc">
                <img src={require('../image/Vector (1).png')}/>
                </div>
            </div>
            <div className="tab">
                <div className="sunny">
                <img src={require('../image/wb_sunny.png')}/>
                </div>
            </div>
            <div className="tab">
                <div className="wifi">
                    <img className="wifiMain" src={require("../image/wifi.png")}/>
                    <img className="wifiAfter" src={require("../image/perm_scan_wifi.png")}/>
                </div>
            </div>
            <div className="tab" style = {{border: 'none'}}>
                <div className="battery_full">
                    <img src={require("../image/battery_full.png")}/>
                </div>
            </div>
    </div>
    )
    }
export default leftPanel