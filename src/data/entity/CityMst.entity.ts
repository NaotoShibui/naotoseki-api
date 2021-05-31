import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';
import * as constants from '../../constants';

@Entity(constants.CITY_MST)
export class CityMstEntity extends BaseEntity {
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