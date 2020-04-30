import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_special_boss_ticket_count' })
export class HatsuneSpecialBossTicketCount extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  challenge_count_from: number;

  @Field()
  @Column('integer')
  challenge_count_to: number;

  @Field()
  @Column('integer')
  use_ticket_num: number;

}

