import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'space_battle_data' })
export class SpaceBattleData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  space_battle_id: number;

  @Field()
  @Column('integer')
  space_enemy_id: number;

  @Field()
  @Column('integer')
  limit_time: number;

  @Field()
  @Column('integer')
  clear_reward_group: number;

  @Field()
  @Column('integer')
  background: number;

  @Field()
  @Column('text')
  sheet_id: string;

  @Field()
  @Column('text')
  que_id: string;

  @Field()
  @Column('integer')
  result_boss_position_y: number;

  @Field()
  @Column('integer')
  quest_detail_bg_id: number;

  @Field()
  @Column('integer')
  quest_detail_bg_position: number;

  @Field()
  @Column('text')
  quest_name: string;

}

