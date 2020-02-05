import { Request, Response} from 'express';
import pool from '../database';

class UsuarioController{
    index(req:Request, res:Response){

    }

    public async create(req:Request, res:Response){
        await pool.query('INSERT INTO usuarios SET ?', [req.body]); 
        res.json("Usuario creado");
    }

    public async read(req:Request, res:Response){
        const usuarios = await pool.query('SELECT * FROM usuarios', [req.body]);
        res.json(usuarios);
    }
    
    public async readone(req:Request, res:Response){
        const usuarios= await pool.query('SELECT * FROM usuarios WHERE id=?', [req.params.id]);
        res.json(usuarios);
    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE usuarios SET ? WHERE id=?', [req.params.id]);
        res.json("Usuario Actualizado");
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM usuarios WHERE id=?', [req.params.id]);
        res.json("Usuario Borrado");
    }
}

export const controladorUsuario = new UsuarioController();