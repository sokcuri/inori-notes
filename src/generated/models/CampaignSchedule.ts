import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_schedule' })
export class CampaignSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  campaign_category: number;

  @Field()
  @Column('real')
  value: number;

  @Field()
  @Column('integer')
  system_id: number;

  @Field()
  @Column('integer')
  icon_image: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

  @Field()
  @Column('integer')
  level_id: number;

  @Field()
  @Column('integer')
  shiori_group_id: number;

}

