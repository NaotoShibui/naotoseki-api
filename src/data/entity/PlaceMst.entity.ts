import { Entity, Column, PrimaryColumn, BaseEntity, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import * as constants from '../../constants';
import { CityMstEntity } from './CityMst.entity';
import { SoundArchivesEntity } from './SoundArchives.entity';

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

  @OneToMany(type => SoundArchivesEntity, soundArchive => soundArchive.placeMst)
  soundArchives: SoundArchivesEntity[];

  @OneToOne(type => CityMstEntity, cityMst => cityMst.placeMst)
  cityMst: CityMstEntity;
}