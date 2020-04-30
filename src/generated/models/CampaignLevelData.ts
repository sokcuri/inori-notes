import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_level_data' })
export class CampaignLevelData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  level_id: number;

  @Field()
  @Column('integer')
  lv_from: number;

  @Field()
  @Column('integer')
  lv_to: number;

  @Field()
  @Column('integer')
  value: number;

  @Field()
  @Column('text')
  label_color: string;

  @Field()
  @Column('text')
  frame_color: string;

}

