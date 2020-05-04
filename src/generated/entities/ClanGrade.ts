import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_grade' })
export class ClanGrade extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'clan_grade_id', type: 'integer' })
  clanGradeId: number;

  @Field(type => Int)
  @Column({ name: 'rank_from', type: 'integer' })
  rankFrom: number;

  @Field(type => Int)
  @Column({ name: 'rank_to', type: 'integer' })
  rankTo: number;

}

