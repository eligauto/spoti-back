import { Model, DataTypes } from "sequelize";
import { SPOTI_DB } from "../../../connection";
import { IAlbum } from "../interfaces/Album.interface";

class Album extends Model<IAlbum> {
    public id_album!: number;
    public name!: string;
    public image_url!: string;
    public popularity!: number;
    public realase_date!: Date;
    public id_artist!: number;
}

Album.init(
    {
        id_album: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        popularity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        realase_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        id_artist: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "Albums",
        sequelize: SPOTI_DB,
        timestamps: false,
    }
);

export default Album;
