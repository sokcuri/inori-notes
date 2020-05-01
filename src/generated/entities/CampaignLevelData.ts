import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_level_data' })
export class CampaignLevelData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'level_id', type: 'integer' })
  levelId: number;

  @Field(type => Int)
  @Column({ name: 'lv_from', type: 'integer' })
  lvFrom: number;

  @Field(type => Int)
  @Column({ name: 'lv_to', type: 'integer' })
  lvTo: number;

  @Field(type => Int)
  @Column({ name: 'value', type: 'integer' })
  value: number;

  @Field(type => String)
  @Column({ name: 'label_color', type: 'text' })
  labelColor: string;

  @Field(type => String)
  @Column({ name: 'frame_color', type: 'text' })
  frameColor: string;

}

