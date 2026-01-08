import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('households')
export class Household {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  geoCode: string;

  @Column({ type: 'point', nullable: true })
  geo: any;

  @Column()
  members: number;

  @Column({ default: false })
  rationCard: boolean;

  @Column({ type: 'enum', enum: ['kutcha', 'pucca', '3dcp'] })
  housingType: string;

  @CreateDateColumn()
  createdAt: Date;
}
