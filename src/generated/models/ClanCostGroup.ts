import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_cost_group' })
export class ClanCostGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  cost_group_id: number;

  @Field()
  @Column('integer')
  difficulty: number;

  @Field()
  @Column('integer')
  count: number;

  @Field()
  @Column('integer')
  cost: number;

}

