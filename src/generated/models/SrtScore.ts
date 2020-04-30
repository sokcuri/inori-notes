import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'srt_score' })
export class SrtScore extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  difficulty_level: number;

  @Field()
  @Column('integer')
  coefficient_read_type_1: number;

  @Field()
  @Column('integer')
  coefficient_read_type_2: number;

  @Field()
  @Column('integer')
  coefficient_read_type_3: number;

  @Field()
  @Column('integer')
  coefficient_count_priconne_panel: number;

  @Field()
  @Column('integer')
  coefficient_fever: number;

  @Field()
  @Column('integer')
  constant_turn_bonus: number;

  @Field()
  @Column('integer')
  coefficient_turn_bonus: number;

  @Field()
  @Column('integer')
  coefficient_avg_answer_time: number;

  @Field()
  @Column('integer')
  constant_wrong_num: number;

  @Field()
  @Column('integer')
  coefficient_wrong_num: number;

}

