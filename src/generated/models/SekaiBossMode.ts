import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sekai_boss_mode' })
export class SekaiBossMode extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  sekai_boss_mode_id: number;

  @Field()
  @Column('integer')
  sekai_enemy_id: number;

  @Field()
  @Column('text')
  sekai_enemy_level: string;

  @Field()
  @Column('integer')
  quest_detail_bg_id: number;

  @Field()
  @Column('integer')
  quest_detail_bg_position: number;

  @Field()
  @Column('real')
  quest_detail_monster_size: number;

  @Field()
  @Column('integer')
  quest_detail_monster_height: number;

  @Field()
  @Column('integer')
  limit_time: number;

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
  reward_gold_coefficient: number;

  @Field()
  @Column('integer')
  limited_mana: number;

  @Field()
  @Column('integer')
  score_coefficient: number;

}

