import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'reward_collect_guide' })
export class RewardCollectGuide extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'object_id', type: 'integer' })
  objectId: number;

  @Field()
  @Column({ name: 'quest_id_1', type: 'integer' })
  questId1: number;

  @Field()
  @Column({ name: 'quest_id_2', type: 'integer' })
  questId2: number;

  @Field()
  @Column({ name: 'quest_id_3', type: 'integer' })
  questId3: number;

  @Field()
  @Column({ name: 'quest_id_4', type: 'integer' })
  questId4: number;

  @Field()
  @Column({ name: 'quest_id_5', type: 'integer' })
  questId5: number;

  @Field()
  @Column({ name: 'quest_id_6', type: 'integer' })
  questId6: number;

  @Field()
  @Column({ name: 'quest_id_7', type: 'integer' })
  questId7: number;

  @Field()
  @Column({ name: 'quest_id_8', type: 'integer' })
  questId8: number;

  @Field()
  @Column({ name: 'quest_id_9', type: 'integer' })
  questId9: number;

  @Field()
  @Column({ name: 'quest_id_10', type: 'integer' })
  questId10: number;

  @Field()
  @Column({ name: 'system_id_1', type: 'integer' })
  systemId1: number;

  @Field()
  @Column({ name: 'system_id_2', type: 'integer' })
  systemId2: number;

  @Field()
  @Column({ name: 'system_id_3', type: 'integer' })
  systemId3: number;

  @Field()
  @Column({ name: 'system_id_4', type: 'integer' })
  systemId4: number;

  @Field()
  @Column({ name: 'system_id_5', type: 'integer' })
  systemId5: number;

}

