import {Model, Table, Column, BelongsToMany, Scopes, DataType, AutoIncrement, PrimaryKey} from 'sequelize-typescript';

@Table
export default class Book extends Model<Book> {
    
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @Column({
        type: DataType.STRING(80)
    })
    ISBN: string;
}