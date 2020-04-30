import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'skill_data' })
export class SkillData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'skill_id', type: 'integer' })
  skillId: number;

  @Field()
  @Column({ name: 'name', type: 'text', nullable: true })
  name: string;

  @Field()
  @Column({ name: 'skill_type', type: 'integer' })
  skillType: number;

  @Field()
  @Column({ name: 'skill_area_width', type: 'integer' })
  skillAreaWidth: number;

  @Field()
  @Column({ name: 'skill_cast_time', type: 'real' })
  skillCastTime: number;

  @Field()
  @Column({ name: 'action_1', type: 'integer' })
  action1: number;

  @Field()
  @Column({ name: 'action_2', type: 'integer' })
  action2: number;

  @Field()
  @Column({ name: 'action_3', type: 'integer' })
  action3: number;

  @Field()
  @Column({ name: 'action_4', type: 'integer' })
  action4: number;

  @Field()
  @Column({ name: 'action_5', type: 'integer' })
  action5: number;

  @Field()
  @Column({ name: 'action_6', type: 'integer' })
  action6: number;

  @Field()
  @Column({ name: 'action_7', type: 'integer' })
  action7: number;

  @Field()
  @Column({ name: 'depend_action_1', type: 'integer' })
  dependAction1: number;

  @Field()
  @Column({ name: 'depend_action_2', type: 'integer' })
  dependAction2: number;

  @Field()
  @Column({ name: 'depend_action_3', type: 'integer' })
  dependAction3: number;

  @Field()
  @Column({ name: 'depend_action_4', type: 'integer' })
  dependAction4: number;

  @Field()
  @Column({ name: 'depend_action_5', type: 'integer' })
  dependAction5: number;

  @Field()
  @Column({ name: 'depend_action_6', type: 'integer' })
  dependAction6: number;

  @Field()
  @Column({ name: 'depend_action_7', type: 'integer' })
  dependAction7: number;

  @Field()
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field()
  @Column({ name: 'icon_type', type: 'integer' })
  iconType: number;

}

