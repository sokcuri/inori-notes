import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'wave_group_data' })
export class WaveGroupData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  wave_group_id: number;

  @Field()
  @Column('integer')
  odds: number;

  @Field()
  @Column('integer')
  enemy_id_1: number;

  @Field()
  @Column('integer')
  drop_gold_1: number;

  @Field()
  @Column('integer')
  drop_reward_id_1: number;

  @Field()
  @Column('integer')
  enemy_id_2: number;

  @Field()
  @Column('integer')
  drop_gold_2: number;

  @Field()
  @Column('integer')
  drop_reward_id_2: number;

  @Field()
  @Column('integer')
  enemy_id_3: number;

  @Field()
  @Column('integer')
  drop_gold_3: number;

  @Field()
  @Column('integer')
  drop_reward_id_3: number;

  @Field()
  @Column('integer')
  enemy_id_4: number;

  @Field()
  @Column('integer')
  drop_gold_4: number;

  @Field()
  @Column('integer')
  drop_reward_id_4: number;

  @Field()
  @Column('integer')
  enemy_id_5: number;

  @Field()
  @Column('integer')
  drop_gold_5: number;

  @Field()
  @Column('integer')
  drop_reward_id_5: number;

}

