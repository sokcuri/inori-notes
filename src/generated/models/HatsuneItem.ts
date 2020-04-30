import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_item' })
export class HatsuneItem extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  event_id: number;

  @Field()
  @Column('integer')
  boss_ticket_id: number;

  @Field()
  @Column('integer')
  gacha_ticket_id: number;

  @Field()
  @Column('integer')
  unit_material_id_1: number;

  @Field()
  @Column('integer')
  unit_material_id_2: number;

  @Field()
  @Column('integer')
  unit_material_id_3: number;

  @Field()
  @Column('integer')
  unit_material_id_4: number;

  @Field()
  @Column('integer')
  unit_material_id_5: number;

  @Field()
  @Column('integer')
  unit_material_id_6: number;

  @Field()
  @Column('integer')
  unit_material_id_7: number;

  @Field()
  @Column('integer')
  unit_material_id_8: number;

  @Field()
  @Column('integer')
  unit_material_id_9: number;

  @Field()
  @Column('integer')
  unit_material_id_10: number;

}

