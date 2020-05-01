import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ttk_enemy' })
export class TtkEnemy extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'enemy_id', type: 'integer' })
  enemyId: number;

  @Field()
  @Column({ name: 'score', type: 'integer' })
  score: number;

  @Field()
  @Column({ name: 'coin', type: 'integer' })
  coin: number;

  @Field()
  @Column({ name: 'max', type: 'integer' })
  max: number;

}

