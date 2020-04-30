import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'still' })
export class Still extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'still_id', type: 'integer' })
  stillId: number;

  @Field()
  @Column({ name: 'story_group_id', type: 'integer' })
  storyGroupId: number;

  @Field()
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field()
  @Column({ name: 'still_group_id', type: 'integer' })
  stillGroupId: number;

  @Field()
  @Column({ name: 'vertical_still_flg', type: 'integer' })
  verticalStillFlg: number;

  @Field()
  @Column({ name: 'position_y', type: 'integer' })
  positionY: number;

  @Field()
  @Column({ name: 'unit_id_1', type: 'integer' })
  unitId1: number;

  @Field()
  @Column({ name: 'unit_id_2', type: 'integer' })
  unitId2: number;

  @Field()
  @Column({ name: 'unit_id_3', type: 'integer' })
  unitId3: number;

  @Field()
  @Column({ name: 'unit_id_4', type: 'integer' })
  unitId4: number;

  @Field()
  @Column({ name: 'unit_id_5', type: 'integer' })
  unitId5: number;

  @Field()
  @Column({ name: 'unit_id_6', type: 'integer' })
  unitId6: number;

  @Field()
  @Column({ name: 'unit_id_7', type: 'integer' })
  unitId7: number;

  @Field()
  @Column({ name: 'unit_id_8', type: 'integer' })
  unitId8: number;

  @Field()
  @Column({ name: 'unit_id_9', type: 'integer' })
  unitId9: number;

  @Field()
  @Column({ name: 'unit_id_10', type: 'integer' })
  unitId10: number;

  @Field()
  @Column({ name: 'facial_id', type: 'integer' })
  facialId: number;

  @Field()
  @Column({ name: 'album_ignore', type: 'integer' })
  albumIgnore: number;

}

