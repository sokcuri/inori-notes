import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'enemy_reward_data' })
export class EnemyRewardData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  drop_reward_id: number;

  @Field()
  @Column('integer')
  drop_count: number;

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
  odds_1: number;

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
  odds_2: number;

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
  odds_3: number;

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
  odds_4: number;

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
  odds_5: number;

}

