import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'story_data' })
export class StoryData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'story_group_id', type: 'integer' })
  storyGroupId: number;

  @Field(type => Int)
  @Column({ name: 'story_type', type: 'integer' })
  storyType: number;

  @Field(type => Int)
  @Column({ name: 'value', type: 'integer' })
  value: number;

  @Field(type => String)
  @Column({ name: 'title', type: 'text' })
  title: string;

  @Field(type => Int)
  @Column({ name: 'thumbnail_id', type: 'integer' })
  thumbnailId: number;

  @Field(type => Int)
  @Column({ name: 'disp_order', type: 'integer' })
  dispOrder: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field(type => Int)
  @Column({ name: 'order', type: 'integer' })
  order: number;

  @Field(type => Int)
  @Column({ name: 'condition_free_flag', type: 'integer' })
  conditionFreeFlag: number;

}

