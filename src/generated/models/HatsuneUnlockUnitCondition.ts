import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_unlock_unit_condition' })
export class HatsuneUnlockUnitCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  unit_id: number;

  @Field()
  @Column('integer')
  event_id: number;

  @Field()
  @Column('integer')
  condition_mission_id: number;

  @Field()
  @Column('text')
  top_description: string;

  @Field()
  @Column('text')
  description_1: string;

  @Field()
  @Column('text')
  description_2: string;

}

