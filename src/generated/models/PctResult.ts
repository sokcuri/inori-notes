import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'pct_result' })
export class PctResult extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  character_id: number;

  @Field()
  @Column('integer')
  score_from: number;

  @Field()
  @Column('integer')
  score_to: number;

  @Field()
  @Column('integer')
  comment_id_1: number;

  @Field()
  @Column('integer')
  comment_id_2: number;

  @Field()
  @Column('integer')
  comment_id_3: number;

  @Field()
  @Column('integer')
  comment_id_4: number;

  @Field()
  @Column('integer')
  comment_id_5: number;

}

