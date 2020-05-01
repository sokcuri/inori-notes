import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'odds_name_data' })
export class OddsNameData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'odds_file', type: 'text' })
  oddsFile: string;

  @Field()
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field()
  @Column({ name: 'icon_type', type: 'integer' })
  iconType: number;

  @Field()
  @Column({ name: 'description', type: 'text' })
  description: string;

}

