import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_invite_level_group' })
export class ClanInviteLevelGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'level_group_id', type: 'integer' })
  levelGroupId: number;

  @Field(type => Int)
  @Column({ name: 'team_level_from', type: 'integer' })
  teamLevelFrom: number;

  @Field(type => Int)
  @Column({ name: 'team_level_to', type: 'integer' })
  teamLevelTo: number;

}

