import Album from "../models/Album.model";
import Artist from "../models/Artist.model";
import UserRequest from "../models/UserRequest.model";

export const artistAssociations = () => {
    Artist.hasMany(Album, {
        foreignKey: "id_artist",
    });
    
    Artist.hasMany(UserRequest, {
        foreignKey: "id_artist",
    });
}
