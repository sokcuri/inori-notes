import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'skip_boss_data' })
export class SkipBossData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'boss_id', type: 'integer' })
  bossId: number;

  @Field(type => Int)
  @Column({ name: 'skip_motion_id', type: 'integer' })
  skipMotionId: number;

  @Field(type => Int)
  @Column({ name: 'skip_bg_id', type: 'integer' })
  skipBgId: number;

  @Field(type => Int)
  @Column({ name: 'skip_position_x', type: 'integer' })
  skipPositionX: number;

  @Field(type => Int)
  @Column({ name: 'skip_position_y', type: 'integer' })
  skipPositionY: number;

  @Field(type => Float)
  @Column({ name: 'skip_scale_x', type: 'real' })
  skipScaleX: number;

  @Field(type => Float)
  @Column({ name: 'skip_scale_y', type: 'real' })
  skipScaleY: number;

}

