import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_bg_change' })
export class HatsuneBgChange extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'area_id', type: 'integer' })
  areaId: number;

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

  @Field(type => [Int])
  get questId() {
    return [this.questId1, this.questId2, this.questId3, this.questId4, this.questId5];
  }

}

