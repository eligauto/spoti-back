import { Transaction } from "sequelize";
import Artist from "../../../../database/schemas/SPOTI_DB/models/Artist.model";
import UserRequest from "../../../../database/schemas/SPOTI_DB/models/UserRequest.model";
import spotifyApi from "../../../../services/spotifyApi";
import { IAlbumsParams } from "./types";

export const getAlbumsByArtist = async (
  albumsParams: IAlbumsParams,
  ip: string | string[] | undefined,
  transaction?: Transaction
) => {
  try {
    const { page, pageSize, artistName } = albumsParams;

    const requestDate = new Date();

    const response = await spotifyApi.get("/search", {
      params: {
        q: artistName,
        type: "artist",
        limit: 1,
      },
    });

    const artistId = response.data.artists.items[0].id;

    const albumsResponse = await spotifyApi.get(`/artists/${artistId}/albums`);

    const [artist, created] = await Artist.findOrCreate({
      where: { name: artistName, spotifyId: artistId },
      transaction,
    });

    const userRequest = await UserRequest.create(
      {
        ip: ip,
        request_date: requestDate,
        id_artist: artist.id_artist,
      },
      { transaction }
    );

    if (!userRequest) {
      throw new Error("Error creating user request");
    }

    await transaction?.commit();

    return albumsResponse.data.items;
  } catch (error: any) {
    if (transaction) {
      await transaction.rollback();
    }
    throw new Error(error);
  }
};
