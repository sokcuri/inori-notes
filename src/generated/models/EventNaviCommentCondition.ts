import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_navi_comment_condition' })
export class EventNaviCommentCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  comment_id: number;

  @Field()
  @Column('integer')
  condition_type_1: number;

  @Field()
  @Column('integer')
  condition_value_1: number;

  @Field()
  @Column('integer')
  condition_type_2: number;

  @Field()
  @Column('integer')
  condition_value_2: number;

  @Field()
  @Column('integer')
  condition_type_3: number;

  @Field()
  @Column('integer')
  condition_value_3: number;

}

