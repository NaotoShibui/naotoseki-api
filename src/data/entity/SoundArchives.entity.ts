import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import * as constants from '../../constants';
import { PlaceMstEntity } from './PlaceMst.entity';

@Entity(constants.SOUND_ARCHIVES)
export class SoundArchivesEntity extends BaseEntity {
  @PrimaryColumn({
    name: 'id'
  })
  id: string;

  @Column({
    name: 'title'
  })
  title: string;
  
  @Column({
    name: 'prefecture'
  })
  prefecture: string;

  @Column({
    name: 'city'
  })
  city: string;
  
  @Column({
    name: 'place'
  })
  place: string;
  
  @Column({
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