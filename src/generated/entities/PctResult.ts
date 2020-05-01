import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'pct_result' })
export class PctResult extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'character_id', type: 'integer' })
  characterId: number;

  @Field(type => Int)
  @Column({ name: 'score_from', type: 'integer' })
  scoreFrom: number;

  @Field(type => Int)
  @Column({ name: 'score_to', type: 'integer' })
  scoreTo: number;

  @Field(type => Int)
  @Column({ name: 'comment_id_1', type: 'integer' })
  commentId1: number;

  @Field(type => Int)
  @Column({ name: 'comment_id_2', type: 'integer' })
  commentId2: number;

  @Field(type => Int)
  @Column({ name: 'comment_id_3', type: 'integer' })
  commentId3: number;

  @Field(type => Int)
  @Column({ name: 'comment_id_4', type: 'integer' })
  commentId4: number;

  @Field(type => Int)
  @Column({ name: 'comment_id_5', type: 'integer' })
  commentId5: number;

}

