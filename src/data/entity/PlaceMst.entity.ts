import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';
import * as constants from '../../constants';

@Entity(constants.PLACE_MST)
export class PlaceMstEntity extends BaseEntity {
  @PrimaryColumn({
    name: 'prefecture'
  })
  prefecture: string;

  @PrimaryColumn({
    name: 'city'
  })
  city: string;

  @PrimaryColumn({
    name: 'place'
  })
  place: string;

  @Column({
    name: 'place_name'
  })
  placeName: string;

  @Column({
    name: 'point_ratio_x'
  })
  pointRatioX: number;

  @Column({
    name: 'point_ratio_y'
  })
  pointRatioY: number;
}