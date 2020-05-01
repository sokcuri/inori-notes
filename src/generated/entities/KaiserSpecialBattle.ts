import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'kaiser_special_battle' })
export class KaiserSpecialBattle extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'mode', type: 'integer' })
  mode: number;

  @Field()
  @Column({ name: 'recommended_level', type: 'integer' })
  recommendedLevel: number;

  @Field()
  @Column({ name: 'purpose_type', type: 'integer' })
  purposeType: number;

  @Field()
  @Column({ name: 'purpose_count', type: 'integer' })
  purposeCount: number;

  @Field()
  @Column({ name: 'trigger_hp', type: 'integer' })
  triggerHp: number;

  @Field()
  @Column({ name: 'story_id_mode_start', type: 'integer' })
  storyIdModeStart: number;

  @Field()
  @Column({ name: 'story_id_mode_end', type: 'integer' })
  storyIdModeEnd: number;

  @Field()
  @Column({ name: 'wave_group_id', type: 'integer' })
  waveGroupId: number;

  @Field()
  @Column({ name: 'unnecessary_defeat_chara', type: 'integer' })
  unnecessaryDefeatChara: number;

  @Field()
  @Column({ name: 'story_start_second', type: 'real' })
  storyStartSecond: number;

  @Field()
  @Column({ name: 'action_start_second', type: 'real' })
  actionStartSecond: number;

  @Field()
  @Column({ name: 'hp_gauge_color_flag', type: 'integer' })
  hpGaugeColorFlag: number;

  @Field()
  @Column({ name: 'start_idle_trigger', type: 'integer' })
  startIdleTrigger: number;

  @Field()
  @Column({ name: 'appear_time', type: 'real' })
  appearTime: number;

}

