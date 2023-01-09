import logo from '../logo.svg';
import './App.css';
import PlayerList from './Player/PlayerList';
import PlayerSingle from './Player/PlayerSingle';
import PlayerForm from './Player/PlayerForm';
import { Component } from 'react';
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [],
            currentPlayer: {}
        };

        this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    }

    componentDidMount() {
        const url = "http://localhost:4000/players";
        
        axios.get(url)
            .then((Response) => {
                this.setState({
                    players: Response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    updateCurrentPlayer(newPlayer) {
        this.setState({
            currentPlayer: newPlayer
        });
    }

    render() {
        return (
            <div className="App">
                <div className="row">
                    <nav>
                        <div className="nav-wrapper blue darken-1">
                        <a href="#" className="brand-logo">Soccer Management</a>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col s3"><PlayerList players={this.state.players} 
                        updateCurrentPlayer={this.updateCurrentPlayer} />
                    </div>
                    <div className="col s9"><PlayerSingle player={this.state.currentPlayer}/></div>
                </div>
                <div className="row">
                    <div className="col s12"><PlayerForm /></div>
                </div>
            </div>
        );
    }
}

export default App;
