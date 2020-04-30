import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_invite_level_group' })
export class ClanInviteLevelGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  level_group_id: number;

  @Field()
  @Column('integer')
  team_level_from: number;

  @Field()
  @Column('integer')
  team_level_to: number;

}

