import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sekai_top_data' })
export class SekaiTopData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'sekai_id', type: 'integer' })
  sekaiId: number;

  @Field()
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field()
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field()
  @Column({ name: 'top_bg', type: 'integer' })
  topBg: number;

  @Field()
  @Column({ name: 'position_x', type: 'integer' })
  positionX: number;

  @Field()
  @Column({ name: 'position_y', type: 'integer' })
  positionY: number;

  @Field()
  @Column({ name: 'scale_ratio', type: 'real' })
  scaleRatio: number;

  @Field()
  @Column({ name: 'sheet_id', type: 'text' })
  sheetId: string;

  @Field()
  @Column({ name: 'que_id', type: 'text' })
  queId: string;

  @Field()
  @Column({ name: 'boss_mode', type: 'integer' })
  bossMode: number;

  @Field()
  @Column({ name: 'sekai_boss_mode_id', type: 'integer' })
  sekaiBossModeId: number;

  @Field()
  @Column({ name: 'boss_hp_from', type: 'text' })
  bossHpFrom: string;

  @Field()
  @Column({ name: 'boss_hp_to', type: 'text' })
  bossHpTo: string;

  @Field()
  @Column({ name: 'boss_time_from', type: 'text' })
  bossTimeFrom: string;

  @Field()
  @Column({ name: 'boss_time_to', type: 'text' })
  bossTimeTo: string;

  @Field()
  @Column({ name: 'duration', type: 'integer' })
  duration: number;

  @Field()
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

}

