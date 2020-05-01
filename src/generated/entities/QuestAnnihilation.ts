import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'quest_annihilation' })
export class QuestAnnihilation extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'system_id', type: 'integer' })
  systemId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'quest_id', type: 'integer' })
  questId: number;

  @Field()
  @Column({ name: 'effect_type', type: 'integer' })
  effectType: number;

  @Field()
  @Column({ name: 'quest_effect_position', type: 'integer' })
  questEffectPosition: number;

}

