import { Request, Response } from "express"

export const HellowMundo = (req: Request, res: Response) => {
    res.send("Hello Mundo!")
}