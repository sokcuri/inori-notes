import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'album_voice_list' })
export class AlbumVoiceList extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => String)
  @Column({ name: 'sheet_id', type: 'text' })
  sheetId: string;

  @Field(type => String)
  @Column({ name: 'voice_id', type: 'text' })
  voiceId: string;

  @Field(type => String)
  @Column({ name: 'title', type: 'text' })
  title: string;

  @Field(type => String)
  @Column({ name: 'description', type: 'text' })
  description: string;

}

