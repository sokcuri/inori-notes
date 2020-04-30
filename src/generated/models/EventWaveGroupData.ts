import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_wave_group_data' })
export class EventWaveGroupData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  wave_group_id: number;

  @Field()
  @Column('integer')
  difficulty: number;

  @Field()
  @Column('integer')
  wave: number;

  @Field()
  @Column('integer')
  match_lv_min: number;

  @Field()
  @Column('integer')
  match_lv_max: number;

  @Field()
  @Column('integer')
  enemy_id_1: number;

  @Field()
  @Column('integer')
  enemy_id_2: number;

  @Field()
  @Column('integer')
  enemy_id_3: number;

  @Field()
  @Column('integer')
  enemy_id_4: number;

  @Field()
  @Column('integer')
  enemy_id_5: number;

  @Field()
  @Column('integer')
  drop_gold_1: number;

  @Field()
  @Column('integer')
  reward_group_id_1: number;

  @Field()
  @Column('integer')
  disp_reward_type_1: number;

  @Field()
  @Column('integer')
  disp_reward_id_1: number;

  @Field()
  @Column('integer')
  reward_lot_count_1: number;

  @Field()
  @Column('integer')
  reward_odds_1: number;

  @Field()
  @Column('integer')
  drop_gold_2: number;

  @Field()
  @Column('integer')
  reward_group_id_2: number;

  @Field()
  @Column('integer')
  disp_reward_type_2: number;

  @Field()
  @Column('integer')
  disp_reward_id_2: number;

  @Field()
  @Column('integer')
  reward_lot_count_2: number;

  @Field()
  @Column('integer')
  reward_odds_2: number;

  @Field()
  @Column('integer')
  drop_gold_3: number;

  @Field()
  @Column('integer')
  reward_group_id_3: number;

  @Field()
  @Column('integer')
  disp_reward_type_3: number;

  @Field()
  @Column('integer')
  disp_reward_id_3: number;

  @Field()
  @Column('integer')
  reward_lot_count_3: number;

  @Field()
  @Column('integer')
  reward_odds_3: number;

  @Field()
  @Column('integer')
  drop_gold_4: number;

  @Field()
  @Column('integer')
  reward_group_id_4: number;

  @Field()
  @Column('integer')
  disp_reward_type_4: number;

  @Field()
  @Column('integer')
  disp_reward_id_4: number;

  @Field()
  @Column('integer')
  reward_lot_count_4: number;

  @Field()
  @Column('integer')
  reward_odds_4: number;

  @Field()
  @Column('integer')
  drop_gold_5: number;

  @Field()
  @Column('integer')
  reward_group_id_5: number;

  @Field()
  @Column('integer')
  disp_reward_type_5: number;

  @Field()
  @Column('integer')
  disp_reward_id_5: number;

  @Field()
  @Column('integer')
  reward_lot_count_5: number;

  @Field()
  @Column('integer')
  reward_odds_5: number;

}

