import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_description' })
export class HatsuneDescription extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  event_id: number;

  @Field()
  @Column('integer')
  type: number;

  @Field()
  @Column('text')
  description: string;

}

