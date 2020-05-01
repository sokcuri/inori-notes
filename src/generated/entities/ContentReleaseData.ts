import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'content_release_data' })
export class ContentReleaseData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'system_id', type: 'integer' })
  systemId: number;

  @Field(type => Int)
  @Column({ name: 'team_level', type: 'integer' })
  teamLevel: number;

  @Field(type => Int)
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field(type => Int)
  @Column({ name: 'quest_id', type: 'integer' })
  questId: number;

  @Field(type => String)
  @Column({ name: 'dialog', type: 'text' })
  dialog: string;

}

