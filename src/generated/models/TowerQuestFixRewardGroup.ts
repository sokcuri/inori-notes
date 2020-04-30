import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tower_quest_fix_reward_group' })
export class TowerQuestFixRewardGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  fix_reward_group_id: number;

  @Field()
  @Column('integer')
  treasure_type_1: number;

  @Field()
  @Column('integer')
  reward_type_1: number;

  @Field()
  @Column('integer')
  reward_id_1: number;

  @Field()
  @Column('integer')
  reward_num_1: number;

  @Field()
  @Column('integer')
  treasure_type_2: number;

  @Field()
  @Column('integer')
  reward_type_2: number;

  @Field()
  @Column('integer')
  reward_id_2: number;

  @Field()
  @Column('integer')
  reward_num_2: number;

  @Field()
  @Column('integer')
  treasure_type_3: number;

  @Field()
  @Column('integer')
  reward_type_3: number;

  @Field()
  @Column('integer')
  reward_id_3: number;

  @Field()
  @Column('integer')
  reward_num_3: number;

  @Field()
  @Column('integer')
  treasure_type_4: number;

  @Field()
  @Column('integer')
  reward_type_4: number;

  @Field()
  @Column('integer')
  reward_id_4: number;

  @Field()
  @Column('integer')
  reward_num_4: number;

  @Field()
  @Column('integer')
  treasure_type_5: number;

  @Field()
  @Column('integer')
  reward_type_5: number;

  @Field()
  @Column('integer')
  reward_id_5: number;

  @Field()
  @Column('integer')
  reward_num_5: number;

  @Field()
  @Column('integer')
  treasure_type_6: number;

  @Field()
  @Column('integer')
  reward_type_6: number;

  @Field()
  @Column('integer')
  reward_id_6: number;

  @Field()
  @Column('integer')
  reward_num_6: number;

  @Field()
  @Column('integer')
  treasure_type_7: number;

  @Field()
  @Column('integer')
  reward_type_7: number;

  @Field()
  @Column('integer')
  reward_id_7: number;

  @Field()
  @Column('integer')
  reward_num_7: number;

  @Field()
  @Column('integer')
  treasure_type_8: number;

  @Field()
  @Column('integer')
  reward_type_8: number;

  @Field()
  @Column('integer')
  reward_id_8: number;

  @Field()
  @Column('integer')
  reward_num_8: number;

  @Field()
  @Column('integer')
  treasure_type_9: number;

  @Field()
  @Column('integer')
  reward_type_9: number;

  @Field()
  @Column('integer')
  reward_id_9: number;

  @Field()
  @Column('integer')
  reward_num_9: number;

  @Field()
  @Column('integer')
  treasure_type_10: number;

  @Field()
  @Column('integer')
  reward_type_10: number;

  @Field()
  @Column('integer')
  reward_id_10: number;

  @Field()
  @Column('integer')
  reward_num_10: number;

}

