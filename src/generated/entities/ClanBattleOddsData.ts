import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_odds_data' })
export class ClanBattleOddsData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'odds_group_id', type: 'integer' })
  oddsGroupId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'team_level_from', type: 'integer' })
  teamLevelFrom: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'team_level_to', type: 'integer' })
  teamLevelTo: number;

  @Field(type => String)
  @Column({ name: 'odds_csv_1', type: 'text' })
  oddsCsv1: string;

  @Field(type => String)
  @Column({ name: 'odds_csv_2', type: 'text' })
  oddsCsv2: string;

  @Field(type => String)
  @Column({ name: 'odds_csv_3', type: 'text' })
  oddsCsv3: string;

  @Field(type => String)
  @Column({ name: 'odds_csv_4', type: 'text' })
  oddsCsv4: string;

  @Field(type => String)
  @Column({ name: 'odds_csv_5', type: 'text' })
  oddsCsv5: string;

  @Field(type => String)
  @Column({ name: 'odds_csv_6', type: 'text' })
  oddsCsv6: string;

  @Field(type => String)
  @Column({ name: 'odds_csv_7', type: 'text' })
  oddsCsv7: string;

  @Field(type => String)
  @Column({ name: 'odds_csv_8', type: 'text' })
  oddsCsv8: string;

  @Field(type => String)
  @Column({ name: 'odds_csv_9', type: 'text' })
  oddsCsv9: string;

  @Field(type => String)
  @Column({ name: 'odds_csv_10', type: 'text' })
  oddsCsv10: string;

}

