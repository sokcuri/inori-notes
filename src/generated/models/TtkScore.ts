import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ttk_score' })
export class TtkScore extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  difficulty_level: number;

  @Field()
  @Column('integer')
  coefficient_difficulty: number;

  @Field()
  @Column('integer')
  coefficient_coin_score: number;

  @Field()
  @Column('integer')
  life: number;

  @Field()
  @Column('integer')
  coefficient_wrong_num: number;

}

