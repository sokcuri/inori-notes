import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'nyx_drama_data' })
export class NyxDramaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  drama_id: number;

  @Field()
  @Column('integer')
  story_phase: number;

  @Field()
  @Column('text')
  title: string;

  @Field()
  @Column('text')
  sub_title: string;

  @Field()
  @Column('integer')
  condition_unlocked_story_id: number;

  @Field()
  @Column('integer')
  condition_locked_story_id: number;

}

