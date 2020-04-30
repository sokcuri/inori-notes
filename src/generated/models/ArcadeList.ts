import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'arcade_list' })
export class ArcadeList extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'arcade_id', type: 'integer' })
  arcadeId: number;

  @Field()
  @Column({ name: 'title', type: 'text' })
  title: string;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'price', type: 'integer' })
  price: number;

  @Field()
  @Column({ name: 'sheet_id', type: 'text' })
  sheetId: string;

  @Field()
  @Column({ name: 'cue_id', type: 'text' })
  cueId: string;

  @Field()
  @Column({ name: 'where_type', type: 'integer' })
  whereType: number;

  @Field()
  @Column({ name: 'description', type: 'text' })
  description: string;

}

