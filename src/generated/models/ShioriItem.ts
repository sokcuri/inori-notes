import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'shiori_item' })
export class ShioriItem extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  event_id: number;

  @Field()
  @Column('integer')
  unit_material_id_1: number;

  @Field()
  @Column('integer')
  unit_material_id_2: number;

}

