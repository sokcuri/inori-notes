import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'nyx_phase_data' })
export class NyxPhaseData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  story_phase: number;

  @Field()
  @Column('text')
  phase_title: string;

  @Field()
  @Column('integer')
  condition_quest_id: number;

  @Field()
  @Column('integer')
  condition_quest_boss: number;

}

