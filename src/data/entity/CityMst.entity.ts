import { Entity, Column, PrimaryColumn, BaseEntity, OneToOne, JoinColumn } from 'typeorm';
import * as constants from '../../constants';
import { PlaceMstEntity } from './PlaceMst.entity';
import { SoundArchivesEntity } from './SoundArchives.entity';

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

  @OneToOne(type => PlaceMstEntity, placeMst => placeMst.cityMst)
  @JoinColumn([
    { name: "prefecture", referencedColumnName: "prefecture"},
    { name: "city", referencedColumnName: "city" }
  ])
  placeMst: PlaceMstEntity;
}