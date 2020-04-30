import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'srt_top_talk' })
export class SrtTopTalk extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'talk_id', type: 'integer' })
  talkId: number;

  @Field()
  @Column({ name: 'chara_index', type: 'integer' })
  charaIndex: number;

  @Field()
  @Column({ name: 'talk_text', type: 'text' })
  talkText: string;

  @Field()
  @Column({ name: 'sheet_name', type: 'text' })
  sheetName: string;

  @Field()
  @Column({ name: 'cue_name', type: 'text' })
  cueName: string;

  @Field()
  @Column({ name: 'direction', type: 'integer' })
  direction: number;

}

