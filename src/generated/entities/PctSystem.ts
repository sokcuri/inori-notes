import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'pct_system' })
export class PctSystem extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'pct_base_speed', type: 'integer' })
  pctBaseSpeed: number;

  @Field()
  @Column({ name: 'fever_point_max', type: 'integer' })
  feverPointMax: number;

  @Field()
  @Column({ name: 'fever_time', type: 'integer' })
  feverTime: number;

  @Field()
  @Column({ name: 'fever_revention_time', type: 'integer' })
  feverReventionTime: number;

  @Field()
  @Column({ name: 'pct_time', type: 'integer' })
  pctTime: number;

  @Field()
  @Column({ name: 'chara1', type: 'integer' })
  chara1: number;

  @Field()
  @Column({ name: 'chara2', type: 'integer' })
  chara2: number;

  @Field()
  @Column({ name: 'chara1_gauge_choice', type: 'integer' })
  chara1GaugeChoice: number;

  @Field()
  @Column({ name: 'chara2_gauge_choice', type: 'integer' })
  chara2GaugeChoice: number;

}

