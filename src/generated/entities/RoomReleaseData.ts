import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_release_data' })
export class RoomReleaseData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'system_id', type: 'integer' })
  systemId: number;

  @Field(type => Int)
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field(type => Int)
  @Column({ name: 'pre_story_id', type: 'integer' })
  preStoryId: number;

}

