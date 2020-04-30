import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'banner' })
export class Banner extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  banner_id: number;

  @Field()
  @Column('integer')
  type: number;

  @Field()
  @Column('integer')
  system_id: number;

  @Field()
  @Column('integer')
  priority: number;

  @Field()
  @Column('text')
  start_date: string;

  @Field()
  @Column('text')
  end_date: string;

  @Field()
  @Column('integer')
  sub_banner_id_1: number;

  @Field()
  @Column('integer')
  is_show_room: number;

}

