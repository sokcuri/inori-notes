import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'album_voice_list' })
export class AlbumVoiceList extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field()
  @Column({ name: 'sheet_id', type: 'text' })
  sheetId: string;

  @Field()
  @Column({ name: 'voice_id', type: 'text' })
  voiceId: string;

  @Field()
  @Column({ name: 'title', type: 'text' })
  title: string;

  @Field()
  @Column({ name: 'description', type: 'text' })
  description: string;

}

