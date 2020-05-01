import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sd_navi_comment' })
export class SdNaviComment extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'comment_id', type: 'integer' })
  commentId: number;

  @Field(type => Int)
  @Column({ name: 'where_type', type: 'integer' })
  whereType: number;

  @Field(type => Int)
  @Column({ name: 'character_id', type: 'integer' })
  characterId: number;

  @Field(type => Int)
  @Column({ name: 'motion_type', type: 'integer' })
  motionType: number;

  @Field(type => String)
  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @Field(type => Int)
  @Column({ name: 'voice_id', type: 'integer' })
  voiceId: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

