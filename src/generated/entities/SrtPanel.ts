import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'srt_panel' })
export class SrtPanel extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'reading_id', type: 'integer' })
  readingId: number;

  @Field(type => String)
  @Column({ name: 'reading', type: 'text' })
  reading: string;

  @Field(type => Int)
  @Column({ name: 'read_type', type: 'integer' })
  readType: number;

  @Field(type => Int)
  @Column({ name: 'panel_id', type: 'integer' })
  panelId: number;

  @Field(type => String)
  @Column({ name: 'detail_text', type: 'text' })
  detailText: string;

}

