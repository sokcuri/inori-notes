import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_data' })
export class UnitData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  unit_id: number;

  @Field()
  @Column('text')
  unit_name: string;

  @Field()
  @Column('text')
  kana: string;

  @Field()
  @Column('integer')
  prefab_id: number;

  @Field()
  @Column('integer')
  is_limited: number;

  @Field()
  @Column('integer')
  rarity: number;

  @Field()
  @Column('integer')
  motion_type: number;

  @Field()
  @Column('integer')
  se_type: number;

  @Field()
  @Column('integer')
  move_speed: number;

  @Field()
  @Column('integer')
  search_area_width: number;

  @Field()
  @Column('integer')
  atk_type: number;

  @Field()
  @Column('real')
  normal_atk_cast_time: number;

  @Field()
  @Column('integer')
  cutin_1: number;

  @Field()
  @Column('integer')
  cutin_2: number;

  @Field()
  @Column('integer')
  cutin1_star6: number;

  @Field()
  @Column('integer')
  cutin2_star6: number;

  @Field()
  @Column('integer')
  guild_id: number;

  @Field()
  @Column('integer')
  exskill_display: number;

  @Field()
  @Column('text')
  comment: string;

  @Field()
  @Column('integer')
  only_disp_owned: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

}

