import { Table, Column, Model, CreatedAt } from 'sequelize-typescript';


@Table
export class Activity extends Model<Activity> {

@Column
 name: string;

@Column
 imageUrl: string;

@Column
 participantNum: number;

@CreatedAt
 @Column
 createdAt: Date;
}