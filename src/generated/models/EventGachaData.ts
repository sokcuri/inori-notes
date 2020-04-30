import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_gacha_data' })
export class EventGachaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  gacha_id: number;

  @Field()
  @Column('integer')
  event_id: number;

  @Field()
  @Column('text')
  gacha_name: string;

  @Field()
  @Column('integer')
  item_type: number;

  @Field()
  @Column('integer')
  item_id: number;

  @Field()
  @Column('integer')
  cost: number;

  @Field()
  @Column('integer')
  repeat_step: number;

}

