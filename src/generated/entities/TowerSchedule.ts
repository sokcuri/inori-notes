import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tower_schedule' })
export class TowerSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'tower_schedule_id', type: 'integer' })
  towerScheduleId: number;

  @Field(type => Int)
  @Column({ name: 'max_tower_area_id', type: 'integer' })
  maxTowerAreaId: number;

  @Field(type => Int)
  @Column({ name: 'opening_story_id', type: 'integer' })
  openingStoryId: number;

  @Field(type => String)
  @Column({ name: 'count_start_time', type: 'text' })
  countStartTime: string;

  @Field(type => String)
  @Column({ name: 'recovery_disable_time', type: 'text' })
  recoveryDisableTime: string;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

