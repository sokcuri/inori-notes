import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'skill_action' })
export class SkillAction extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'action_id', type: 'integer' })
  actionId: number;

  @Field(type => Int)
  @Column({ name: 'class_id', type: 'integer' })
  classId: number;

  @Field(type => Int)
  @Column({ name: 'action_type', type: 'integer' })
  actionType: number;

  @Field(type => Int)
  @Column({ name: 'action_detail_1', type: 'integer' })
  actionDetail1: number;

  @Field(type => Int)
  @Column({ name: 'action_detail_2', type: 'integer' })
  actionDetail2: number;

  @Field(type => Int)
  @Column({ name: 'action_detail_3', type: 'integer' })
  actionDetail3: number;

  @Field(type => Float)
  @Column({ name: 'action_value_1', type: 'real' })
  actionValue1: number;

  @Field(type => Float)
  @Column({ name: 'action_value_2', type: 'real' })
  actionValue2: number;

  @Field(type => Float)
  @Column({ name: 'action_value_3', type: 'real' })
  actionValue3: number;

  @Field(type => Float)
  @Column({ name: 'action_value_4', type: 'real' })
  actionValue4: number;

  @Field(type => Float)
  @Column({ name: 'action_value_5', type: 'real' })
  actionValue5: number;

  @Field(type => Float)
  @Column({ name: 'action_value_6', type: 'real' })
  actionValue6: number;

  @Field(type => Float)
  @Column({ name: 'action_value_7', type: 'real' })
  actionValue7: number;

  @Field(type => Int)
  @Column({ name: 'target_assignment', type: 'integer' })
  targetAssignment: number;

  @Field(type => Int)
  @Column({ name: 'target_area', type: 'integer' })
  targetArea: number;

  @Field(type => Int)
  @Column({ name: 'target_range', type: 'integer' })
  targetRange: number;

  @Field(type => Int)
  @Column({ name: 'target_type', type: 'integer' })
  targetType: number;

  @Field(type => Int)
  @Column({ name: 'target_number', type: 'integer' })
  targetNumber: number;

  @Field(type => Int)
  @Column({ name: 'target_count', type: 'integer' })
  targetCount: number;

  @Field(type => String)
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field(type => String)
  @Column({ name: 'level_up_disp', type: 'text' })
  levelUpDisp: string;

  @Field(type => [Int])
  get actionDetail() {
    return [this.actionDetail1, this.actionDetail2, this.actionDetail3];
  }

  @Field(type => [Float])
  get actionValue() {
    return [this.actionValue1, this.actionValue2, this.actionValue3, this.actionValue4, this.actionValue5, this.actionValue6, this.actionValue7];
  }

}

