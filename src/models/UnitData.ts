import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class UnitData extends BaseEntity {
  @PrimaryColumn('integer')
  unit_id: number;

  @Column('text')
  unit_name: string;

  @Column('text')
  kana: string;

  @Column('integer')
  prefab_id: number;

  @Column('integer')
  is_limited: number;

  @Column('integer')
  rarity: number;

  @Column('integer')
  motion_type: number;

  @Column('integer')
  se_type: number;

  @Column('integer')
  move_speed: number;

  @Column('integer')
  search_area_width: number;

  @Column('integer')
  atk_type: number;

  @Column('real')
  normal_atk_cast_time: number;

  @Column('integer')
  cutin_1: number;

  @Column('integer')
  cutin_2: number;

  @Column('integer')
  cutin1_star6: number;

  @Column('integer')
  cutin2_star6: number;

  @Column('integer')
  guild_id: number;

  @Column('integer')
  exskill_display: number;

  @Column('text')
  comment: string;

  @Column('integer')
  only_disp_owned: number;

  @Column('text')
  start_time: string;

  @Column('text')
  end_time: string;
}

