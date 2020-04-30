import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'skill_data' })
export class SkillData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  skill_id: number;

  @Field()
  @Column({ nullable: true, type: 'text' })
  name?: string;

  @Field()
  @Column('integer')
  skill_type: number;

  @Field()
  @Column('integer')
  skill_area_width: number;

  @Field()
  @Column('real')
  skill_cast_time: number;

  @Field()
  @Column('integer')
  action_1: number;

  @Field()
  @Column('integer')
  action_2: number;

  @Field()
  @Column('integer')
  action_3: number;

  @Field()
  @Column('integer')
  action_4: number;

  @Field()
  @Column('integer')
  action_5: number;

  @Field()
  @Column('integer')
  action_6: number;

  @Field()
  @Column('integer')
  action_7: number;

  @Field()
  @Column('integer')
  depend_action_1: number;

  @Field()
  @Column('integer')
  depend_action_2: number;

  @Field()
  @Column('integer')
  depend_action_3: number;

  @Field()
  @Column('integer')
  depend_action_4: number;

  @Field()
  @Column('integer')
  depend_action_5: number;

  @Field()
  @Column('integer')
  depend_action_6: number;

  @Field()
  @Column('integer')
  depend_action_7: number;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column('integer')
  icon_type: number;

}

