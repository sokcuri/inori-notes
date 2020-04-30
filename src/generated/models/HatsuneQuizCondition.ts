import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_quiz_condition' })
export class HatsuneQuizCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field()
  @Column({ name: 'quiz_id', type: 'integer' })
  quizId: number;

  @Field()
  @Column({ name: 'condition_quest_id', type: 'integer' })
  conditionQuestId: number;

  @Field()
  @Column({ name: 'condition_quiz_id', type: 'integer' })
  conditionQuizId: number;

  @Field()
  @Column({ name: 'condition_unit_id', type: 'integer' })
  conditionUnitId: number;

  @Field()
  @Column({ name: 'condition_mission_id', type: 'integer' })
  conditionMissionId: number;

  @Field()
  @Column({ name: 'condition_time_from', type: 'integer' })
  conditionTimeFrom: number;

}

