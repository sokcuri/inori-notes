import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'kaiser_special_battle' })
export class KaiserSpecialBattle extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'mode', type: 'integer' })
  mode: number;

  @Field(type => Int)
  @Column({ name: 'recommended_level', type: 'integer' })
  recommendedLevel: number;

  @Field(type => Int)
  @Column({ name: 'purpose_type', type: 'integer' })
  purposeType: number;

  @Field(type => Int)
  @Column({ name: 'purpose_count', type: 'integer' })
  purposeCount: number;

  @Field(type => Int)
  @Column({ name: 'trigger_hp', type: 'integer' })
  triggerHp: number;

  @Field(type => Int)
  @Column({ name: 'story_id_mode_start', type: 'integer' })
  storyIdModeStart: number;

  @Field(type => Int)
  @Column({ name: 'story_id_mode_end', type: 'integer' })
  storyIdModeEnd: number;

  @Field(type => Int)
  @Column({ name: 'wave_group_id', type: 'integer' })
  waveGroupId: number;

  @Field(type => Int)
  @Column({ name: 'unnecessary_defeat_chara', type: 'integer' })
  unnecessaryDefeatChara: number;

  @Field(type => Float)
  @Column({ name: 'story_start_second', type: 'real' })
  storyStartSecond: number;

  @Field(type => Float)
  @Column({ name: 'action_start_second', type: 'real' })
  actionStartSecond: number;

  @Field(type => Int)
  @Column({ name: 'hp_gauge_color_flag', type: 'integer' })
  hpGaugeColorFlag: number;

  @Field(type => Int)
  @Column({ name: 'start_idle_trigger', type: 'integer' })
  startIdleTrigger: number;

  @Field(type => Float)
  @Column({ name: 'appear_time', type: 'real' })
  appearTime: number;

}
