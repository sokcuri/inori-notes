import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'dear_chara' })
export class DearChara extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'chara_index', type: 'integer' })
  charaIndex: number;

  @Field(type => String)
  @Column({ name: 'chara_name', type: 'text' })
  charaName: string;

  @Field(type => Int)
  @Column({ name: 'max_dear_point', type: 'integer' })
  maxDearPoint: number;

  @Field(type => Int)
  @Column({ name: 'reference_type', type: 'integer' })
  referenceType: number;

  @Field(type => Int)
  @Column({ name: 'reference_id', type: 'integer' })
  referenceId: number;

  @Field(type => Int)
  @Column({ name: 'episode_unlock_offset_x', type: 'integer' })
  episodeUnlockOffsetX: number;

  @Field(type => Int)
  @Column({ name: 'episode_unlock_offset_y', type: 'integer' })
  episodeUnlockOffsetY: number;

  @Field(type => Int)
  @Column({ name: 'dear_point_up_offset_x', type: 'integer' })
  dearPointUpOffsetX: number;

  @Field(type => Int)
  @Column({ name: 'dear_point_up_offset_y', type: 'integer' })
  dearPointUpOffsetY: number;

}

