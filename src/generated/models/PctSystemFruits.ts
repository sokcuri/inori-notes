import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'pct_system_fruits' })
export class PctSystemFruits extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  last_time: number;

  @Field()
  @Column('integer')
  appearance: number;

  @Field()
  @Column('integer')
  bar_split: number;

  @Field()
  @Column('integer')
  appearance_chara_odds: number;

  @Field()
  @Column('text')
  appearance_pattern: string;

  @Field()
  @Column('integer')
  wait_time: number;

}

