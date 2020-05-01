import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_special_boss_ticket_count' })
export class HatsuneSpecialBossTicketCount extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'challenge_count_from', type: 'integer' })
  challengeCountFrom: number;

  @Field()
  @Column({ name: 'challenge_count_to', type: 'integer' })
  challengeCountTo: number;

  @Field()
  @Column({ name: 'use_ticket_num', type: 'integer' })
  useTicketNum: number;

}

