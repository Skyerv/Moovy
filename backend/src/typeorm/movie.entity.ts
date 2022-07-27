/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'std_id',
  })
  id: number;

    @Column({
        name: 'imbd_id',
        type: 'varchar',
        length: 100,
      })
      imdb_id: string;

      @Column({
        name: 'std_title',
        nullable: false,
        default: '',
      })
      title: string;

      @Column({
        name: 'std_year',
        nullable: false,
        default: '',
      })
      year: string;

      @Column({
        name: 'std_poster',
        nullable: false,
        default: '',
      })
      poster: string;

      @Column({
        name: 'std_rating',
        nullable: false,
        default: '',
      })
      rating: string;

      @Column({
        name: 'std_audioreview',
        nullable: false,
        default: '',
      })
      audioreview: string;
}