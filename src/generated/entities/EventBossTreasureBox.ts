import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_boss_treasure_box' })
export class EventBossTreasureBox extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'event_boss_treasure_box_id', type: 'integer' })
  eventBossTreasureBoxId: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_1', type: 'integer' })
  treasureType1: number;

  @Field(type => Int)
  @Column({ name: 'event_boss_treasure_content_id_1', type: 'integer' })
  eventBossTreasureContentId1: number;

  @Field(type => Int)
  @Column({ name: 'each_odds_1', type: 'integer' })
  eachOdds1: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_2', type: 'integer' })
  treasureType2: number;

  @Field(type => Int)
  @Column({ name: 'event_boss_treasure_content_id_2', type: 'integer' })
  eventBossTreasureContentId2: number;

  @Field(type => Int)
  @Column({ name: 'each_odds_2', type: 'integer' })
  eachOdds2: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_3', type: 'integer' })
  treasureType3: number;

  @Field(type => Int)
  @Column({ name: 'event_boss_treasure_content_id_3', type: 'integer' })
  eventBossTreasureContentId3: number;

  @Field(type => Int)
  @Column({ name: 'each_odds_3', type: 'integer' })
  eachOdds3: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_4', type: 'integer' })
  treasureType4: number;

  @Field(type => Int)
  @Column({ name: 'event_boss_treasure_content_id_4', type: 'integer' })
  eventBossTreasureContentId4: number;

  @Field(type => Int)
  @Column({ name: 'each_odds_4', type: 'integer' })
  eachOdds4: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_5', type: 'integer' })
  treasureType5: number;

  @Field(type => Int)
  @Column({ name: 'event_boss_treasure_content_id_5', type: 'integer' })
  eventBossTreasureContentId5: number;

  @Field(type => Int)
  @Column({ name: 'each_odds_5', type: 'integer' })
  eachOdds5: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_6', type: 'integer' })
  treasureType6: number;

  @Field(type => Int)
  @Column({ name: 'event_boss_treasure_content_id_6', type: 'integer' })
  eventBossTreasureContentId6: number;

  @Field(type => Int)
  @Column({ name: 'each_odds_6', type: 'integer' })
  eachOdds6: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_7', type: 'integer' })
  treasureType7: number;

  @Field(type => Int)
  @Column({ name: 'event_boss_treasure_content_id_7', type: 'integer' })
  eventBossTreasureContentId7: number;

  @Field(type => Int)
  @Column({ name: 'each_odds_7', type: 'integer' })
  eachOdds7: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_8', type: 'integer' })
  treasureType8: number;

  @Field(type => Int)
  @Column({ name: 'event_boss_treasure_content_id_8', type: 'integer' })
  eventBossTreasureContentId8: number;

  @Field(type => Int)
  @Column({ name: 'each_odds_8', type: 'integer' })
  eachOdds8: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_9', type: 'integer' })
  treasureType9: number;

  @Field(type => Int)
  @Column({ name: 'event_boss_treasure_content_id_9', type: 'integer' })
  eventBossTreasureContentId9: number;

  @Field(type => Int)
  @Column({ name: 'each_odds_9', type: 'integer' })
  eachOdds9: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_10', type: 'integer' })
  treasureType10: number;

  @Field(type => Int)
  @Column({ name: 'event_boss_treasure_content_id_10', type: 'integer' })
  eventBossTreasureContentId10: number;

  @Field(type => Int)
  @Column({ name: 'each_odds_10', type: 'integer' })
  eachOdds10: number;

}

