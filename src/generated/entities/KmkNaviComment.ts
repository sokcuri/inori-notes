import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'kmk_navi_comment' })
export class KmkNaviComment extends BaseEntity {
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
  @Column({ name: 'face_type', type: 'integer' })
  faceType: number;

  @Field(type => String)
  @Column({ name: 'character_name', type: 'text' })
  characterName: string;

  @Field(type => String, { nullable: true })
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

  @Field(type => Float)
  @Column({ name: 'pos_x', type: 'real' })
  posX: number;

  @Field(type => Float)
  @Column({ name: 'pos_y', type: 'real' })
  posY: number;

  @Field(type => Float)
  @Column({ name: 'change_face_time', type: 'real' })
  changeFaceTime: number;

  @Field(type => Int)
  @Column({ name: 'change_face_type', type: 'integer' })
  changeFaceType: number;

  @Field(type => Int)
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

}

