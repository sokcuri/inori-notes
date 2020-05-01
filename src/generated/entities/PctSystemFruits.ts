import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'pct_system_fruits' })
export class PctSystemFruits extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'last_time', type: 'integer' })
  lastTime: number;

  @Field()
  @Column({ name: 'appearance', type: 'integer' })
  appearance: number;

  @Field()
  @Column({ name: 'bar_split', type: 'integer' })
  barSplit: number;

  @Field()
  @Column({ name: 'appearance_chara_odds', type: 'integer' })
  appearanceCharaOdds: number;

  @Field()
  @Column({ name: 'appearance_pattern', type: 'text' })
  appearancePattern: string;

  @Field()
  @Column({ name: 'wait_time', type: 'integer' })
  waitTime: number;

}

