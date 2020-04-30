import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'guild' })
export class Guild extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  guild_id: number;

  @Field()
  @Column('text')
  guild_name: string;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column('integer')
  guild_master: number;

  @Field()
  @Column('integer')
  member1: number;

  @Field()
  @Column('integer')
  member2: number;

  @Field()
  @Column('integer')
  member3: number;

  @Field()
  @Column('integer')
  member4: number;

  @Field()
  @Column('integer')
  member5: number;

  @Field()
  @Column('integer')
  member6: number;

  @Field()
  @Column('integer')
  member7: number;

  @Field()
  @Column('integer')
  member8: number;

  @Field()
  @Column('integer')
  member9: number;

  @Field()
  @Column('integer')
  member10: number;

  @Field()
  @Column('integer')
  member11: number;

  @Field()
  @Column('integer')
  member12: number;

  @Field()
  @Column('integer')
  member13: number;

  @Field()
  @Column('integer')
  member14: number;

  @Field()
  @Column('integer')
  member15: number;

  @Field()
  @Column('integer')
  member16: number;

  @Field()
  @Column('integer')
  member17: number;

  @Field()
  @Column('integer')
  member18: number;

  @Field()
  @Column('integer')
  member19: number;

  @Field()
  @Column('integer')
  member20: number;

  @Field()
  @Column('integer')
  member21: number;

  @Field()
  @Column('integer')
  member22: number;

  @Field()
  @Column('integer')
  member23: number;

  @Field()
  @Column('integer')
  member24: number;

  @Field()
  @Column('integer')
  member25: number;

  @Field()
  @Column('integer')
  member26: number;

  @Field()
  @Column('integer')
  member27: number;

  @Field()
  @Column('integer')
  member28: number;

  @Field()
  @Column('integer')
  member29: number;

  @Field()
  @Column('integer')
  member30: number;

}

