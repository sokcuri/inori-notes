import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'dear_story_data' })
export class DearStoryData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'story_group_id', type: 'integer' })
  storyGroupId: number;

  @Field()
  @Column({ name: 'story_type', type: 'integer' })
  storyType: number;

  @Field()
  @Column({ name: 'value', type: 'integer' })
  value: number;

  @Field()
  @Column({ name: 'title', type: 'text' })
  title: string;

  @Field()
  @Column({ name: 'thumbnail_id', type: 'integer' })
  thumbnailId: number;

  @Field()
  @Column({ name: 'disp_order', type: 'integer' })
  dispOrder: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

