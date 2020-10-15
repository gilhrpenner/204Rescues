import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Rescues from './Rescues';

@Entity('images')
export default class Rescue {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Rescues, rescues => rescues.images)
    @JoinColumn({ name: 'rescue_id' })
    rescue: Rescues;
}