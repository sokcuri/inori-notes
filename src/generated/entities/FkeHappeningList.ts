import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'fke_happening_list' })
export class FkeHappeningList extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'happening_id', type: 'integer' })
  happeningId: number;

  @Field()
  @Column({ name: 'happening_name', type: 'text' })
  happeningName: string;

}

