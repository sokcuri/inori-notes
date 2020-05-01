import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'equipment_donation' })
export class EquipmentDonation extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'team_level', type: 'integer' })
  teamLevel: number;

  @Field(type => Int)
  @Column({ name: 'donation_num_once', type: 'integer' })
  donationNumOnce: number;

  @Field(type => Int)
  @Column({ name: 'donation_num_daily', type: 'integer' })
  donationNumDaily: number;

  @Field(type => Int)
  @Column({ name: 'request_num_once', type: 'integer' })
  requestNumOnce: number;

}

