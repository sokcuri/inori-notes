import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_special_battle' })
export class HatsuneSpecialBattle extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  event_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  mode: number;

  @Field()
  @Column('integer')
  recommended_level: number;

  @Field()
  @Column('integer')
  purpose_type: number;

  @Field()
  @Column('integer')
  purpose_count: number;

  @Field()
  @Column('integer')
  trigger_hp: number;

  @Field()
  @Column('integer')
  story_id_mode_start: number;

  @Field()
  @Column('integer')
  story_id_mode_end: number;

  @Field()
  @Column('integer')
  wave_group_id: number;

  @Field()
  @Column('integer')
  unnecessary_defeat_chara: number;

  @Field()
  @Column('real')
  story_start_second: number;

  @Field()
  @Column('real')
  action_start_second: number;

  @Field()
  @Column('integer')
  hp_gauge_color_flag: number;

  @Field()
  @Column('integer')
  start_idle_trigger: number;

  @Field()
  @Column('real')
  appear_time: number;

  @Field()
  @Column('real')
  detail_boss_bg_size: number;

  @Field()
  @Column('real')
  detail_boss_bg_height: number;

  @Field()
  @Column('text')
  detail_boss_motion: string;

}

