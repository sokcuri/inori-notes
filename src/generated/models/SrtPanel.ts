import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'srt_panel' })
export class SrtPanel extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'reading_id', type: 'integer' })
  readingId: number;

  @Field()
  @Column({ name: 'reading', type: 'text' })
  reading: string;

  @Field()
  @Column({ name: 'read_type', type: 'integer' })
  readType: number;

  @Field()
  @Column({ name: 'panel_id', type: 'integer' })
  panelId: number;

  @Field()
  @Column({ name: 'detail_text', type: 'text' })
  detailText: string;

}

