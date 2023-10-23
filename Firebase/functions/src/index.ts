import * as functions from 'firebase-functions';
// import {MongoClient} from "mongodb";
import * as admin from 'firebase-admin';
import axios from "axios";

admin.initializeApp();

export const myFunction = functions.https.onRequest((request, response) => {
    response.send('Hello from Firebase Cloud Function with TypeScript!');
});

export const GetScoutingEvent = functions.https.onRequest((request, response) =>{
    const data = JSON.stringify({
        "collection": "MatchScouting",
        "database": "test",
        "dataSource": "Team2637",
        "filter": {
            // "team_number":{"$numberInt":"2637"}
            "initials":"LL"
        }
    });

    const config = {
        method: 'post',
        url: 'https://us-west-2.aws.data.mongodb-api.com/app/data-jpccm/endpoint/data/v1/action/findOne',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': 'rGCavl07OsgSIoB3DRZwSjRaT6Vxc76jDTonvlJzmWri27XqVkvjhkFD6f8VFy7G',
            'Accept': 'application/ejson'
        },
        data: data
    };


    axios(config)
        .then(function (dataResponse) {
            console.log(JSON.stringify(dataResponse.data));

            response.send(JSON.stringify(dataResponse.data));

        })
        .catch(function (error) {
            console.log(error);
        });

});
