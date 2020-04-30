import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'gift_message' })
export class GiftMessage extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('text')
  discription: string;

  @Field()
  @Column('integer')
  type_1: number;

  @Field()
  @Column('integer')
  type_2: number;

  @Field()
  @Column('integer')
  type_3: number;

  @Field()
  @Column('integer')
  type_4: number;

}

