import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_quiz' })
export class HatsuneQuiz extends BaseEntity {
  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'quiz_id', type: 'integer' })
  quizId: number;

  @Field()
  @Column({ name: 'question_title', type: 'text' })
  questionTitle: string;

  @Field()
  @Column({ name: 'question', type: 'text' })
  question: string;

  @Field()
  @Column({ name: 'choice_1', type: 'text' })
  choice1: string;

  @Field()
  @Column({ name: 'choice_2', type: 'text' })
  choice2: string;

  @Field()
  @Column({ name: 'choice_3', type: 'text' })
  choice3: string;

  @Field()
  @Column({ name: 'choice_4', type: 'text' })
  choice4: string;

  @Field()
  @Column({ name: 'choice_5', type: 'text' })
  choice5: string;

  @Field()
  @Column({ name: 'choice_6', type: 'text' })
  choice6: string;

  @Field()
  @Column({ name: 'answer', type: 'integer' })
  answer: number;

  @Field()
  @Column({ name: 'hint', type: 'text' })
  hint: string;

  @Field()
  @Column({ name: 'resource_id', type: 'integer' })
  resourceId: number;

  @Field()
  @Column({ name: 'release_quest_id', type: 'integer' })
  releaseQuestId: number;

  @Field()
  @Column({ name: 'quiz_position_x', type: 'integer' })
  quizPositionX: number;

  @Field()
  @Column({ name: 'quiz_position_y', type: 'integer' })
  quizPositionY: number;

  @Field()
  @Column({ name: 'quiz_icon_id', type: 'integer' })
  quizIconId: number;

  @Field()
  @Column({ name: 'quiz_point_name', type: 'text' })
  quizPointName: string;

  @Field()
  @Column({ name: 'adv_id_quiz_start', type: 'integer' })
  advIdQuizStart: number;

  @Field()
  @Column({ name: 'adv_id_quiz_end', type: 'integer' })
  advIdQuizEnd: number;

}

