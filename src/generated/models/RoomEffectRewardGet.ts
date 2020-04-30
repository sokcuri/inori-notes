import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_effect_reward_get' })
export class RoomEffectRewardGet extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  level: number;

  @Field()
  @Column('integer')
  reward_type: number;

  @Field()
  @Column('integer')
  reward_id: number;

  @Field()
  @Column('integer')
  max_count: number;

  @Field()
  @Column('integer')
  inc_step: number;

  @Field()
  @Column('integer')
  interval_second: number;

}

