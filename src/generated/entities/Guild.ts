import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'guild' })
export class Guild extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'guild_id', type: 'integer' })
  guildId: number;

  @Field(type => String)
  @Column({ name: 'guild_name', type: 'text' })
  guildName: string;

  @Field(type => String)
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field(type => Int)
  @Column({ name: 'guild_master', type: 'integer' })
  guildMaster: number;

  @Field(type => Int)
  @Column({ name: 'member1', type: 'integer' })
  member1: number;

  @Field(type => Int)
  @Column({ name: 'member2', type: 'integer' })
  member2: number;

  @Field(type => Int)
  @Column({ name: 'member3', type: 'integer' })
  member3: number;

  @Field(type => Int)
  @Column({ name: 'member4', type: 'integer' })
  member4: number;

  @Field(type => Int)
  @Column({ name: 'member5', type: 'integer' })
  member5: number;

  @Field(type => Int)
  @Column({ name: 'member6', type: 'integer' })
  member6: number;

  @Field(type => Int)
  @Column({ name: 'member7', type: 'integer' })
  member7: number;

  @Field(type => Int)
  @Column({ name: 'member8', type: 'integer' })
  member8: number;

  @Field(type => Int)
  @Column({ name: 'member9', type: 'integer' })
  member9: number;

  @Field(type => Int)
  @Column({ name: 'member10', type: 'integer' })
  member10: number;

  @Field(type => Int)
  @Column({ name: 'member11', type: 'integer' })
  member11: number;

  @Field(type => Int)
  @Column({ name: 'member12', type: 'integer' })
  member12: number;

  @Field(type => Int)
  @Column({ name: 'member13', type: 'integer' })
  member13: number;

  @Field(type => Int)
  @Column({ name: 'member14', type: 'integer' })
  member14: number;

  @Field(type => Int)
  @Column({ name: 'member15', type: 'integer' })
  member15: number;

  @Field(type => Int)
  @Column({ name: 'member16', type: 'integer' })
  member16: number;

  @Field(type => Int)
  @Column({ name: 'member17', type: 'integer' })
  member17: number;

  @Field(type => Int)
  @Column({ name: 'member18', type: 'integer' })
  member18: number;

  @Field(type => Int)
  @Column({ name: 'member19', type: 'integer' })
  member19: number;

  @Field(type => Int)
  @Column({ name: 'member20', type: 'integer' })
  member20: number;

  @Field(type => Int)
  @Column({ name: 'member21', type: 'integer' })
  member21: number;

  @Field(type => Int)
  @Column({ name: 'member22', type: 'integer' })
  member22: number;

  @Field(type => Int)
  @Column({ name: 'member23', type: 'integer' })
  member23: number;

  @Field(type => Int)
  @Column({ name: 'member24', type: 'integer' })
  member24: number;

  @Field(type => Int)
  @Column({ name: 'member25', type: 'integer' })
  member25: number;

  @Field(type => Int)
  @Column({ name: 'member26', type: 'integer' })
  member26: number;

  @Field(type => Int)
  @Column({ name: 'member27', type: 'integer' })
  member27: number;

  @Field(type => Int)
  @Column({ name: 'member28', type: 'integer' })
  member28: number;

  @Field(type => Int)
  @Column({ name: 'member29', type: 'integer' })
  member29: number;

  @Field(type => Int)
  @Column({ name: 'member30', type: 'integer' })
  member30: number;

}

