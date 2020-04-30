import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_relay_data' })
export class HatsuneRelayData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'relay_story_id', type: 'integer' })
  relayStoryId: number;

  @Field()
  @Column({ name: 'is_enable_read', type: 'integer' })
  isEnableRead: number;

  @Field()
  @Column({ name: 'condition_quest_id', type: 'integer' })
  conditionQuestId: number;

  @Field()
  @Column({ name: 'story_seq', type: 'integer' })
  storySeq: number;

  @Field()
  @Column({ name: 'sub_title', type: 'text' })
  subTitle: string;

}

