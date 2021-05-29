import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class CityMaster {
  @PrimaryColumn()
  prefecture: string;

  @Column()
  prefName: string;

  @PrimaryColumn()
  city: string;

  @Column()
  cityName: string;

  @Column()
  activeImage: string;

  @Column()
  normalImage: string;
}