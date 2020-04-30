import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'skill_action' })
export class SkillAction extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  action_id: number;

  @Field()
  @Column('integer')
  class_id: number;

  @Field()
  @Column('integer')
  action_type: number;

  @Field()
  @Column('integer')
  action_detail_1: number;

  @Field()
  @Column('integer')
  action_detail_2: number;

  @Field()
  @Column('integer')
  action_detail_3: number;

  @Field()
  @Column('real')
  action_value_1: number;

  @Field()
  @Column('real')
  action_value_2: number;

  @Field()
  @Column('real')
  action_value_3: number;

  @Field()
  @Column('real')
  action_value_4: number;

  @Field()
  @Column('real')
  action_value_5: number;

  @Field()
  @Column('real')
  action_value_6: number;

  @Field()
  @Column('real')
  action_value_7: number;

  @Field()
  @Column('integer')
  target_assignment: number;

  @Field()
  @Column('integer')
  target_area: number;

  @Field()
  @Column('integer')
  target_range: number;

  @Field()
  @Column('integer')
  target_type: number;

  @Field()
  @Column('integer')
  target_number: number;

  @Field()
  @Column('integer')
  target_count: number;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column('text')
  level_up_disp: string;

}

