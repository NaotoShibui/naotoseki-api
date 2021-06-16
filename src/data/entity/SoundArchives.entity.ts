import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import * as constants from '../../constants';
import { PlaceMstEntity } from './PlaceMst.entity';

@Entity(constants.SOUND_ARCHIVES)
export class SoundArchivesEntity extends BaseEntity {
  @PrimaryColumn({
    name: 'title'
  })
  title: string;
  
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
  
  @PrimaryColumn({
    name: 'recording_date'
  })
  recordingDate: Date;
  
  @Column({
    name: 'download_link'
  })
  downloadLink: string;
  
  @Column({
    name: 'file_length'
  })
  fileLength: string;

  @Column({
    name: 'description'
  })
  description: string;

  @Column({
    name: 'is_normalized'
  })
  isNormalized: boolean;

  @Column({
    name: 'is_noise_reducted'
  })
  isNoiseReducted: boolean;

  @Column({
    name: 'is_repaired'
  })
  isRepaired: boolean;

  @ManyToOne(type => PlaceMstEntity, place => place.soundArchives)
  @JoinColumn([
    { name: "prefecture", referencedColumnName: "prefecture"},
    { name: "city", referencedColumnName: "city" },
    { name: "place", referencedColumnName: "place" }
  ])
  placeMst: PlaceMstEntity;
}