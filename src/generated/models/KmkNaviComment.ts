import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'kmk_navi_comment' })
export class KmkNaviComment extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  comment_id: number;

  @Field()
  @Column('integer')
  where_type: number;

  @Field()
  @Column('integer')
  character_id: number;

  @Field()
  @Column('integer')
  face_type: number;

  @Field()
  @Column('text')
  character_name: string;

  @Field()
  @Column({ nullable: true, type: 'text' })
  description?: string;

  @Field()
  @Column('integer')
  voice_id: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

  @Field()
  @Column('real')
  pos_x: number;

  @Field()
  @Column('real')
  pos_y: number;

  @Field()
  @Column('real')
  change_face_time: number;

  @Field()
  @Column('integer')
  change_face_type: number;

  @Field()
  @Column('integer')
  event_id: number;

}

