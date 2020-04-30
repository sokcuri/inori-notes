import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tips' })
export class Tips extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  value: number;

  @Field()
  @Column('integer')
  tips_index: number;

  @Field()
  @Column('text')
  title: string;

}

