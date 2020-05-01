import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tips' })
export class Tips extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'value', type: 'integer' })
  value: number;

  @Field(type => Int)
  @Column({ name: 'tips_index', type: 'integer' })
  tipsIndex: number;

  @Field(type => String)
  @Column({ name: 'title', type: 'text' })
  title: string;

}

