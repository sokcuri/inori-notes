import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_quiz' })
export class HatsuneQuiz extends BaseEntity {
  @Field(type => Int)
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'quiz_id', type: 'integer' })
  quizId: number;

  @Field(type => String)
  @Column({ name: 'question_title', type: 'text' })
  questionTitle: string;

  @Field(type => String)
  @Column({ name: 'question', type: 'text' })
  question: string;

  @Field(type => String)
  @Column({ name: 'choice_1', type: 'text' })
  choice1: string;

  @Field(type => String)
  @Column({ name: 'choice_2', type: 'text' })
  choice2: string;

  @Field(type => String)
  @Column({ name: 'choice_3', type: 'text' })
  choice3: string;

  @Field(type => String)
  @Column({ name: 'choice_4', type: 'text' })
  choice4: string;

  @Field(type => String)
  @Column({ name: 'choice_5', type: 'text' })
  choice5: string;

  @Field(type => String)
  @Column({ name: 'choice_6', type: 'text' })
  choice6: string;

  @Field(type => Int)
  @Column({ name: 'answer', type: 'integer' })
  answer: number;

  @Field(type => String)
  @Column({ name: 'hint', type: 'text' })
  hint: string;

  @Field(type => Int)
  @Column({ name: 'resource_id', type: 'integer' })
  resourceId: number;

  @Field(type => Int)
  @Column({ name: 'release_quest_id', type: 'integer' })
  releaseQuestId: number;

  @Field(type => Int)
  @Column({ name: 'quiz_position_x', type: 'integer' })
  quizPositionX: number;

  @Field(type => Int)
  @Column({ name: 'quiz_position_y', type: 'integer' })
  quizPositionY: number;

  @Field(type => Int)
  @Column({ name: 'quiz_icon_id', type: 'integer' })
  quizIconId: number;

  @Field(type => String)
  @Column({ name: 'quiz_point_name', type: 'text' })
  quizPointName: string;

  @Field(type => Int)
  @Column({ name: 'adv_id_quiz_start', type: 'integer' })
  advIdQuizStart: number;

  @Field(type => Int)
  @Column({ name: 'adv_id_quiz_end', type: 'integer' })
  advIdQuizEnd: number;

}

