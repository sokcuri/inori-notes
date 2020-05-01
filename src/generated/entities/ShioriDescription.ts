import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'shiori_description' })
export class ShioriDescription extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'type', type: 'integer' })
  type: number;

  @Field(type => String)
  @Column({ name: 'description', type: 'text' })
  description: string;

}

