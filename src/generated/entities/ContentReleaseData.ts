import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'content_release_data' })
export class ContentReleaseData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'system_id', type: 'integer' })
  systemId: number;

  @Field()
  @Column({ name: 'team_level', type: 'integer' })
  teamLevel: number;

  @Field()
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field()
  @Column({ name: 'quest_id', type: 'integer' })
  questId: number;

  @Field()
  @Column({ name: 'dialog', type: 'text' })
  dialog: string;

}

