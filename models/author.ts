import { Model, Column, Table, HasMany,PrimaryKey, AutoIncrement, DefaultScope } from "sequelize-typescript";



@DefaultScope({
    attributes: ['id', 'name']
})

@Table
export default class Author extends Model<Author> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;
}