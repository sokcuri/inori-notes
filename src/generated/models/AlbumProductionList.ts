import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'album_production_list' })
export class AlbumProductionList extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  unit_id: number;

  @Field()
  @Column('integer')
  type: number;

  @Field()
  @Column('text')
  title: string;

  @Field()
  @Column('text')
  description: string;

}

