import { Model, DataTypes } from "sequelize";
import { SPOTI_DB } from "../../../connection";
import  { IUserRequest }  from "../interfaces/UserRequest.interface";

class UserRequest extends Model<IUserRequest> {
    public id_user_request!: number;
    public ip!: string;
    public request_date!: Date;
    public id_artist!: number;
}

UserRequest.init(
    {
        id_user_request: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ip: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        request_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        id_artist: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "UserRequests",
        sequelize: SPOTI_DB,
        timestamps: false,
    }
);

export default UserRequest;