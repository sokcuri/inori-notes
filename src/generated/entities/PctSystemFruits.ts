import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'pct_system_fruits' })
export class PctSystemFruits extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'last_time', type: 'integer' })
  lastTime: number;

  @Field(type => Int)
  @Column({ name: 'appearance', type: 'integer' })
  appearance: number;

  @Field(type => Int)
  @Column({ name: 'bar_split', type: 'integer' })
  barSplit: number;

  @Field(type => Int)
  @Column({ name: 'appearance_chara_odds', type: 'integer' })
  appearanceCharaOdds: number;

  @Field(type => String)
  @Column({ name: 'appearance_pattern', type: 'text' })
  appearancePattern: string;

  @Field(type => Int)
  @Column({ name: 'wait_time', type: 'integer' })
  waitTime: number;

}

