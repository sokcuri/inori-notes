import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_chat_formation' })
export class RoomChatFormation extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'unit_1_x', type: 'integer' })
  unit1X: number;

  @Field()
  @Column({ name: 'unit_1_y', type: 'integer' })
  unit1Y: number;

  @Field()
  @Column({ name: 'unit_1_dir', type: 'integer' })
  unit1Dir: number;

  @Field()
  @Column({ name: 'unit_2_x', type: 'integer' })
  unit2X: number;

  @Field()
  @Column({ name: 'unit_2_y', type: 'integer' })
  unit2Y: number;

  @Field()
  @Column({ name: 'unit_2_dir', type: 'integer' })
  unit2Dir: number;

  @Field()
  @Column({ name: 'unit_3_x', type: 'integer', nullable: true })
  unit3X: number;

  @Field()
  @Column({ name: 'unit_3_y', type: 'integer', nullable: true })
  unit3Y: number;

  @Field()
  @Column({ name: 'unit_3_dir', type: 'integer', nullable: true })
  unit3Dir: number;

  @Field()
  @Column({ name: 'unit_4_x', type: 'integer', nullable: true })
  unit4X: number;

  @Field()
  @Column({ name: 'unit_4_y', type: 'integer', nullable: true })
  unit4Y: number;

  @Field()
  @Column({ name: 'unit_4_dir', type: 'integer', nullable: true })
  unit4Dir: number;

  @Field()
  @Column({ name: 'unit_5_x', type: 'integer', nullable: true })
  unit5X: number;

  @Field()
  @Column({ name: 'unit_5_y', type: 'integer', nullable: true })
  unit5Y: number;

  @Field()
  @Column({ name: 'unit_5_dir', type: 'integer', nullable: true })
  unit5Dir: number;

  @Field()
  @Column({ name: 'unit_num', type: 'integer' })
  unitNum: number;

  @Field()
  @Column({ name: 'unit_id1', type: 'integer', nullable: true })
  unitId1: number;

  @Field()
  @Column({ name: 'unit_id2', type: 'integer', nullable: true })
  unitId2: number;

  @Field()
  @Column({ name: 'unit_id3', type: 'integer', nullable: true })
  unitId3: number;

  @Field()
  @Column({ name: 'unit_id4', type: 'integer', nullable: true })
  unitId4: number;

  @Field()
  @Column({ name: 'unit_id5', type: 'integer', nullable: true })
  unitId5: number;

}

