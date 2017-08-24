"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const author_1 = require("./models/author");
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize = new sequelize_typescript_1.Sequelize({
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
const author = new author_1.default({ name: 'testa' });
author.save();
