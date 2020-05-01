import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'srt_action' })
export class SrtAction extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'action_name', type: 'text' })
  actionName: string;

  @Field()
  @Column({ name: 'inori_action', type: 'text' })
  inoriAction: string;

  @Field()
  @Column({ name: 'dragon_action', type: 'text' })
  dragonAction: string;

  @Field()
  @Column({ name: 'kaya_action', type: 'text' })
  kayaAction: string;

  @Field()
  @Column({ name: 'homare_action', type: 'text' })
  homareAction: string;

  @Field()
  @Column({ name: 'talk_text_type', type: 'integer' })
  talkTextType: number;

  @Field()
  @Column({ name: 'talk_text', type: 'text' })
  talkText: string;

  @Field()
  @Column({ name: 'voice_list', type: 'text' })
  voiceList: string;

}

