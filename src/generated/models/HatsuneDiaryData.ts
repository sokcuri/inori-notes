import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_diary_data' })
export class HatsuneDiaryData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  diary_id: number;

  @Field()
  @Column('integer')
  contents_type: number;

  @Field()
  @Column('integer')
  diary_date: number;

  @Field()
  @Column('text')
  sub_title: string;

  @Field()
  @Column('text')
  forced_release_time: string;

  @Field()
  @Column('text')
  condition_time: string;

  @Field()
  @Column('integer')
  condition_story_id: number;

  @Field()
  @Column('integer')
  condition_boss_count: number;

}

