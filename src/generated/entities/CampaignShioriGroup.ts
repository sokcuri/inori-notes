import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_shiori_group' })
export class CampaignShioriGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'shiori_group_id', type: 'integer' })
  shioriGroupId: number;

  @Field(type => Int)
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

}

