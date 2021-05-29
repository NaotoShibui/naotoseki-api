import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';

@Entity('city_mst')
export class CityMst extends BaseEntity {
  @PrimaryColumn({
    name: 'prefecture'
  })
  prefecture: string;

  @Column({
    name: 'pref_name'
  })
  prefName: string;

  @PrimaryColumn({
    name: 'city'
  })
  city: string;

  @Column({
    name: 'city_name'
  })
  cityName: string;

  @Column({
    nullable: true,
    name: 'active_image'
  })
  activeImage: string;

  @Column({
    nullable: true,
    name: 'normal_image'
  })
  normalImage: string;
}