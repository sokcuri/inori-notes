import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_daily_mission_data' })
export class HatsuneDailyMissionData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  daily_mission_id: number;

  @Field()
  @Column('integer')
  disp_group: number;

  @Field()
  @Column('integer')
  category_icon: number;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column('integer')
  mission_condition: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  condition_value_1?: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  condition_value_2?: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  condition_value_3?: number;

  @Field()
  @Column('integer')
  condition_num: number;

  @Field()
  @Column('integer')
  mission_reward_id: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  system_id?: number;

  @Field()
  @Column('integer')
  event_id: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

}

