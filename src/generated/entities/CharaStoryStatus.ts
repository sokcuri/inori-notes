import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'chara_story_status' })
export class CharaStoryStatus extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field(type => String)
  @Column({ name: 'unlock_story_name', type: 'text' })
  unlockStoryName: string;

  @Field(type => Int)
  @Column({ name: 'status_type_1', type: 'integer' })
  statusType1: number;

  @Field(type => Int)
  @Column({ name: 'status_rate_1', type: 'integer' })
  statusRate1: number;

  @Field(type => Int)
  @Column({ name: 'status_type_2', type: 'integer' })
  statusType2: number;

  @Field(type => Int)
  @Column({ name: 'status_rate_2', type: 'integer' })
  statusRate2: number;

  @Field(type => Int)
  @Column({ name: 'status_type_3', type: 'integer' })
  statusType3: number;

  @Field(type => Int)
  @Column({ name: 'status_rate_3', type: 'integer' })
  statusRate3: number;

  @Field(type => Int)
  @Column({ name: 'status_type_4', type: 'integer' })
  statusType4: number;

  @Field(type => Int)
  @Column({ name: 'status_rate_4', type: 'integer' })
  statusRate4: number;

  @Field(type => Int)
  @Column({ name: 'status_type_5', type: 'integer' })
  statusType5: number;

  @Field(type => Int)
  @Column({ name: 'status_rate_5', type: 'integer' })
  statusRate5: number;

  @Field(type => Int)
  @Column({ name: 'chara_id_1', type: 'integer' })
  charaId1: number;

  @Field(type => Int)
  @Column({ name: 'chara_id_2', type: 'integer' })
  charaId2: number;

  @Field(type => Int)
  @Column({ name: 'chara_id_3', type: 'integer' })
  charaId3: number;

  @Field(type => Int)
  @Column({ name: 'chara_id_4', type: 'integer' })
  charaId4: number;

  @Field(type => Int)
  @Column({ name: 'chara_id_5', type: 'integer' })
  charaId5: number;

  @Field(type => Int)
  @Column({ name: 'chara_id_6', type: 'integer' })
  charaId6: number;

  @Field(type => Int)
  @Column({ name: 'chara_id_7', type: 'integer' })
  charaId7: number;

  @Field(type => Int)
  @Column({ name: 'chara_id_8', type: 'integer' })
  charaId8: number;

  @Field(type => Int)
  @Column({ name: 'chara_id_9', type: 'integer' })
  charaId9: number;

  @Field(type => Int)
  @Column({ name: 'chara_id_10', type: 'integer' })
  charaId10: number;

  @Field(type => [Int])
  get statusType() {
    return [this.statusType1, this.statusType2, this.statusType3, this.statusType4, this.statusType5];
  }

  @Field(type => [Int])
  get statusRate() {
    return [this.statusRate1, this.statusRate2, this.statusRate3, this.statusRate4, this.statusRate5];
  }

  @Field(type => [Int])
  get charaId() {
    return [this.charaId1, this.charaId2, this.charaId3, this.charaId4, this.charaId5, this.charaId6, this.charaId7, this.charaId8, this.charaId9, this.charaId10];
  }

}

