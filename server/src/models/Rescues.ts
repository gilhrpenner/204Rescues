import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Images from './Images'

@Entity('rescues')
export default class Rescues {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;
    
    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    donations: string;

    @Column()
    registeredCharity: boolean;

    @OneToMany(() => Images, image => image.rescue, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'rescue_id' })
    images: Images[]
}