import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_special_enemy' })
export class HatsuneSpecialEnemy extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'enemy_id', type: 'integer' })
  enemyId: number;

  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field()
  @Column({ name: 'mode', type: 'integer' })
  mode: number;

  @Field()
  @Column({ name: 'enemy_point', type: 'integer' })
  enemyPoint: number;

  @Field()
  @Column({ name: 'initial_position', type: 'integer' })
  initialPosition: number;

  @Field()
  @Column({ name: 'order', type: 'integer' })
  order: number;

}

