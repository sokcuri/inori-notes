import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'goldset_data_teamlevel' })
export class GoldsetDataTeamlevel extends BaseEntity {
  @Field()
  @Column({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'team_level', type: 'integer' })
  teamLevel: number;

  @Field()
  @Column({ name: 'initial_get_gold_count', type: 'integer' })
  initialGetGoldCount: number;

}

