import { addNewPlayer, getPlayers } from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    // GET endpoint
    .get(getPlayers)

    // POST endpoint
        .post(addNewPlayer);
}

export default routes;