import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_odds_data' })
export class ClanBattleOddsData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  odds_group_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  team_level_from: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  team_level_to: number;

  @Field()
  @Column('text')
  odds_csv_1: string;

  @Field()
  @Column('text')
  odds_csv_2: string;

  @Field()
  @Column('text')
  odds_csv_3: string;

  @Field()
  @Column('text')
  odds_csv_4: string;

  @Field()
  @Column('text')
  odds_csv_5: string;

  @Field()
  @Column('text')
  odds_csv_6: string;

  @Field()
  @Column('text')
  odds_csv_7: string;

  @Field()
  @Column('text')
  odds_csv_8: string;

  @Field()
  @Column('text')
  odds_csv_9: string;

  @Field()
  @Column('text')
  odds_csv_10: string;

}

