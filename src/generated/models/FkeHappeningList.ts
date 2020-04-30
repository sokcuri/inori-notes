import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'fke_happening_list' })
export class FkeHappeningList extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  happening_id: number;

  @Field()
  @Column('text')
  happening_name: string;

}

