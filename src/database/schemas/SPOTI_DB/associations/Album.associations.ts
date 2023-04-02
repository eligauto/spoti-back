import Album from "../models/Album.model";
import Artist from "../models/Artist.model";

export const albumAssociations = () => {
    Album.belongsTo(Artist, {
        foreignKey: "id_artist",
    });
}