import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_unlock_story_condition' })
export class HatsuneUnlockStoryCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field()
  @Column({ name: 'condition_entry', type: 'integer' })
  conditionEntry: number;

  @Field()
  @Column({ name: 'condition_quest_id', type: 'integer' })
  conditionQuestId: number;

  @Field()
  @Column({ name: 'condition_boss_id', type: 'integer' })
  conditionBossId: number;

  @Field()
  @Column({ name: 'condition_mission_id', type: 'integer' })
  conditionMissionId: number;

  @Field()
  @Column({ name: 'condition_time', type: 'text' })
  conditionTime: string;

}

