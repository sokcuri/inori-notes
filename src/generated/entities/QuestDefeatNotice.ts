import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'quest_defeat_notice' })
export class QuestDefeatNotice extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'image_id', type: 'integer' })
  imageId: number;

  @Field(type => Int)
  @Column({ name: 'required_team_level', type: 'integer' })
  requiredTeamLevel: number;

  @Field(type => Int)
  @Column({ name: 'required_quest_id', type: 'integer' })
  requiredQuestId: number;

}

