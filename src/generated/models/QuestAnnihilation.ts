import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'quest_annihilation' })
export class QuestAnnihilation extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  system_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  quest_id: number;

  @Field()
  @Column('integer')
  effect_type: number;

  @Field()
  @Column('integer')
  quest_effect_position: number;

}

