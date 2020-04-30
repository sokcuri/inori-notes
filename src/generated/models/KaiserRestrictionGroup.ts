import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'kaiser_restriction_group' })
export class KaiserRestrictionGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  restriction_group_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  unit_id: number;

}

