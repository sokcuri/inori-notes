import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'banner' })
export class Banner extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'banner_id', type: 'integer' })
  bannerId: number;

  @Field(type => Int)
  @Column({ name: 'type', type: 'integer' })
  type: number;

  @Field(type => Int)
  @Column({ name: 'system_id', type: 'integer' })
  systemId: number;

  @Field(type => Int)
  @Column({ name: 'priority', type: 'integer' })
  priority: number;

  @Field(type => String)
  @Column({ name: 'start_date', type: 'text' })
  startDate: string;

  @Field(type => String)
  @Column({ name: 'end_date', type: 'text' })
  endDate: string;

  @Field(type => Int)
  @Column({ name: 'sub_banner_id_1', type: 'integer' })
  subBannerId1: number;

  @Field(type => Int)
  @Column({ name: 'is_show_room', type: 'integer' })
  isShowRoom: number;

}

