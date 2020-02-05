import { Router } from 'express';
import { controladorInicio } from '../controllers/indexController';

class IndexRoutes{
    
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', controladorInicio.inicio);
        this.router.get('/mapa', controladorInicio.mapa);
        this.router.get('/eventos', controladorInicio.eventos);
    }

}

const rutasInicio = new IndexRoutes();
export default rutasInicio.router;