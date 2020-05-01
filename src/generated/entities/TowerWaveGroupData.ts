import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tower_wave_group_data' })
export class TowerWaveGroupData extends BaseEntity {
  @Field()
  @Column({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'wave_group_id', type: 'integer' })
  waveGroupId: number;

  @Field()
  @Column({ name: 'odds', type: 'integer' })
  odds: number;

  @Field()
  @Column({ name: 'enemy_id_1', type: 'integer' })
  enemyId1: number;

  @Field()
  @Column({ name: 'enemy_id_2', type: 'integer' })
  enemyId2: number;

  @Field()
  @Column({ name: 'enemy_id_3', type: 'integer' })
  enemyId3: number;

  @Field()
  @Column({ name: 'enemy_id_4', type: 'integer' })
  enemyId4: number;

  @Field()
  @Column({ name: 'enemy_id_5', type: 'integer' })
  enemyId5: number;

}

