import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'pct_system' })
export class PctSystem extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'pct_base_speed', type: 'integer' })
  pctBaseSpeed: number;

  @Field(type => Int)
  @Column({ name: 'fever_point_max', type: 'integer' })
  feverPointMax: number;

  @Field(type => Int)
  @Column({ name: 'fever_time', type: 'integer' })
  feverTime: number;

  @Field(type => Int)
  @Column({ name: 'fever_revention_time', type: 'integer' })
  feverReventionTime: number;

  @Field(type => Int)
  @Column({ name: 'pct_time', type: 'integer' })
  pctTime: number;

  @Field(type => Int)
  @Column({ name: 'chara1', type: 'integer' })
  chara1: number;

  @Field(type => Int)
  @Column({ name: 'chara2', type: 'integer' })
  chara2: number;

  @Field(type => Int)
  @Column({ name: 'chara1_gauge_choice', type: 'integer' })
  chara1GaugeChoice: number;

  @Field(type => Int)
  @Column({ name: 'chara2_gauge_choice', type: 'integer' })
  chara2GaugeChoice: number;

  @Field(type => [Int])
  get chara() {
    return [this.chara1, this.chara2];
  }

}

