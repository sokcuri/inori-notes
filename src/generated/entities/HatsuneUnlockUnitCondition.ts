import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_unlock_unit_condition' })
export class HatsuneUnlockUnitCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => Int)
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => Int)
  @Column({ name: 'condition_mission_id', type: 'integer' })
  conditionMissionId: number;

  @Field(type => String)
  @Column({ name: 'top_description', type: 'text' })
  topDescription: string;

  @Field(type => String)
  @Column({ name: 'description_1', type: 'text' })
  description1: string;

  @Field(type => String)
  @Column({ name: 'description_2', type: 'text' })
  description2: string;

}

