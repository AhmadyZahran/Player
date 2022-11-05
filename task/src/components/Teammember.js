import React from "react";

function Teammember(props) {

    return (
        <div className="col-md-4 col-sm-6">
            <div className="card" style={{ border: props.worldcup ? ' 2px solid gold' : '2px solid white' }}>
                <div className="card-header">
                    <img style={{ width: '300px' }} src={props.img} alt='logo' />
                </div>
                <div className="card-body">
                    <h2>{props.name}</h2>
                    <h5>{props.age}</h5>
                    <div>{props.team}</div>
                    <div>{props.club}</div>
                    <div>{props.worldcup}</div>

                </div>

            </div>
        </div>
    )
}

export default Teammember;