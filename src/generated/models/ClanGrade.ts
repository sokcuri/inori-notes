import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_grade' })
export class ClanGrade extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  clan_grade_id: number;

  @Field()
  @Column('integer')
  rank_from: number;

  @Field()
  @Column('integer')
  rank_to: number;

}

