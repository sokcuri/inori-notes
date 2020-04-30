import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_bg_change' })
export class HatsuneBgChange extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  area_id: number;

  @Field()
  @Column('integer')
  quest_id_1: number;

  @Field()
  @Column('integer')
  quest_id_2: number;

  @Field()
  @Column('integer')
  quest_id_3: number;

  @Field()
  @Column('integer')
  quest_id_4: number;

  @Field()
  @Column('integer')
  quest_id_5: number;

}

