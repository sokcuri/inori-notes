import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'enemy_m_parts' })
export class EnemyMParts extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'enemy_id', type: 'integer' })
  enemyId: number;

  @Field()
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field()
  @Column({ name: 'child_enemy_parameter_1', type: 'integer' })
  childEnemyParameter1: number;

  @Field()
  @Column({ name: 'child_enemy_parameter_2', type: 'integer' })
  childEnemyParameter2: number;

  @Field()
  @Column({ name: 'child_enemy_parameter_3', type: 'integer' })
  childEnemyParameter3: number;

  @Field()
  @Column({ name: 'child_enemy_parameter_4', type: 'integer' })
  childEnemyParameter4: number;

  @Field()
  @Column({ name: 'child_enemy_parameter_5', type: 'integer' })
  childEnemyParameter5: number;

}

