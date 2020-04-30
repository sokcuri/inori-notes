import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_relay_data' })
export class HatsuneRelayData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  relay_story_id: number;

  @Field()
  @Column('integer')
  is_enable_read: number;

  @Field()
  @Column('integer')
  condition_quest_id: number;

  @Field()
  @Column('integer')
  story_seq: number;

  @Field()
  @Column('text')
  sub_title: string;

}

