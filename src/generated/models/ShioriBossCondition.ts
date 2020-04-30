import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'shiori_boss_condition' })
export class ShioriBossCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  boss_id: number;

  @Field()
  @Column('integer')
  event_id: number;

  @Field()
  @Column('integer')
  condition_quest_id: number;

  @Field()
  @Column('integer')
  condition_boss_id: number;

  @Field()
  @Column('integer')
  release_quest_id: number;

  @Field()
  @Column('integer')
  release_boss_id: number;

}

