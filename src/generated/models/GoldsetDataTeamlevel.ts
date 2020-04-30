import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'goldset_data_teamlevel' })
export class GoldsetDataTeamlevel extends BaseEntity {
  @Field()
  @Column('integer')
  id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  team_level: number;

  @Field()
  @Column('integer')
  initial_get_gold_count: number;

}

