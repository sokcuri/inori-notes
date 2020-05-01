import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_bg_change' })
export class HatsuneBgChange extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'area_id', type: 'integer' })
  areaId: number;

  @Field()
  @Column({ name: 'quest_id_1', type: 'integer' })
  questId1: number;

  @Field()
  @Column({ name: 'quest_id_2', type: 'integer' })
  questId2: number;

  @Field()
  @Column({ name: 'quest_id_3', type: 'integer' })
  questId3: number;

  @Field()
  @Column({ name: 'quest_id_4', type: 'integer' })
  questId4: number;

  @Field()
  @Column({ name: 'quest_id_5', type: 'integer' })
  questId5: number;

}

