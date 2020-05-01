import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sd_navi_comment' })
export class SdNaviComment extends BaseEntity {
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
  @Column({ name: 'motion_type', type: 'integer' })
  motionType: number;

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

}

