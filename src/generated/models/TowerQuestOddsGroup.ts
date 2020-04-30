import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tower_quest_odds_group' })
export class TowerQuestOddsGroup extends BaseEntity {
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
  @Column('integer')
  treasure_type_1: number;

  @Field()
  @Column('text')
  odds_csv_1: string;

  @Field()
  @Column('integer')
  treasure_type_2: number;

  @Field()
  @Column('text')
  odds_csv_2: string;

  @Field()
  @Column('integer')
  treasure_type_3: number;

  @Field()
  @Column('text')
  odds_csv_3: string;

  @Field()
  @Column('integer')
  treasure_type_4: number;

  @Field()
  @Column('text')
  odds_csv_4: string;

  @Field()
  @Column('integer')
  treasure_type_5: number;

  @Field()
  @Column('text')
  odds_csv_5: string;

  @Field()
  @Column('integer')
  treasure_type_6: number;

  @Field()
  @Column('text')
  odds_csv_6: string;

  @Field()
  @Column('integer')
  treasure_type_7: number;

  @Field()
  @Column('text')
  odds_csv_7: string;

  @Field()
  @Column('integer')
  treasure_type_8: number;

  @Field()
  @Column('text')
  odds_csv_8: string;

  @Field()
  @Column('integer')
  treasure_type_9: number;

  @Field()
  @Column('text')
  odds_csv_9: string;

  @Field()
  @Column('integer')
  treasure_type_10: number;

  @Field()
  @Column('text')
  odds_csv_10: string;

}

