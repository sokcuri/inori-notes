import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sekai_top_story_data' })
export class SekaiTopStoryData extends BaseEntity {
  @Field()
  @Column('integer')
  sekai_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  story_id: number;

  @Field()
  @Column('text')
  boss_time_from: string;

  @Field()
  @Column('text')
  boss_time_to: string;

}

