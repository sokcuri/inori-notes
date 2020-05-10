/* eslint-disable @typescript-eslint/camelcase */
export enum SkillIconType {
  PhysicalSwing         = 1001, // 물리 스킬
  MagicalSwing          = 1002, // 마법 스킬
  BuffStat              = 1003, // 스텟 버프
  DebuffStat            = 1004, // 스텟 디버프
  RecoveryHP            = 1005, // HP 회복
  RecoveryTP            = 1006, // TP 회복
  Snare                 = 1007, // 속박 (츠무기)
  Devil                 = 1008, // 저주 및 속박, 마법 방어력 감소 (할사키)
  Charm                 = 1009, // 매혹
  Dark                  = 1010, // 암흑
  Silence               = 1011, // 침묵
  TauntAll              = 1012, // 도발 (적 전체 도발)
  Barrier               = 1013, // 무효화 배리어
  General_1014          = 1014, // unused
  DebuffField           = 1015, // 마법 방어력 감소 및 TP 상승 감소 필드, 행동속도 감소
  BuffField             = 1016, // 아군의 HP를 회복하는 필드 전개
  Summon                = 1017, // 소환 (예외. 스위트 생츄어리)
  Stun                  = 1018, // 스턴
  Sleep                 = 1019, // 수면
  Freeze                = 1020, // 동면
  Bondage               = 1021, // unused
  Poison                = 1022, // 중독 (독 상태로 만듬, 물리 방어력 감소)
  Burn                  = 1023, // 화상
  Chaos                 = 1024, // 혼돈
  PhysicalSwing2        = 2001, // 물리 스킬
  MagicalSwing2         = 2002, // 마법 스킬
  BuffStat2             = 2003, // 스텟 버프
  DebuffStat2           = 2004, // 스텟 디버프
  RecoveryHP2           = 2005, // HP 회복
  RecoveryTP2           = 2006, // TP 회복
  Snare2                = 2007, // 속박
  Devil2                = 2008, // 저주 및 속박, 마법 방어력 감소
  Charm2                = 2009, // 매혹
  Dark2                 = 2010, // 암흑
  TauntAll2             = 2012, // 도발
  Barrier2              = 2013, // 무효화 배리어
  General_2014          = 2014, // unused
  DebuffField2          = 2015, // 마법 방어력 감소 및 TP 상승 감소 필드, 행동속도 감소
  BuffField2            = 2016, // 아군의 HP를 회복하는 필드 전개
  Summon2               = 2017, // 소환 (예외. 스위트 생츄어리)
  Stun2                 = 2018, // 스턴
  Bondage2              = 2021, // unused
  Poison2               = 2022, // 중독
  Chaos2                = 2024, // 혼돈
  IncreasePhysicalATK   = 3001, // 전투 시작 시 자신의 물리 공격력 증가
  IncreasePhysicalDEF   = 3002, // 전투 시작 시 자신의 물리 방어력 증가
  IncreaseMagicalATK    = 3003, // 전투 시작 시 자신의 마법 공격력 증가
  IncreaseMagicalDEF    = 3004, // 전투 시작 시 자신의 마법 방어력 증가
  IncreaseMaximumHP     = 3005, // 전투 시작 시 자신의 최대 HP 증가
  General_3006          = 3006, // unused
  General_3007          = 3007, // unused
  General_3008          = 3008, // unused
  General_3009          = 3009, // unused
  General_3010          = 3010, // unused
  General_3011          = 3011, // unused
}