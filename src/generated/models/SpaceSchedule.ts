import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'space_schedule' })
export class SpaceSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'space_id', type: 'integer' })
  spaceId: number;

  @Field()
  @Column({ name: 'teaser_time', type: 'text' })
  teaserTime: string;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'count_start_time', type: 'text' })
  countStartTime: string;

  @Field()
  @Column({ name: 'count_end_time', type: 'text' })
  countEndTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field()
  @Column({ name: 'sid', type: 'integer' })
  sid: number;

  @Field()
  @Column({ name: 'pre_story_id', type: 'integer' })
  preStoryId: number;

}

