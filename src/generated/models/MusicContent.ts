import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'music_content' })
export class MusicContent extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  music_id: number;

  @Field()
  @Column('text')
  name: string;

  @Field()
  @Column('text')
  total_playing_time: string;

  @Field()
  @Column('text')
  listen_start_time: string;

  @Field()
  @Column('text')
  detail: string;

  @Field()
  @Column('text')
  sheet_id: string;

  @Field()
  @Column('text')
  cue_id: string;

}

