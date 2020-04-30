import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'srt_top_talk' })
export class SrtTopTalk extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  talk_id: number;

  @Field()
  @Column('integer')
  chara_index: number;

  @Field()
  @Column('text')
  talk_text: string;

  @Field()
  @Column('text')
  sheet_name: string;

  @Field()
  @Column('text')
  cue_name: string;

  @Field()
  @Column('integer')
  direction: number;

}

