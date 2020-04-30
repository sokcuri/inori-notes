import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'srt_panel' })
export class SrtPanel extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  reading_id: number;

  @Field()
  @Column('text')
  reading: string;

  @Field()
  @Column('integer')
  read_type: number;

  @Field()
  @Column('integer')
  panel_id: number;

  @Field()
  @Column('text')
  detail_text: string;

}

