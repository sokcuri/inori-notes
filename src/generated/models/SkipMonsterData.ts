import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'skip_monster_data' })
export class SkipMonsterData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  quest_id: number;

  @Field()
  @Column('integer')
  area_id: number;

  @Field()
  @Column('text')
  quest_name: string;

  @Field()
  @Column('integer')
  wave_group_id_1: number;

  @Field()
  @Column('integer')
  bg_skip_id: number;

}

