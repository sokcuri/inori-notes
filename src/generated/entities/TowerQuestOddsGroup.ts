import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tower_quest_odds_group' })
export class TowerQuestOddsGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'odds_group_id', type: 'integer' })
  oddsGroupId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'team_level_from', type: 'integer' })
  teamLevelFrom: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'team_level_to', type: 'integer' })
  teamLevelTo: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_1', type: 'integer' })
  treasureType1: number;

  @Field(type => String)
  @Column({ name: 'odds_csv_1', type: 'text' })
  oddsCsv1: string;

  @Field(type => Int)
  @Column({ name: 'treasure_type_2', type: 'integer' })
  treasureType2: number;

  @Field(type => String)
  @Column({ name: 'odds_csv_2', type: 'text' })
  oddsCsv2: string;

  @Field(type => Int)
  @Column({ name: 'treasure_type_3', type: 'integer' })
  treasureType3: number;

  @Field(type => String)
  @Column({ name: 'odds_csv_3', type: 'text' })
  oddsCsv3: string;

  @Field(type => Int)
  @Column({ name: 'treasure_type_4', type: 'integer' })
  treasureType4: number;

  @Field(type => String)
  @Column({ name: 'odds_csv_4', type: 'text' })
  oddsCsv4: string;

  @Field(type => Int)
  @Column({ name: 'treasure_type_5', type: 'integer' })
  treasureType5: number;

  @Field(type => String)
  @Column({ name: 'odds_csv_5', type: 'text' })
  oddsCsv5: string;

  @Field(type => Int)
  @Column({ name: 'treasure_type_6', type: 'integer' })
  treasureType6: number;

  @Field(type => String)
  @Column({ name: 'odds_csv_6', type: 'text' })
  oddsCsv6: string;

  @Field(type => Int)
  @Column({ name: 'treasure_type_7', type: 'integer' })
  treasureType7: number;

  @Field(type => String)
  @Column({ name: 'odds_csv_7', type: 'text' })
  oddsCsv7: string;

  @Field(type => Int)
  @Column({ name: 'treasure_type_8', type: 'integer' })
  treasureType8: number;

  @Field(type => String)
  @Column({ name: 'odds_csv_8', type: 'text' })
  oddsCsv8: string;

  @Field(type => Int)
  @Column({ name: 'treasure_type_9', type: 'integer' })
  treasureType9: number;

  @Field(type => String)
  @Column({ name: 'odds_csv_9', type: 'text' })
  oddsCsv9: string;

  @Field(type => Int)
  @Column({ name: 'treasure_type_10', type: 'integer' })
  treasureType10: number;

  @Field(type => String)
  @Column({ name: 'odds_csv_10', type: 'text' })
  oddsCsv10: string;

  @Field(type => [Int])
  get treasureType() {
    return [this.treasureType1, this.treasureType2, this.treasureType3, this.treasureType4, this.treasureType5, this.treasureType6, this.treasureType7, this.treasureType8, this.treasureType9, this.treasureType10];
  }

  @Field(type => [String])
  get oddsCsv() {
    return [this.oddsCsv1, this.oddsCsv2, this.oddsCsv3, this.oddsCsv4, this.oddsCsv5, this.oddsCsv6, this.oddsCsv7, this.oddsCsv8, this.oddsCsv9, this.oddsCsv10];
  }

}

