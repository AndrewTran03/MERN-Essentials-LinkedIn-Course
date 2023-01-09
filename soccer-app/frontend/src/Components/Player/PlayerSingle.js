import React from "react";

const PlayerSingle = (props) => {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src="soccer.jpeg" alt="Soccer Ball"/>
                        <span className="card-title">{props.player.firstName} {props.player.lastName}</span>
                    </div>
                    <div className="card-content">
                        <p>--- Contact Information ---</p>
                        <p>Phone Number: {props.player.phone} - Email: {props.player.email}</p>
                        
                        <p>--- Skills ---</p>
                        <p>Speed: {props.player.speed}</p>
                        <p>Endurance: {props.player.endurance}</p>
                        <p>Ability: {props.player.ability}</p>
                        <p>Techniques: {props.player.techniques}</p>
                        <p>Tactical: {props.player.tactical}</p>
                    </div>
                    <div className="card-action">
                        <p>Current Team: {props.player.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerSingle;
