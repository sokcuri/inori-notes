import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'experience_team' })
export class ExperienceTeam extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'team_level', type: 'integer' })
  teamLevel: number;

  @Field()
  @Column({ name: 'total_exp', type: 'integer' })
  totalExp: number;

  @Field()
  @Column({ name: 'max_stamina', type: 'integer' })
  maxStamina: number;

  @Field()
  @Column({ name: 'over_limit_stamina', type: 'integer' })
  overLimitStamina: number;

  @Field()
  @Column({ name: 'recover_stamina_count', type: 'integer' })
  recoverStaminaCount: number;

}

