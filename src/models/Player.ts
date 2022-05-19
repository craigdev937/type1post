import { BaseEntity, Column, Entity, 
    PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "players"})
export class Player extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") id: string;
    @Column() alias: string;
    @Column() first: string;
    @Column() last: string;
    @Column() age: number;
    @Column() info: string
};



