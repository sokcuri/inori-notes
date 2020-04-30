import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'odds_name_data' })
export class OddsNameData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('text')
  odds_file: string;

  @Field()
  @Column('text')
  name: string;

  @Field()
  @Column('integer')
  icon_type: number;

  @Field()
  @Column('text')
  description: string;

}

