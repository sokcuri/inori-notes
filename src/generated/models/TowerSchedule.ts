import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tower_schedule' })
export class TowerSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  tower_schedule_id: number;

  @Field()
  @Column('integer')
  max_tower_area_id: number;

  @Field()
  @Column('integer')
  opening_story_id: number;

  @Field()
  @Column('text')
  count_start_time: string;

  @Field()
  @Column('text')
  recovery_disable_time: string;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

}

