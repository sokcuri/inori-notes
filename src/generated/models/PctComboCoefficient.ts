import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'pct_combo_coefficient' })
export class PctComboCoefficient extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  combo_min: number;

  @Field()
  @Column('integer')
  combo_max: number;

  @Field()
  @Column('integer')
  combo_coefficient: number;

}

