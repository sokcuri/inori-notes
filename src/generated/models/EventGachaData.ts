import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_gacha_data' })
export class EventGachaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'gacha_id', type: 'integer' })
  gachaId: number;

  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field()
  @Column({ name: 'gacha_name', type: 'text' })
  gachaName: string;

  @Field()
  @Column({ name: 'item_type', type: 'integer' })
  itemType: number;

  @Field()
  @Column({ name: 'item_id', type: 'integer' })
  itemId: number;

  @Field()
  @Column({ name: 'cost', type: 'integer' })
  cost: number;

  @Field()
  @Column({ name: 'repeat_step', type: 'integer' })
  repeatStep: number;

}

