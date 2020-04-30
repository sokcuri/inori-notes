import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'uek_mission' })
export class UekMission extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  mission_id: number;

  @Field()
  @Column('integer')
  area: number;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column('integer')
  mission_condition: number;

  @Field()
  @Column('integer')
  condition_value_1: number;

  @Field()
  @Column('integer')
  condition_value_2: number;

  @Field()
  @Column('integer')
  condition_value_3: number;

  @Field()
  @Column('integer')
  condition_value_4: number;

  @Field()
  @Column('integer')
  condition_value_5: number;

  @Field()
  @Column('integer')
  condition_num: number;

  @Field()
  @Column('integer')
  reward_type_1: number;

  @Field()
  @Column('integer')
  reward_id_1: number;

  @Field()
  @Column('integer')
  reward_num_1: number;

  @Field()
  @Column('integer')
  reward_type_2: number;

  @Field()
  @Column('integer')
  reward_id_2: number;

  @Field()
  @Column('integer')
  reward_num_2: number;

  @Field()
  @Column('integer')
  reward_type_3: number;

  @Field()
  @Column('integer')
  reward_id_3: number;

  @Field()
  @Column('integer')
  reward_num_3: number;

  @Field()
  @Column('integer')
  reward_type_4: number;

  @Field()
  @Column('integer')
  reward_id_4: number;

  @Field()
  @Column('integer')
  reward_num_4: number;

  @Field()
  @Column('integer')
  reward_type_5: number;

  @Field()
  @Column('integer')
  reward_id_5: number;

  @Field()
  @Column('integer')
  reward_num_5: number;

  @Field()
  @Column('integer')
  system_id: number;

  @Field()
  @Column('integer')
  event_id: number;

}

