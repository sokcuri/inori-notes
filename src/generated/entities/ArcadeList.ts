import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'arcade_list' })
export class ArcadeList extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'arcade_id', type: 'integer' })
  arcadeId: number;

  @Field(type => String)
  @Column({ name: 'title', type: 'text' })
  title: string;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => Int)
  @Column({ name: 'price', type: 'integer' })
  price: number;

  @Field(type => String)
  @Column({ name: 'sheet_id', type: 'text' })
  sheetId: string;

  @Field(type => String)
  @Column({ name: 'cue_id', type: 'text' })
  cueId: string;

  @Field(type => Int)
  @Column({ name: 'where_type', type: 'integer' })
  whereType: number;

  @Field(type => String)
  @Column({ name: 'description', type: 'text' })
  description: string;

}

