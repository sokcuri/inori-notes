import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sekai_top_data' })
export class SekaiTopData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'sekai_id', type: 'integer' })
  sekaiId: number;

  @Field(type => String)
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field(type => String)
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field(type => Int)
  @Column({ name: 'top_bg', type: 'integer' })
  topBg: number;

  @Field(type => Int)
  @Column({ name: 'position_x', type: 'integer' })
  positionX: number;

  @Field(type => Int)
  @Column({ name: 'position_y', type: 'integer' })
  positionY: number;

  @Field(type => Float)
  @Column({ name: 'scale_ratio', type: 'real' })
  scaleRatio: number;

  @Field(type => String)
  @Column({ name: 'sheet_id', type: 'text' })
  sheetId: string;

  @Field(type => String)
  @Column({ name: 'que_id', type: 'text' })
  queId: string;

  @Field(type => Int)
  @Column({ name: 'boss_mode', type: 'integer' })
  bossMode: number;

  @Field(type => Int)
  @Column({ name: 'sekai_boss_mode_id', type: 'integer' })
  sekaiBossModeId: number;

  @Field(type => String)
  @Column({ name: 'boss_hp_from', type: 'text' })
  bossHpFrom: string;

  @Field(type => String)
  @Column({ name: 'boss_hp_to', type: 'text' })
  bossHpTo: string;

  @Field(type => String)
  @Column({ name: 'boss_time_from', type: 'text' })
  bossTimeFrom: string;

  @Field(type => String)
  @Column({ name: 'boss_time_to', type: 'text' })
  bossTimeTo: string;

  @Field(type => Int)
  @Column({ name: 'duration', type: 'integer' })
  duration: number;

  @Field(type => Int)
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

}

