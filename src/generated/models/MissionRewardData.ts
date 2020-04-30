import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'mission_reward_data' })
export class MissionRewardData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  mission_reward_id: number;

  @Field()
  @Column('integer')
  reward_type: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  reward_id?: number;

  @Field()
  @Column('integer')
  reward_num: number;

}

