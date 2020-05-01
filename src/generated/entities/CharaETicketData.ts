import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'chara_e_ticket_data' })
export class CharaETicketData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'ticket_id', type: 'integer' })
  ticketId: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field(type => Int)
  @Column({ name: 'jewel_store_id', type: 'integer' })
  jewelStoreId: number;

}

