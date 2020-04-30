import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'return_specialfes_banner' })
export class ReturnSpecialfesBanner extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  gacha_id: number;

  @Field()
  @Column('integer')
  banner_id_1: number;

  @Field()
  @Column('integer')
  banner_id_2: number;

  @Field()
  @Column('integer')
  banner_id_3: number;

  @Field()
  @Column('integer')
  banner_id_4: number;

  @Field()
  @Column('integer')
  banner_id_5: number;

  @Field()
  @Column('integer')
  banner_id_6: number;

  @Field()
  @Column('integer')
  banner_id_7: number;

  @Field()
  @Column('integer')
  banner_id_8: number;

  @Field()
  @Column('integer')
  banner_id_9: number;

  @Field()
  @Column('integer')
  banner_id_10: number;

}

