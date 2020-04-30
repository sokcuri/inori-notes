import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_quiz' })
export class HatsuneQuiz extends BaseEntity {
  @Field()
  @Column('integer')
  event_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  quiz_id: number;

  @Field()
  @Column('text')
  question_title: string;

  @Field()
  @Column('text')
  question: string;

  @Field()
  @Column('text')
  choice_1: string;

  @Field()
  @Column('text')
  choice_2: string;

  @Field()
  @Column('text')
  choice_3: string;

  @Field()
  @Column('text')
  choice_4: string;

  @Field()
  @Column('text')
  choice_5: string;

  @Field()
  @Column('text')
  choice_6: string;

  @Field()
  @Column('integer')
  answer: number;

  @Field()
  @Column('text')
  hint: string;

  @Field()
  @Column('integer')
  resource_id: number;

  @Field()
  @Column('integer')
  release_quest_id: number;

  @Field()
  @Column('integer')
  quiz_position_x: number;

  @Field()
  @Column('integer')
  quiz_position_y: number;

  @Field()
  @Column('integer')
  quiz_icon_id: number;

  @Field()
  @Column('text')
  quiz_point_name: string;

  @Field()
  @Column('integer')
  adv_id_quiz_start: number;

  @Field()
  @Column('integer')
  adv_id_quiz_end: number;

}

