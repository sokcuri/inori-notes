import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sekai_unlock_story_condition' })
export class SekaiUnlockStoryCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field(type => Int)
  @Column({ name: 'sekai_id', type: 'integer' })
  sekaiId: number;

  @Field(type => Int)
  @Column({ name: 'condition_entry', type: 'integer' })
  conditionEntry: number;

  @Field(type => Int)
  @Column({ name: 'condition_fix_reward_id', type: 'integer' })
  conditionFixRewardId: number;

  @Field(type => String)
  @Column({ name: 'condition_time', type: 'text' })
  conditionTime: string;

}

