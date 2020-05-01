import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ttk_enemy' })
export class TtkEnemy extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'enemy_id', type: 'integer' })
  enemyId: number;

  @Field(type => Int)
  @Column({ name: 'score', type: 'integer' })
  score: number;

  @Field(type => Int)
  @Column({ name: 'coin', type: 'integer' })
  coin: number;

  @Field(type => Int)
  @Column({ name: 'max', type: 'integer' })
  max: number;

}

