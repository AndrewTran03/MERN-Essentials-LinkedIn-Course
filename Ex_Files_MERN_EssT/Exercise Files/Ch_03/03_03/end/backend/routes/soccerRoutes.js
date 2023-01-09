import { addNewPlayer } from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    // POST endpoint
        .post(addNewPlayer);
}

export default routes;