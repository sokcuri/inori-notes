import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sekai_top_story_data' })
export class SekaiTopStoryData extends BaseEntity {
  @Field()
  @Column({ name: 'sekai_id', type: 'integer' })
  sekaiId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field()
  @Column({ name: 'boss_time_from', type: 'text' })
  bossTimeFrom: string;

  @Field()
  @Column({ name: 'boss_time_to', type: 'text' })
  bossTimeTo: string;

}

