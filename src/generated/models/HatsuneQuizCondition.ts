import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_quiz_condition' })
export class HatsuneQuizCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  event_id: number;

  @Field()
  @Column('integer')
  quiz_id: number;

  @Field()
  @Column('integer')
  condition_quest_id: number;

  @Field()
  @Column('integer')
  condition_quiz_id: number;

  @Field()
  @Column('integer')
  condition_unit_id: number;

  @Field()
  @Column('integer')
  condition_mission_id: number;

  @Field()
  @Column('integer')
  condition_time_from: number;

}

