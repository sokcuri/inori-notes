import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'skill_action' })
export class SkillAction extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'action_id', type: 'integer' })
  actionId: number;

  @Field()
  @Column({ name: 'class_id', type: 'integer' })
  classId: number;

  @Field()
  @Column({ name: 'action_type', type: 'integer' })
  actionType: number;

  @Field()
  @Column({ name: 'action_detail_1', type: 'integer' })
  actionDetail1: number;

  @Field()
  @Column({ name: 'action_detail_2', type: 'integer' })
  actionDetail2: number;

  @Field()
  @Column({ name: 'action_detail_3', type: 'integer' })
  actionDetail3: number;

  @Field()
  @Column({ name: 'action_value_1', type: 'real' })
  actionValue1: number;

  @Field()
  @Column({ name: 'action_value_2', type: 'real' })
  actionValue2: number;

  @Field()
  @Column({ name: 'action_value_3', type: 'real' })
  actionValue3: number;

  @Field()
  @Column({ name: 'action_value_4', type: 'real' })
  actionValue4: number;

  @Field()
  @Column({ name: 'action_value_5', type: 'real' })
  actionValue5: number;

  @Field()
  @Column({ name: 'action_value_6', type: 'real' })
  actionValue6: number;

  @Field()
  @Column({ name: 'action_value_7', type: 'real' })
  actionValue7: number;

  @Field()
  @Column({ name: 'target_assignment', type: 'integer' })
  targetAssignment: number;

  @Field()
  @Column({ name: 'target_area', type: 'integer' })
  targetArea: number;

  @Field()
  @Column({ name: 'target_range', type: 'integer' })
  targetRange: number;

  @Field()
  @Column({ name: 'target_type', type: 'integer' })
  targetType: number;

  @Field()
  @Column({ name: 'target_number', type: 'integer' })
  targetNumber: number;

  @Field()
  @Column({ name: 'target_count', type: 'integer' })
  targetCount: number;

  @Field()
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field()
  @Column({ name: 'level_up_disp', type: 'text' })
  levelUpDisp: string;

}

