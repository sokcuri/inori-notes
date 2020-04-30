import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_enemy_reward_group' })
export class EventEnemyRewardGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  reward_group_id: number;

  @Field()
  @Column('integer')
  reward_type: number;

  @Field()
  @Column('integer')
  reward_id: number;

  @Field()
  @Column('integer')
  reward_num: number;

  @Field()
  @Column('integer')
  odds: number;

}

