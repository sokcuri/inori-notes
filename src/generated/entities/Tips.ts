import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tips' })
export class Tips extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'value', type: 'integer' })
  value: number;

  @Field()
  @Column({ name: 'tips_index', type: 'integer' })
  tipsIndex: number;

  @Field()
  @Column({ name: 'title', type: 'text' })
  title: string;

}

