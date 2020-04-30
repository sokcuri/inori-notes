import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'banner' })
export class Banner extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'banner_id', type: 'integer' })
  bannerId: number;

  @Field()
  @Column({ name: 'type', type: 'integer' })
  type: number;

  @Field()
  @Column({ name: 'system_id', type: 'integer' })
  systemId: number;

  @Field()
  @Column({ name: 'priority', type: 'integer' })
  priority: number;

  @Field()
  @Column({ name: 'start_date', type: 'text' })
  startDate: string;

  @Field()
  @Column({ name: 'end_date', type: 'text' })
  endDate: string;

  @Field()
  @Column({ name: 'sub_banner_id_1', type: 'integer' })
  subBannerId1: number;

  @Field()
  @Column({ name: 'is_show_room', type: 'integer' })
  isShowRoom: number;

}

