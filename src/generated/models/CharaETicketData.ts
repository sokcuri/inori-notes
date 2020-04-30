import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'chara_e_ticket_data' })
export class CharaETicketData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  ticket_id: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

  @Field()
  @Column('integer')
  jewel_store_id: number;

}

