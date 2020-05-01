import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'enemy_enable_voice' })
export class EnemyEnableVoice extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => Int)
  @Column({ name: 'voice_id', type: 'integer' })
  voiceId: number;

}

