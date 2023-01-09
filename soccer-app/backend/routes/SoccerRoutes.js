import { addNewPlayer, getPlayers, getPlayerWithID, updatePlayer, deletePlayer } from "../controllers/PlayerControllers";


const routes = (app) => {
    app.route("/players")
        .get(getPlayers) //GET ENDPOINT
        .post(addNewPlayer); //POST/CREATE ENDPOINT

    app.route("/player/:PlayerId")
        .get(getPlayerWithID) //GET SPECIFIC PLAYER
        .put(updatePlayer) //PUT/UPDATE A SPECIFIC PLAYER
        .delete(deletePlayer); //DELETE A SPECIFIC PLAYER
};

export default routes;
