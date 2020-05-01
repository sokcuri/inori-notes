import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_cost_group' })
export class ClanCostGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'cost_group_id', type: 'integer' })
  costGroupId: number;

  @Field(type => Int)
  @Column({ name: 'difficulty', type: 'integer' })
  difficulty: number;

  @Field(type => Int)
  @Column({ name: 'count', type: 'integer' })
  count: number;

  @Field(type => Int)
  @Column({ name: 'cost', type: 'integer' })
  cost: number;

}

