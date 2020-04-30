import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tower_wave_group_data' })
export class TowerWaveGroupData extends BaseEntity {
  @Field()
  @Column('integer')
  id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  wave_group_id: number;

  @Field()
  @Column('integer')
  odds: number;

  @Field()
  @Column('integer')
  enemy_id_1: number;

  @Field()
  @Column('integer')
  enemy_id_2: number;

  @Field()
  @Column('integer')
  enemy_id_3: number;

  @Field()
  @Column('integer')
  enemy_id_4: number;

  @Field()
  @Column('integer')
  enemy_id_5: number;

}

