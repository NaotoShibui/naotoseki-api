import { Entity, Column, PrimaryColumn, BaseEntity, OneToOne, JoinColumn } from 'typeorm';
import * as constants from '../../constants';
import { PlaceMstEntity } from './PlaceMst.entity';

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

  @Column({
    nullable: true,
    name: 'population'
  })
  population: number;

  @Column({
    nullable: true,
    name: 'railway'
  })
  railway: string;

  @Column({
    nullable: true,
    name: 'city_code'
  })
  cityCode: number;

  @Column({
    nullable: true,
    name: 'longitude'
  })
  longitude: string;

  @Column({
    nullable: true,
    name: 'latitude'
  })
  latitude: string;

  @Column({
    nullable: true,
    name: 'area'
  })
  area: number;

  @Column({
    nullable: true,
    name: 'residential_land'
  })
  residentialLand: number;

  @Column({
    nullable: true,
    name: 'field'
  })
  field: number;

  @Column({
    nullable: true,
    name: 'forest'
  })
  forest: number;

  @Column({
    nullable: true,
    name: 'wilderness'
  })
  wilderness: number;

  @OneToOne(type => PlaceMstEntity, placeMst => placeMst.cityMst)
  @JoinColumn([
    { name: "prefecture", referencedColumnName: "prefecture"},
    { name: "city", referencedColumnName: "city" }
  ])
  placeMst: PlaceMstEntity;
}