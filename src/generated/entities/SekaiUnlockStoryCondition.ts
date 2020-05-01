import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sekai_unlock_story_condition' })
export class SekaiUnlockStoryCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field()
  @Column({ name: 'sekai_id', type: 'integer' })
  sekaiId: number;

  @Field()
  @Column({ name: 'condition_entry', type: 'integer' })
  conditionEntry: number;

  @Field()
  @Column({ name: 'condition_fix_reward_id', type: 'integer' })
  conditionFixRewardId: number;

  @Field()
  @Column({ name: 'condition_time', type: 'text' })
  conditionTime: string;

}

