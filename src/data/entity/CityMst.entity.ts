import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class CityMst {
  @PrimaryColumn()
  prefecture: string;

  @Column()
  prefName: string;

  @PrimaryColumn()
  city: string;

  @Column()
  cityName: string;

  @Column({
    nullable: true
  })
  activeImage: string;

  @Column({
    nullable: true
  })
  normalImage: string;
}