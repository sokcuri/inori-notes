import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_special_enemy' })
export class HatsuneSpecialEnemy extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'enemy_id', type: 'integer' })
  enemyId: number;

  @Field(type => Int)
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => Int)
  @Column({ name: 'mode', type: 'integer' })
  mode: number;

  @Field(type => Int)
  @Column({ name: 'enemy_point', type: 'integer' })
  enemyPoint: number;

  @Field(type => Int)
  @Column({ name: 'initial_position', type: 'integer' })
  initialPosition: number;

  @Field(type => Int)
  @Column({ name: 'order', type: 'integer' })
  order: number;

}

