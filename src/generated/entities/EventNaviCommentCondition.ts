import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_navi_comment_condition' })
export class EventNaviCommentCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'comment_id', type: 'integer' })
  commentId: number;

  @Field(type => Int)
  @Column({ name: 'condition_type_1', type: 'integer' })
  conditionType1: number;

  @Field(type => Int)
  @Column({ name: 'condition_value_1', type: 'integer' })
  conditionValue1: number;

  @Field(type => Int)
  @Column({ name: 'condition_type_2', type: 'integer' })
  conditionType2: number;

  @Field(type => Int)
  @Column({ name: 'condition_value_2', type: 'integer' })
  conditionValue2: number;

  @Field(type => Int)
  @Column({ name: 'condition_type_3', type: 'integer' })
  conditionType3: number;

  @Field(type => Int)
  @Column({ name: 'condition_value_3', type: 'integer' })
  conditionValue3: number;

}

