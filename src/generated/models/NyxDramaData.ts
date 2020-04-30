import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'nyx_drama_data' })
export class NyxDramaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'drama_id', type: 'integer' })
  dramaId: number;

  @Field()
  @Column({ name: 'story_phase', type: 'integer' })
  storyPhase: number;

  @Field()
  @Column({ name: 'title', type: 'text' })
  title: string;

  @Field()
  @Column({ name: 'sub_title', type: 'text' })
  subTitle: string;

  @Field()
  @Column({ name: 'condition_unlocked_story_id', type: 'integer' })
  conditionUnlockedStoryId: number;

  @Field()
  @Column({ name: 'condition_locked_story_id', type: 'integer' })
  conditionLockedStoryId: number;

}

