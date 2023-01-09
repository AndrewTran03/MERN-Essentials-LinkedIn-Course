import { 
    addNewPlayer, 
    getPlayers,
    getPlayerWithID
} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    // GET endpoint
    .get(getPlayers)

    // POST endpoint
        .post(addNewPlayer);
    
    app.route('/player/:PlayerId')
        .get(getPlayerWithID)
}

export default routes;