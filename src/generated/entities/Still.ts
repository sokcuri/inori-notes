import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'still' })
export class Still extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'still_id', type: 'integer' })
  stillId: number;

  @Field(type => Int)
  @Column({ name: 'story_group_id', type: 'integer' })
  storyGroupId: number;

  @Field(type => Int)
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field(type => Int)
  @Column({ name: 'still_group_id', type: 'integer' })
  stillGroupId: number;

  @Field(type => Int)
  @Column({ name: 'vertical_still_flg', type: 'integer' })
  verticalStillFlg: number;

  @Field(type => Int)
  @Column({ name: 'position_y', type: 'integer' })
  positionY: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_1', type: 'integer' })
  unitId1: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_2', type: 'integer' })
  unitId2: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_3', type: 'integer' })
  unitId3: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_4', type: 'integer' })
  unitId4: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_5', type: 'integer' })
  unitId5: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_6', type: 'integer' })
  unitId6: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_7', type: 'integer' })
  unitId7: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_8', type: 'integer' })
  unitId8: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_9', type: 'integer' })
  unitId9: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_10', type: 'integer' })
  unitId10: number;

  @Field(type => Int)
  @Column({ name: 'facial_id', type: 'integer' })
  facialId: number;

  @Field(type => Int)
  @Column({ name: 'album_ignore', type: 'integer' })
  albumIgnore: number;

  @Field(type => [Int])
  get unitId() {
    return [this.unitId1, this.unitId2, this.unitId3, this.unitId4, this.unitId5, this.unitId6, this.unitId7, this.unitId8, this.unitId9, this.unitId10];
  }

}

