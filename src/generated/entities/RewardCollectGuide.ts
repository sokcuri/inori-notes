import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'reward_collect_guide' })
export class RewardCollectGuide extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'object_id', type: 'integer' })
  objectId: number;

  @Field(type => Int)
  @Column({ name: 'quest_id_1', type: 'integer' })
  questId1: number;

  @Field(type => Int)
  @Column({ name: 'quest_id_2', type: 'integer' })
  questId2: number;

  @Field(type => Int)
  @Column({ name: 'quest_id_3', type: 'integer' })
  questId3: number;

  @Field(type => Int)
  @Column({ name: 'quest_id_4', type: 'integer' })
  questId4: number;

  @Field(type => Int)
  @Column({ name: 'quest_id_5', type: 'integer' })
  questId5: number;

  @Field(type => Int)
  @Column({ name: 'quest_id_6', type: 'integer' })
  questId6: number;

  @Field(type => Int)
  @Column({ name: 'quest_id_7', type: 'integer' })
  questId7: number;

  @Field(type => Int)
  @Column({ name: 'quest_id_8', type: 'integer' })
  questId8: number;

  @Field(type => Int)
  @Column({ name: 'quest_id_9', type: 'integer' })
  questId9: number;

  @Field(type => Int)
  @Column({ name: 'quest_id_10', type: 'integer' })
  questId10: number;

  @Field(type => Int)
  @Column({ name: 'system_id_1', type: 'integer' })
  systemId1: number;

  @Field(type => Int)
  @Column({ name: 'system_id_2', type: 'integer' })
  systemId2: number;

  @Field(type => Int)
  @Column({ name: 'system_id_3', type: 'integer' })
  systemId3: number;

  @Field(type => Int)
  @Column({ name: 'system_id_4', type: 'integer' })
  systemId4: number;

  @Field(type => Int)
  @Column({ name: 'system_id_5', type: 'integer' })
  systemId5: number;

  @Field(type => [Int])
  get questId() {
    return [this.questId1, this.questId2, this.questId3, this.questId4, this.questId5, this.questId6, this.questId7, this.questId8, this.questId9, this.questId10];
  }

  @Field(type => [Int])
  get systemId() {
    return [this.systemId1, this.systemId2, this.systemId3, this.systemId4, this.systemId5];
  }

}

