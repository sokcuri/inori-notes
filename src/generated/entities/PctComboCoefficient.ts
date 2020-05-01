import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'pct_combo_coefficient' })
export class PctComboCoefficient extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'combo_min', type: 'integer' })
  comboMin: number;

  @Field()
  @Column({ name: 'combo_max', type: 'integer' })
  comboMax: number;

  @Field()
  @Column({ name: 'combo_coefficient', type: 'integer' })
  comboCoefficient: number;

}

