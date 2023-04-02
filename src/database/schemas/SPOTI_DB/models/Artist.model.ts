import { Model, DataTypes } from "sequelize";
import { SPOTI_DB } from "../../../connection";
import { IArtist } from "../interfaces/Artist.interface";

class Artist extends Model <IArtist> {
    public id_artist!: number;
    public name!: string;
    public spotifyId!: string;
}

Artist.init(
    {
        id_artist: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        spotifyId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "Artists",
        sequelize: SPOTI_DB,
        timestamps: false,
    }
);

export default Artist;
