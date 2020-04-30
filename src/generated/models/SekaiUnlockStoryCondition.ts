import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sekai_unlock_story_condition' })
export class SekaiUnlockStoryCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  story_id: number;

  @Field()
  @Column('integer')
  sekai_id: number;

  @Field()
  @Column('integer')
  condition_entry: number;

  @Field()
  @Column('integer')
  condition_fix_reward_id: number;

  @Field()
  @Column('text')
  condition_time: string;

}

