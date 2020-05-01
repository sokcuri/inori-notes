import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'kaiser_restriction_group' })
export class KaiserRestrictionGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'restriction_group_id', type: 'integer' })
  restrictionGroupId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

}

