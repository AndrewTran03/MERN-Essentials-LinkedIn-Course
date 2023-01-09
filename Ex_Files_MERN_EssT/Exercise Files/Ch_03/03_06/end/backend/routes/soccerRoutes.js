import { 
    addNewPlayer, 
    getPlayers,
    getPlayerWithID,
    UpdatePlayer
} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    // GET endpoint
    .get(getPlayers)

    // POST endpoint
        .post(addNewPlayer);
    
    app.route('/player/:PlayerId')
        // Get specific player
        .get(getPlayerWithID)

        // update a specific player
        .put(UpdatePlayer)
}

export default routes;