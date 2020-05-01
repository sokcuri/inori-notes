import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'music_content' })
export class MusicContent extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'music_id', type: 'integer' })
  musicId: number;

  @Field()
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field()
  @Column({ name: 'total_playing_time', type: 'text' })
  totalPlayingTime: string;

  @Field()
  @Column({ name: 'listen_start_time', type: 'text' })
  listenStartTime: string;

  @Field()
  @Column({ name: 'detail', type: 'text' })
  detail: string;

  @Field()
  @Column({ name: 'sheet_id', type: 'text' })
  sheetId: string;

  @Field()
  @Column({ name: 'cue_id', type: 'text' })
  cueId: string;

}

