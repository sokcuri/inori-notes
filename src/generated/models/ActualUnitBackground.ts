import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'actual_unit_background' })
export class ActualUnitBackground extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  unit_id: number;

  @Field()
  @Column('text')
  unit_name: string;

  @Field()
  @Column('integer')
  bg_id: number;

  @Field()
  @Column('integer')
  face_type: number;

}

