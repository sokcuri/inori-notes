import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'content_release_data' })
export class ContentReleaseData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  system_id: number;

  @Field()
  @Column('integer')
  team_level: number;

  @Field()
  @Column('integer')
  story_id: number;

  @Field()
  @Column('integer')
  quest_id: number;

  @Field()
  @Column('text')
  dialog: string;

}

