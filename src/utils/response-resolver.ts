import { Response, NextFunction } from "express";

function responseResolver(req: any, res: Response, next: NextFunction) {
    if(req.data) {
        res.send(req.data);
    }
    next();
}

export default responseResolver