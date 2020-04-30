import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'equipment_donation' })
export class EquipmentDonation extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  team_level: number;

  @Field()
  @Column('integer')
  donation_num_once: number;

  @Field()
  @Column('integer')
  donation_num_daily: number;

  @Field()
  @Column('integer')
  request_num_once: number;

}

