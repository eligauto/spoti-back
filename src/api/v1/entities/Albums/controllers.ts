import { Request, Response } from "express";
import { responseHandler } from "../../helpers";
import { getAlbumsByArtist } from "./helpers";

export const getAllAlbumsController = async (req: Request, res: Response) => {
    const {
        headers: { 'x-forwarded-for': ip },
        query: { page, pageSize, artistName },
    } = req;

    try {
        const response = await getAlbumsByArtist(
            JSON.parse(
                JSON.stringify({
                    page,
                    pageSize,
                    artistName,
                })
            ), ip
        );
        responseHandler(response, res, Number(page), Number(pageSize));
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ error });
    }
}