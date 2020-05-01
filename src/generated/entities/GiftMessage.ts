import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'gift_message' })
export class GiftMessage extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => String)
  @Column({ name: 'discription', type: 'text' })
  discription: string;

  @Field(type => Int)
  @Column({ name: 'type_1', type: 'integer' })
  type1: number;

  @Field(type => Int)
  @Column({ name: 'type_2', type: 'integer' })
  type2: number;

  @Field(type => Int)
  @Column({ name: 'type_3', type: 'integer' })
  type3: number;

  @Field(type => Int)
  @Column({ name: 'type_4', type: 'integer' })
  type4: number;

}

