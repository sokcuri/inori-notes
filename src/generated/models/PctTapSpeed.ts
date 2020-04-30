import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'pct_tap_speed' })
export class PctTapSpeed extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'combo_count', type: 'integer' })
  comboCount: number;

  @Field()
  @Column({ name: 'speed_magnification', type: 'integer' })
  speedMagnification: number;

}

