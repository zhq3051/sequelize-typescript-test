import   Author   from "./models/author";
import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
    name: 'confinement',
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'aaaaaa',
    modelPaths: [__dirname + '/models']
});

//sequelize.addModels([Author]);
// sequelize.sync({force: true})
//     .then(()=> {
//         Author.create<Author>({name: 'author1'})
//     })
//     .then((author)=> {
//         console.log(author);
//         return author;
//     });

const author = new Author({name: 'testa'});
author.save();