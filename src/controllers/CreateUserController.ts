import {Reqest, Response} from 'express'

class CreateUserController{
    handle(request: Request, response: Response){
        return response.json({
            oi:"Opa"
        })
    }
}

export {CreateUserController};