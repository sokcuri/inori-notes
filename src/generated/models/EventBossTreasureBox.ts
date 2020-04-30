import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_boss_treasure_box' })
export class EventBossTreasureBox extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  event_boss_treasure_box_id: number;

  @Field()
  @Column('integer')
  treasure_type_1: number;

  @Field()
  @Column('integer')
  event_boss_treasure_content_id_1: number;

  @Field()
  @Column('integer')
  each_odds_1: number;

  @Field()
  @Column('integer')
  treasure_type_2: number;

  @Field()
  @Column('integer')
  event_boss_treasure_content_id_2: number;

  @Field()
  @Column('integer')
  each_odds_2: number;

  @Field()
  @Column('integer')
  treasure_type_3: number;

  @Field()
  @Column('integer')
  event_boss_treasure_content_id_3: number;

  @Field()
  @Column('integer')
  each_odds_3: number;

  @Field()
  @Column('integer')
  treasure_type_4: number;

  @Field()
  @Column('integer')
  event_boss_treasure_content_id_4: number;

  @Field()
  @Column('integer')
  each_odds_4: number;

  @Field()
  @Column('integer')
  treasure_type_5: number;

  @Field()
  @Column('integer')
  event_boss_treasure_content_id_5: number;

  @Field()
  @Column('integer')
  each_odds_5: number;

  @Field()
  @Column('integer')
  treasure_type_6: number;

  @Field()
  @Column('integer')
  event_boss_treasure_content_id_6: number;

  @Field()
  @Column('integer')
  each_odds_6: number;

  @Field()
  @Column('integer')
  treasure_type_7: number;

  @Field()
  @Column('integer')
  event_boss_treasure_content_id_7: number;

  @Field()
  @Column('integer')
  each_odds_7: number;

  @Field()
  @Column('integer')
  treasure_type_8: number;

  @Field()
  @Column('integer')
  event_boss_treasure_content_id_8: number;

  @Field()
  @Column('integer')
  each_odds_8: number;

  @Field()
  @Column('integer')
  treasure_type_9: number;

  @Field()
  @Column('integer')
  event_boss_treasure_content_id_9: number;

  @Field()
  @Column('integer')
  each_odds_9: number;

  @Field()
  @Column('integer')
  treasure_type_10: number;

  @Field()
  @Column('integer')
  event_boss_treasure_content_id_10: number;

  @Field()
  @Column('integer')
  each_odds_10: number;

}

