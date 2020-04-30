import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_chat_formation' })
export class RoomChatFormation extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  unit_1_x: number;

  @Field()
  @Column('integer')
  unit_1_y: number;

  @Field()
  @Column('integer')
  unit_1_dir: number;

  @Field()
  @Column('integer')
  unit_2_x: number;

  @Field()
  @Column('integer')
  unit_2_y: number;

  @Field()
  @Column('integer')
  unit_2_dir: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  unit_3_x?: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  unit_3_y?: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  unit_3_dir?: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  unit_4_x?: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  unit_4_y?: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  unit_4_dir?: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  unit_5_x?: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  unit_5_y?: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  unit_5_dir?: number;

  @Field()
  @Column('integer')
  unit_num: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  unit_id1?: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  unit_id2?: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  unit_id3?: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  unit_id4?: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  unit_id5?: number;

}

