import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'album_voice_list' })
export class AlbumVoiceList extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  unit_id: number;

  @Field()
  @Column('text')
  sheet_id: string;

  @Field()
  @Column('text')
  voice_id: string;

  @Field()
  @Column('text')
  title: string;

  @Field()
  @Column('text')
  description: string;

}

