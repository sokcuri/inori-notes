import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_data' })
export class UnitData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => String)
  @Column({ name: 'unit_name', type: 'text' })
  unitName: string;

  @Field(type => String)
  @Column({ name: 'kana', type: 'text' })
  kana: string;

  @Field(type => Int)
  @Column({ name: 'prefab_id', type: 'integer' })
  prefabId: number;

  @Field(type => Int)
  @Column({ name: 'is_limited', type: 'integer' })
  isLimited: number;

  @Field(type => Int)
  @Column({ name: 'rarity', type: 'integer' })
  rarity: number;

  @Field(type => Int)
  @Column({ name: 'motion_type', type: 'integer' })
  motionType: number;

  @Field(type => Int)
  @Column({ name: 'se_type', type: 'integer' })
  seType: number;

  @Field(type => Int)
  @Column({ name: 'move_speed', type: 'integer' })
  moveSpeed: number;

  @Field(type => Int)
  @Column({ name: 'search_area_width', type: 'integer' })
  searchAreaWidth: number;

  @Field(type => Int)
  @Column({ name: 'atk_type', type: 'integer' })
  atkType: number;

  @Field(type => Float)
  @Column({ name: 'normal_atk_cast_time', type: 'real' })
  normalAtkCastTime: number;

  @Field(type => Int)
  @Column({ name: 'cutin_1', type: 'integer' })
  cutin1: number;

  @Field(type => Int)
  @Column({ name: 'cutin_2', type: 'integer' })
  cutin2: number;

  @Field(type => Int)
  @Column({ name: 'cutin1_star6', type: 'integer' })
  cutin1Star6: number;

  @Field(type => Int)
  @Column({ name: 'cutin2_star6', type: 'integer' })
  cutin2Star6: number;

  @Field(type => Int)
  @Column({ name: 'guild_id', type: 'integer' })
  guildId: number;

  @Field(type => Int)
  @Column({ name: 'exskill_display', type: 'integer' })
  exskillDisplay: number;

  @Field(type => String)
  @Column({ name: 'comment', type: 'text' })
  comment: string;

  @Field(type => Int)
  @Column({ name: 'only_disp_owned', type: 'integer' })
  onlyDispOwned: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field(type => [Int])
  get cutin() {
    return [this.cutin1, this.cutin2];
  }

}

