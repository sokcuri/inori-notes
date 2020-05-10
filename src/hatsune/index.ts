import { BaseAction } from './BaseAction';

import {
  DamageAction,
	MoveAction,
	KnockAction,
	HealAction,
	CureAction,
	BarrierAction,
	ReflexiveAction,
	AilmentAction,
	AuraAction,
	CharmAction,
	ModeChangeAction,
	SummonAction,
	ChangeEnergyAction,
	TriggerAction,
	DamageChargeAction,
	ChargeAction,
	DecoyAction,
	NoDamageAction,
	ChangePatterAction,
	IfForChildrenAction,
	RevivalAction,
	ContinuousAttackAction,
	AdditiveAction,
	MultipleAction,
	IfForAllAction,
	SearchAreaChangeAction,
	DestroyAction,
	ContinuousAttackNearbyAction,
	EnchantLifeStealAction,
	EnchantStrikeBackAction,
	AccumulativeDamageAction,
	SealAction,
	AttackFieldAction,
	HealFieldAction,
	ChangeParameterFieldAction,
	AbnormalStateFieldAction,
	ChangeSpeedFieldAction,
	UBChangeTimeAction,
	LoopTriggerAction,
	IfHasTargetAction,
	WaveStartIdleAction,
	SkillExecCountAction,
	RatioDamageAction,
	UpperLimitAttackAction,
	RegenerationAction,
	DispelAction,
	ChannelAction,
	ChangeBodyWidthAction,
	IFExistsFieldForAllAction,
	StealthAction,
	MovePartsAction,
	CountBlindAction,
	CountDownAction,
	StopFieldAction,
	InhibitHealAction,
	AttackSealAction,
	FearAction,
	AweAction,
	LoopMotionRepeatAction,
	ToadAction,
	KnightGuardAction,
	LogBarrierAction,
	PassiveAction,
	PassiveInermittentAction,
	UnknownAction,
} from './action';

export function getAction(actionType: number): typeof BaseAction {
  switch (actionType) {
    case 1:
      return DamageAction;
    case 2:
      return MoveAction;
    case 3:
      return KnockAction;
    case 4:
      return HealAction;
    case 5:
      return CureAction;
    case 6:
      return BarrierAction;
    case 7:
      return ReflexiveAction;
    case 8:
    case 9:
    case 12:
    case 13:
      return AilmentAction;
    case 10:
      return AuraAction;
    case 11:
      return CharmAction;
    case 14:
      return ModeChangeAction;
    case 15:
      return SummonAction;
    case 16:
      return ChangeEnergyAction;
    case 17:
      return TriggerAction;
    case 18:
      return DamageChargeAction;
    case 19:
      return ChargeAction;
    case 20:
      return DecoyAction;
    case 21:
      return NoDamageAction;
    case 22:
      return ChangePatterAction;
    case 23:
      return IfForChildrenAction;
    case 24:
      return RevivalAction;
    case 25:
      return ContinuousAttackAction;
    case 26:
      return AdditiveAction;
    case 27:
      return MultipleAction;
    case 28:
      return IfForAllAction;
    case 29:
      return SearchAreaChangeAction;
    case 30:
      return DestroyAction;
    case 31:
      return ContinuousAttackNearbyAction;
    case 32:
      return EnchantLifeStealAction;
    case 33:
      return EnchantStrikeBackAction;
    case 34:
      return AccumulativeDamageAction;
    case 35:
      return SealAction;
    case 36:
      return AttackFieldAction;
    case 37:
      return HealFieldAction;
    case 38:
      return ChangeParameterFieldAction;
    case 39:
      return AbnormalStateFieldAction;
    case 40:
      return ChangeSpeedFieldAction;
    case 41:
      return UBChangeTimeAction;
    case 42:
      return LoopTriggerAction;
    case 43:
      return IfHasTargetAction;
    case 44:
      return WaveStartIdleAction;
    case 45:
      return SkillExecCountAction;
    case 46:
      return RatioDamageAction;
    case 47:
      return UpperLimitAttackAction;
    case 48:
      return RegenerationAction;
    case 49:
      return DispelAction;
    case 50:
      return ChannelAction;
    case 52:
      return ChangeBodyWidthAction;
    case 53:
      return IFExistsFieldForAllAction;
    case 54:
      return StealthAction;
    case 55:
      return MovePartsAction;
    case 56:
      return CountBlindAction;
    case 57:
      return CountDownAction;
    case 58:
      return StopFieldAction;
    case 59:
      return InhibitHealAction;
    case 60:
      return AttackSealAction;
    case 61:
      return FearAction;
    case 62:
      return AweAction;
    case 63:
      return LoopMotionRepeatAction;
    case 69:
      return ToadAction;
    case 71:
      return KnightGuardAction;
    case 73:
      return LogBarrierAction;
    case 90:
      return PassiveAction;
    case 91:
      return PassiveInermittentAction;
    default:
      return UnknownAction;
  }
}

