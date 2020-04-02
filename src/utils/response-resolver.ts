import { Response, Request, NextFunction } from "express";

function responseResolver(req: Request, res: Response, next: NextFunction) {
    if(req.data) {
        res.send(req.data);
    }
    next();
}

export default responseResolver