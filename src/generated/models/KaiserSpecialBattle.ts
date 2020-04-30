import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'kaiser_special_battle' })
export class KaiserSpecialBattle extends BaseEntity {
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

}

