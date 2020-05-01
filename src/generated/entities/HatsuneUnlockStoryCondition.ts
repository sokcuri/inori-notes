import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_unlock_story_condition' })
export class HatsuneUnlockStoryCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field(type => Int)
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => Int)
  @Column({ name: 'condition_entry', type: 'integer' })
  conditionEntry: number;

  @Field(type => Int)
  @Column({ name: 'condition_quest_id', type: 'integer' })
  conditionQuestId: number;

  @Field(type => Int)
  @Column({ name: 'condition_boss_id', type: 'integer' })
  conditionBossId: number;

  @Field(type => Int)
  @Column({ name: 'condition_mission_id', type: 'integer' })
  conditionMissionId: number;

  @Field(type => String)
  @Column({ name: 'condition_time', type: 'text' })
  conditionTime: string;

}

