import { SPOTI_DB } from "./connection";
import { albumAssociations } from "./schemas/SPOTI_DB/associations/Album.associations";
import { artistAssociations } from "./schemas/SPOTI_DB/associations/Artist.associations";
import { userRequestAssociations } from "./schemas/SPOTI_DB/associations/UserRequest.associations";

export const initAllAssociations = () => {
    console.log('Init Assocations');
    albumAssociations();
    artistAssociations();
    userRequestAssociations();

    SPOTI_DB.sync({ force: true })
    .then(() => {
        console.log('All associations have been initialized');
    })
    .catch((err) => {
        console.log('Error initializing associations', err);
    });
};