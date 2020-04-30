import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'uek_boss' })
export class UekBoss extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  area: number;

  @Field()
  @Column('text')
  quest_name: string;

  @Field()
  @Column('integer')
  limit_time: number;

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
  background: number;

  @Field()
  @Column('integer')
  enemy_id: number;

  @Field()
  @Column('text')
  bgm_sheet_id: string;

  @Field()
  @Column('text')
  bgm_que_id: string;

  @Field()
  @Column('integer')
  detail_bg_id: number;

  @Field()
  @Column('integer')
  detail_bg_position: number;

  @Field()
  @Column('real')
  detail_boss_bg_size: number;

  @Field()
  @Column('integer')
  detail_boss_bg_height: number;

  @Field()
  @Column('integer')
  result_boss_position_y: number;

  @Field()
  @Column('integer')
  result_movie: number;

}

