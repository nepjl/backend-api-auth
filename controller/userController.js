import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../config/db.js';

export const loginUser = async () =>{
    const { email, password } = req.body;
    const [user] = await db.execute('SELECT * FROM utilisateurs WHERE email = ?', [email]);

    if(user.length > 0 && await bcrypt.compare(password, user[0].mot_de_passe)){
        //Génération du json token
        const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({token });
    }else{
        res.status(401).json({ message: 'Identifiants incorrects veuillez rééssayer s\'il vous plaît.' });
    }

};

export const userProfile = async () =>{
    const token = req.headers.authorization?.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const [user] = await db.execute('SELECT email, telephone FROM utilisateurs WHERE id = ?', [decoded.id])
   
    if(user.length > 0) {
        res.json(user[0]);
    }else{
        res.status(401).json({ message: 'Oups ! Utilissateur introuvable.' });
    }

}