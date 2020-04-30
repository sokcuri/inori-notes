import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sd_navi_comment' })
export class SdNaviComment extends BaseEntity {
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
  motion_type: number;

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

}

