import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'srt_action' })
export class SrtAction extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'action_name', type: 'text' })
  actionName: string;

  @Field(type => String)
  @Column({ name: 'inori_action', type: 'text' })
  inoriAction: string;

  @Field(type => String)
  @Column({ name: 'dragon_action', type: 'text' })
  dragonAction: string;

  @Field(type => String)
  @Column({ name: 'kaya_action', type: 'text' })
  kayaAction: string;

  @Field(type => String)
  @Column({ name: 'homare_action', type: 'text' })
  homareAction: string;

  @Field(type => Int)
  @Column({ name: 'talk_text_type', type: 'integer' })
  talkTextType: number;

  @Field(type => String)
  @Column({ name: 'talk_text', type: 'text' })
  talkText: string;

  @Field(type => String)
  @Column({ name: 'voice_list', type: 'text' })
  voiceList: string;

}

