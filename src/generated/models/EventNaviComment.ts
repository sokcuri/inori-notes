import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_navi_comment' })
export class EventNaviComment extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'comment_id', type: 'integer' })
  commentId: number;

  @Field()
  @Column({ name: 'where_type', type: 'integer' })
  whereType: number;

  @Field()
  @Column({ name: 'character_id', type: 'integer' })
  characterId: number;

  @Field()
  @Column({ name: 'face_type', type: 'integer' })
  faceType: number;

  @Field()
  @Column({ name: 'character_name', type: 'text' })
  characterName: string;

  @Field()
  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @Field()
  @Column({ name: 'voice_id', type: 'integer' })
  voiceId: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field()
  @Column({ name: 'pos_x', type: 'real' })
  posX: number;

  @Field()
  @Column({ name: 'pos_y', type: 'real' })
  posY: number;

  @Field()
  @Column({ name: 'change_face_time', type: 'real' })
  changeFaceTime: number;

  @Field()
  @Column({ name: 'change_face_type', type: 'integer' })
  changeFaceType: number;

  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

}

