import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_schedule' })
export class CampaignSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'campaign_category', type: 'integer' })
  campaignCategory: number;

  @Field()
  @Column({ name: 'value', type: 'real' })
  value: number;

  @Field()
  @Column({ name: 'system_id', type: 'integer' })
  systemId: number;

  @Field()
  @Column({ name: 'icon_image', type: 'integer' })
  iconImage: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field()
  @Column({ name: 'level_id', type: 'integer' })
  levelId: number;

  @Field()
  @Column({ name: 'shiori_group_id', type: 'integer' })
  shioriGroupId: number;

}

