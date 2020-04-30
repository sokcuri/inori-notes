import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'bg_data' })
export class BgData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('text')
  view_name: string;

  @Field()
  @Column('integer')
  bg_id: number;

  @Field()
  @Column('integer')
  event_id: number;

}

