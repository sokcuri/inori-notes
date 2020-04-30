import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_data' })
export class UnitData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field()
  @Column({ name: 'unit_name', type: 'text' })
  unitName: string;

  @Field()
  @Column({ name: 'kana', type: 'text' })
  kana: string;

  @Field()
  @Column({ name: 'prefab_id', type: 'integer' })
  prefabId: number;

  @Field()
  @Column({ name: 'is_limited', type: 'integer' })
  isLimited: number;

  @Field()
  @Column({ name: 'rarity', type: 'integer' })
  rarity: number;

  @Field()
  @Column({ name: 'motion_type', type: 'integer' })
  motionType: number;

  @Field()
  @Column({ name: 'se_type', type: 'integer' })
  seType: number;

  @Field()
  @Column({ name: 'move_speed', type: 'integer' })
  moveSpeed: number;

  @Field()
  @Column({ name: 'search_area_width', type: 'integer' })
  searchAreaWidth: number;

  @Field()
  @Column({ name: 'atk_type', type: 'integer' })
  atkType: number;

  @Field()
  @Column({ name: 'normal_atk_cast_time', type: 'real' })
  normalAtkCastTime: number;

  @Field()
  @Column({ name: 'cutin_1', type: 'integer' })
  cutin1: number;

  @Field()
  @Column({ name: 'cutin_2', type: 'integer' })
  cutin2: number;

  @Field()
  @Column({ name: 'cutin1_star6', type: 'integer' })
  cutin1Star6: number;

  @Field()
  @Column({ name: 'cutin2_star6', type: 'integer' })
  cutin2Star6: number;

  @Field()
  @Column({ name: 'guild_id', type: 'integer' })
  guildId: number;

  @Field()
  @Column({ name: 'exskill_display', type: 'integer' })
  exskillDisplay: number;

  @Field()
  @Column({ name: 'comment', type: 'text' })
  comment: string;

  @Field()
  @Column({ name: 'only_disp_owned', type: 'integer' })
  onlyDispOwned: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

