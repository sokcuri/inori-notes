import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'goldset_data_2' })
export class GoldsetData2 extends BaseEntity {
  @Field()
  @Column('integer')
  id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  buy_count: number;

  @Field()
  @Column('integer')
  use_jewel_count: number;

  @Field()
  @Column('integer')
  get_gold_count: number;

  @Field()
  @Column('integer')
  goldset_odds_1: number;

  @Field()
  @Column('integer')
  goldset_odds_2: number;

  @Field()
  @Column('integer')
  goldset_odds_3: number;

  @Field()
  @Column('integer')
  additional_gold_min_rate: number;

  @Field()
  @Column('integer')
  additional_gold_max_rate: number;

  @Field()
  @Column('integer')
  training_quest_count: number;

}

