import Artist from "../models/Artist.model";
import UserRequest from "../models/UserRequest.model";

export const userRequestAssociations = () => {
    UserRequest.belongsTo(Artist, {
        foreignKey: 'id_artist',
        targetKey: 'id_artist',
        as: 'artist',
    });
}