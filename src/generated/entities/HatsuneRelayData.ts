import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_relay_data' })
export class HatsuneRelayData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'relay_story_id', type: 'integer' })
  relayStoryId: number;

  @Field(type => Int)
  @Column({ name: 'is_enable_read', type: 'integer' })
  isEnableRead: number;

  @Field(type => Int)
  @Column({ name: 'condition_quest_id', type: 'integer' })
  conditionQuestId: number;

  @Field(type => Int)
  @Column({ name: 'story_seq', type: 'integer' })
  storySeq: number;

  @Field(type => String)
  @Column({ name: 'sub_title', type: 'text' })
  subTitle: string;

}

