import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'odds_name_data' })
export class OddsNameData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => String)
  @Column({ name: 'odds_file', type: 'text' })
  oddsFile: string;

  @Field(type => String)
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field(type => Int)
  @Column({ name: 'icon_type', type: 'integer' })
  iconType: number;

  @Field(type => String)
  @Column({ name: 'description', type: 'text' })
  description: string;

}

