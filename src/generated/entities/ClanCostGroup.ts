import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_cost_group' })
export class ClanCostGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'cost_group_id', type: 'integer' })
  costGroupId: number;

  @Field()
  @Column({ name: 'difficulty', type: 'integer' })
  difficulty: number;

  @Field()
  @Column({ name: 'count', type: 'integer' })
  count: number;

  @Field()
  @Column({ name: 'cost', type: 'integer' })
  cost: number;

}

