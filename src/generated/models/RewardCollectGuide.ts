import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'reward_collect_guide' })
export class RewardCollectGuide extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  object_id: number;

  @Field()
  @Column('integer')
  quest_id_1: number;

  @Field()
  @Column('integer')
  quest_id_2: number;

  @Field()
  @Column('integer')
  quest_id_3: number;

  @Field()
  @Column('integer')
  quest_id_4: number;

  @Field()
  @Column('integer')
  quest_id_5: number;

  @Field()
  @Column('integer')
  quest_id_6: number;

  @Field()
  @Column('integer')
  quest_id_7: number;

  @Field()
  @Column('integer')
  quest_id_8: number;

  @Field()
  @Column('integer')
  quest_id_9: number;

  @Field()
  @Column('integer')
  quest_id_10: number;

  @Field()
  @Column('integer')
  system_id_1: number;

  @Field()
  @Column('integer')
  system_id_2: number;

  @Field()
  @Column('integer')
  system_id_3: number;

  @Field()
  @Column('integer')
  system_id_4: number;

  @Field()
  @Column('integer')
  system_id_5: number;

}

