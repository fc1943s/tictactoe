import { Union, Record } from "./fable_modules/fable-library-ts/Types.js";
import { lambda_type, unit_type, bool_type, class_type, array_type, tuple_type, string_type, int32_type, union_type, record_type, obj_type, TypeInfo } from "./fable_modules/fable-library-ts/Reflection.js";
import { op_UnaryNegation_Int32, int32 } from "./fable_modules/fable-library-ts/Int32.js";
import { createStoreon } from "storeon";
import { int64, fromBits, op_Division, op_Subtraction, toString } from "./fable_modules/fable-library-ts/Long.js";
import { getTicks, utcNow } from "./fable_modules/fable-library-ts/Date.js";
import { Index, For, createEffect, on, createSignal, createComponent, onCleanup } from "solid-js";
import { fill } from "./fable_modules/fable-library-ts/Array.js";
import { Input, useColorMode, RadioGroup, Radio, Anchor, Tr, Td, Stack, IconButton, Icon, Button, Table, Tbody, Checkbox, Box, hope } from "@hope-ui/solid";
import { int32ToString, uncurry, createObj } from "./fable_modules/fable-library-ts/Util.js";
import { useStoreon } from "@storeon/solidjs";
import { interpolate, toConsole } from "./fable_modules/fable-library-ts/String.js";
import { BiRegularMinus, BiRegularPlus, BiRegularLinkExternal, BiRegularUndo, BiRegularUpArrow, BiRegularDownArrow, BiRegularRefresh } from "solid-icons/bi";
import { nonSeeded } from "./fable_modules/fable-library-ts/Random.js";

export class Mut0 extends Record {
    l0: any;
    constructor(l0: any) {
        super();
        this.l0 = l0;
    }
}

export function Mut0$reflection(): TypeInfo {
    return record_type("Components_spi.Mut0", [], Mut0, () => [["l0", obj_type]]);
}

export const enum US1_Tag {
    US1_0 = 0,
    US1_1 = 1
}

export type US1_Fields = [[], []];

export type US1 = US1_Cons<US1_Tag.US1_0> | US1_Cons<US1_Tag.US1_1>;

export function US1_US1_0() {
    return new US1_Cons<US1_Tag.US1_0>(US1_Tag.US1_0, []);
}

export function US1_US1_1() {
    return new US1_Cons<US1_Tag.US1_1>(US1_Tag.US1_1, []);
}

export class US1_Cons<Tag extends keyof US1_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US1_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US1_0", "US1_1"];
    }
}

export function US1$reflection(): TypeInfo {
    return union_type("Components_spi.US1", [], US1_Cons, () => [[], []]);
}

export const enum US0_Tag {
    US0_0 = 0,
    US0_1 = 1
}

export type US0_Fields = [[], [US1]];

export type US0 = US0_Cons<US0_Tag.US0_0> | US0_Cons<US0_Tag.US0_1>;

export function US0_US0_0() {
    return new US0_Cons<US0_Tag.US0_0>(US0_Tag.US0_0, []);
}

export function US0_US0_1(f1_0: US1) {
    return new US0_Cons<US0_Tag.US0_1>(US0_Tag.US0_1, [f1_0]);
}

export class US0_Cons<Tag extends keyof US0_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US0_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US0_0", "US0_1"];
    }
}

export function US0$reflection(): TypeInfo {
    return union_type("Components_spi.US0", [], US0_Cons, () => [[], [["f1_0", US1$reflection()]]]);
}

export const enum US2_Tag {
    US2_0 = 0,
    US2_1 = 1
}

export type US2_Fields = [[], [int32]];

export type US2 = US2_Cons<US2_Tag.US2_0> | US2_Cons<US2_Tag.US2_1>;

export function US2_US2_0() {
    return new US2_Cons<US2_Tag.US2_0>(US2_Tag.US2_0, []);
}

export function US2_US2_1(f1_0: int32) {
    return new US2_Cons<US2_Tag.US2_1>(US2_Tag.US2_1, [f1_0]);
}

export class US2_Cons<Tag extends keyof US2_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US2_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US2_0", "US2_1"];
    }
}

export function US2$reflection(): TypeInfo {
    return union_type("Components_spi.US2", [], US2_Cons, () => [[], [["f1_0", int32_type]]]);
}

export const enum US3_Tag {
    US3_0 = 0,
    US3_1 = 1
}

export type US3_Fields = [[], [string]];

export type US3 = US3_Cons<US3_Tag.US3_0> | US3_Cons<US3_Tag.US3_1>;

export function US3_US3_0() {
    return new US3_Cons<US3_Tag.US3_0>(US3_Tag.US3_0, []);
}

export function US3_US3_1(f1_0: string) {
    return new US3_Cons<US3_Tag.US3_1>(US3_Tag.US3_1, [f1_0]);
}

export class US3_Cons<Tag extends keyof US3_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US3_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US3_0", "US3_1"];
    }
}

export function US3$reflection(): TypeInfo {
    return union_type("Components_spi.US3", [], US3_Cons, () => [[], [["f1_0", string_type]]]);
}

export const enum US4_Tag {
    US4_0 = 0,
    US4_1 = 1
}

export type US4_Fields = [[], []];

export type US4 = US4_Cons<US4_Tag.US4_0> | US4_Cons<US4_Tag.US4_1>;

export function US4_US4_0() {
    return new US4_Cons<US4_Tag.US4_0>(US4_Tag.US4_0, []);
}

export function US4_US4_1() {
    return new US4_Cons<US4_Tag.US4_1>(US4_Tag.US4_1, []);
}

export class US4_Cons<Tag extends keyof US4_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US4_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US4_0", "US4_1"];
    }
}

export function US4$reflection(): TypeInfo {
    return union_type("Components_spi.US4", [], US4_Cons, () => [[], []]);
}

export class Mut1 extends Record {
    l0: [US0, string, string, string][];
    l1: US2;
    l2: US3;
    l3: US3;
    l4: [US4, int32, string, string][];
    l5: [US4, US4][];
    l6: [int32, any][];
    l7: [int32, any][];
    l8: [int32, int32][];
    l9: US2;
    constructor(l0: [US0, string, string, string][], l1: US2, l2: US3, l3: US3, l4: [US4, int32, string, string][], l5: [US4, US4][], l6: [int32, any][], l7: [int32, any][], l8: [int32, int32][], l9: US2) {
        super();
        this.l0 = l0;
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
        this.l4 = l4;
        this.l5 = l5;
        this.l6 = l6;
        this.l7 = l7;
        this.l8 = l8;
        this.l9 = l9;
    }
}

export function Mut1$reflection(): TypeInfo {
    return record_type("Components_spi.Mut1", [], Mut1, () => [["l0", array_type(tuple_type(US0$reflection(), string_type, string_type, string_type))], ["l1", US2$reflection()], ["l2", US3$reflection()], ["l3", US3$reflection()], ["l4", array_type(tuple_type(US4$reflection(), int32_type, string_type, string_type))], ["l5", array_type(tuple_type(US4$reflection(), US4$reflection()))], ["l6", array_type(tuple_type(int32_type, obj_type))], ["l7", array_type(tuple_type(int32_type, obj_type))], ["l8", array_type(tuple_type(int32_type, int32_type))], ["l9", US2$reflection()]]);
}

export class Mut2 {
    constructor() {
    }
}

export function Mut2$reflection(): TypeInfo {
    return class_type("Components_spi.Mut2", void 0, Mut2);
}

export function Mut2_$ctor(): Mut2 {
    return new Mut2();
}

export const enum US5_Tag {
    US5_0 = 0,
    US5_1 = 1
}

export type US5_Fields = [[], [any]];

export type US5 = US5_Cons<US5_Tag.US5_0> | US5_Cons<US5_Tag.US5_1>;

export function US5_US5_0() {
    return new US5_Cons<US5_Tag.US5_0>(US5_Tag.US5_0, []);
}

export function US5_US5_1(f1_0: any) {
    return new US5_Cons<US5_Tag.US5_1>(US5_Tag.US5_1, [f1_0]);
}

export class US5_Cons<Tag extends keyof US5_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US5_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US5_0", "US5_1"];
    }
}

export function US5$reflection(): TypeInfo {
    return union_type("Components_spi.US5", [], US5_Cons, () => [[], [["f1_0", class_type("Fable.Core.JS.Function")]]]);
}

export const enum US6_Tag {
    US6_0 = 0,
    US6_1 = 1
}

export type US6_Fields = [[], [boolean]];

export type US6 = US6_Cons<US6_Tag.US6_0> | US6_Cons<US6_Tag.US6_1>;

export function US6_US6_0() {
    return new US6_Cons<US6_Tag.US6_0>(US6_Tag.US6_0, []);
}

export function US6_US6_1(f1_0: boolean) {
    return new US6_Cons<US6_Tag.US6_1>(US6_Tag.US6_1, [f1_0]);
}

export class US6_Cons<Tag extends keyof US6_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US6_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US6_0", "US6_1"];
    }
}

export function US6$reflection(): TypeInfo {
    return union_type("Components_spi.US6", [], US6_Cons, () => [[], [["f1_0", bool_type]]]);
}

export const enum US7_Tag {
    US7_0 = 0,
    US7_1 = 1
}

export type US7_Fields = [[], [() => any[]]];

export type US7 = US7_Cons<US7_Tag.US7_0> | US7_Cons<US7_Tag.US7_1>;

export function US7_US7_0() {
    return new US7_Cons<US7_Tag.US7_0>(US7_Tag.US7_0, []);
}

export function US7_US7_1(f1_0: () => any[]) {
    return new US7_Cons<US7_Tag.US7_1>(US7_Tag.US7_1, [f1_0]);
}

export class US7_Cons<Tag extends keyof US7_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US7_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US7_0", "US7_1"];
    }
}

export function US7$reflection(): TypeInfo {
    return union_type("Components_spi.US7", [], US7_Cons, () => [[], [["f1_0", lambda_type(unit_type, array_type(class_type("Fable.Core.JSX.Element")))]]]);
}

export const enum US8_Tag {
    US8_0 = 0,
    US8_1 = 1
}

export type US8_Fields = [[], [any]];

export type US8 = US8_Cons<US8_Tag.US8_0> | US8_Cons<US8_Tag.US8_1>;

export function US8_US8_0() {
    return new US8_Cons<US8_Tag.US8_0>(US8_Tag.US8_0, []);
}

export function US8_US8_1(f1_0: any) {
    return new US8_Cons<US8_Tag.US8_1>(US8_Tag.US8_1, [f1_0]);
}

export class US8_Cons<Tag extends keyof US8_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US8_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US8_0", "US8_1"];
    }
}

export function US8$reflection(): TypeInfo {
    return union_type("Components_spi.US8", [], US8_Cons, () => [[], [["f1_0", obj_type]]]);
}

export const enum US9_Tag {
    US9_0 = 0,
    US9_1 = 1
}

export type US9_Fields = [[], [any[]]];

export type US9 = US9_Cons<US9_Tag.US9_0> | US9_Cons<US9_Tag.US9_1>;

export function US9_US9_0() {
    return new US9_Cons<US9_Tag.US9_0>(US9_Tag.US9_0, []);
}

export function US9_US9_1(f1_0: any[]) {
    return new US9_Cons<US9_Tag.US9_1>(US9_Tag.US9_1, [f1_0]);
}

export class US9_Cons<Tag extends keyof US9_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US9_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US9_0", "US9_1"];
    }
}

export function US9$reflection(): TypeInfo {
    return union_type("Components_spi.US9", [], US9_Cons, () => [[], [["f1_0", array_type(obj_type)]]]);
}

export const enum US10_Tag {
    US10_0 = 0,
    US10_1 = 1
}

export type US10_Fields = [[], [any]];

export type US10 = US10_Cons<US10_Tag.US10_0> | US10_Cons<US10_Tag.US10_1>;

export function US10_US10_0() {
    return new US10_Cons<US10_Tag.US10_0>(US10_Tag.US10_0, []);
}

export function US10_US10_1(f1_0: any) {
    return new US10_Cons<US10_Tag.US10_1>(US10_Tag.US10_1, [f1_0]);
}

export class US10_Cons<Tag extends keyof US10_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US10_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US10_0", "US10_1"];
    }
}

export function US10$reflection(): TypeInfo {
    return union_type("Components_spi.US10", [], US10_Cons, () => [[], [["f1_0", class_type("Fable.Core.JSX.Element")]]]);
}

export const enum US11_Tag {
    US11_0 = 0,
    US11_1 = 1
}

export type US11_Fields = [[], [(arg0: any) => void]];

export type US11 = US11_Cons<US11_Tag.US11_0> | US11_Cons<US11_Tag.US11_1>;

export function US11_US11_0() {
    return new US11_Cons<US11_Tag.US11_0>(US11_Tag.US11_0, []);
}

export function US11_US11_1(f1_0: (arg0: any) => void) {
    return new US11_Cons<US11_Tag.US11_1>(US11_Tag.US11_1, [f1_0]);
}

export class US11_Cons<Tag extends keyof US11_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US11_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US11_0", "US11_1"];
    }
}

export function US11$reflection(): TypeInfo {
    return union_type("Components_spi.US11", [], US11_Cons, () => [[], [["f1_0", lambda_type(obj_type, unit_type)]]]);
}

export const enum US12_Tag {
    US12_0 = 0,
    US12_1 = 1
}

export type US12_Fields = [[], [() => void]];

export type US12 = US12_Cons<US12_Tag.US12_0> | US12_Cons<US12_Tag.US12_1>;

export function US12_US12_0() {
    return new US12_Cons<US12_Tag.US12_0>(US12_Tag.US12_0, []);
}

export function US12_US12_1(f1_0: () => void) {
    return new US12_Cons<US12_Tag.US12_1>(US12_Tag.US12_1, [f1_0]);
}

export class US12_Cons<Tag extends keyof US12_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US12_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US12_0", "US12_1"];
    }
}

export function US12$reflection(): TypeInfo {
    return union_type("Components_spi.US12", [], US12_Cons, () => [[], [["f1_0", lambda_type(unit_type, unit_type)]]]);
}

export class Mut3 extends Record {
    l0: US3;
    l1: US3;
    l2: US3;
    l3: US5;
    l4: US3;
    l5: US3;
    l6: US3;
    l7: US3;
    l8: US3;
    l9: US3;
    l10: US6;
    l11: US7;
    l12: US3;
    l13: US3;
    l14: US6;
    l15: US8;
    l16: US3;
    l17: US3;
    l18: US3;
    l19: US9;
    l20: US6;
    l21: US3;
    l22: US3;
    l23: US3;
    l24: US3;
    l25: US3;
    l26: US10;
    l27: US3;
    l28: US3;
    l29: US3;
    l30: US10;
    l31: US3;
    l32: US3;
    l33: US3;
    l34: US3;
    l35: US3;
    l36: US3;
    l37: US3;
    l38: US3;
    l39: US11;
    l40: US12;
    l41: US11;
    l42: US3;
    l43: US3;
    l44: US3;
    l45: US3;
    l46: US3;
    l47: US3;
    l48: US3;
    l49: US3;
    l50: US3;
    l51: US3;
    l52: US3;
    l53: US3;
    l54: US3;
    l55: US3;
    l56: US3;
    l57: US3;
    l58: US10;
    l59: US3;
    l60: US3;
    l61: US8;
    l62: US3;
    l63: US2;
    l64: US3;
    constructor(l0: US3, l1: US3, l2: US3, l3: US5, l4: US3, l5: US3, l6: US3, l7: US3, l8: US3, l9: US3, l10: US6, l11: US7, l12: US3, l13: US3, l14: US6, l15: US8, l16: US3, l17: US3, l18: US3, l19: US9, l20: US6, l21: US3, l22: US3, l23: US3, l24: US3, l25: US3, l26: US10, l27: US3, l28: US3, l29: US3, l30: US10, l31: US3, l32: US3, l33: US3, l34: US3, l35: US3, l36: US3, l37: US3, l38: US3, l39: US11, l40: US12, l41: US11, l42: US3, l43: US3, l44: US3, l45: US3, l46: US3, l47: US3, l48: US3, l49: US3, l50: US3, l51: US3, l52: US3, l53: US3, l54: US3, l55: US3, l56: US3, l57: US3, l58: US10, l59: US3, l60: US3, l61: US8, l62: US3, l63: US2, l64: US3) {
        super();
        this.l0 = l0;
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
        this.l4 = l4;
        this.l5 = l5;
        this.l6 = l6;
        this.l7 = l7;
        this.l8 = l8;
        this.l9 = l9;
        this.l10 = l10;
        this.l11 = l11;
        this.l12 = l12;
        this.l13 = l13;
        this.l14 = l14;
        this.l15 = l15;
        this.l16 = l16;
        this.l17 = l17;
        this.l18 = l18;
        this.l19 = l19;
        this.l20 = l20;
        this.l21 = l21;
        this.l22 = l22;
        this.l23 = l23;
        this.l24 = l24;
        this.l25 = l25;
        this.l26 = l26;
        this.l27 = l27;
        this.l28 = l28;
        this.l29 = l29;
        this.l30 = l30;
        this.l31 = l31;
        this.l32 = l32;
        this.l33 = l33;
        this.l34 = l34;
        this.l35 = l35;
        this.l36 = l36;
        this.l37 = l37;
        this.l38 = l38;
        this.l39 = l39;
        this.l40 = l40;
        this.l41 = l41;
        this.l42 = l42;
        this.l43 = l43;
        this.l44 = l44;
        this.l45 = l45;
        this.l46 = l46;
        this.l47 = l47;
        this.l48 = l48;
        this.l49 = l49;
        this.l50 = l50;
        this.l51 = l51;
        this.l52 = l52;
        this.l53 = l53;
        this.l54 = l54;
        this.l55 = l55;
        this.l56 = l56;
        this.l57 = l57;
        this.l58 = l58;
        this.l59 = l59;
        this.l60 = l60;
        this.l61 = l61;
        this.l62 = l62;
        this.l63 = l63;
        this.l64 = l64;
    }
}

export function Mut3$reflection(): TypeInfo {
    return record_type("Components_spi.Mut3", [], Mut3, () => [["l0", US3$reflection()], ["l1", US3$reflection()], ["l2", US3$reflection()], ["l3", US5$reflection()], ["l4", US3$reflection()], ["l5", US3$reflection()], ["l6", US3$reflection()], ["l7", US3$reflection()], ["l8", US3$reflection()], ["l9", US3$reflection()], ["l10", US6$reflection()], ["l11", US7$reflection()], ["l12", US3$reflection()], ["l13", US3$reflection()], ["l14", US6$reflection()], ["l15", US8$reflection()], ["l16", US3$reflection()], ["l17", US3$reflection()], ["l18", US3$reflection()], ["l19", US9$reflection()], ["l20", US6$reflection()], ["l21", US3$reflection()], ["l22", US3$reflection()], ["l23", US3$reflection()], ["l24", US3$reflection()], ["l25", US3$reflection()], ["l26", US10$reflection()], ["l27", US3$reflection()], ["l28", US3$reflection()], ["l29", US3$reflection()], ["l30", US10$reflection()], ["l31", US3$reflection()], ["l32", US3$reflection()], ["l33", US3$reflection()], ["l34", US3$reflection()], ["l35", US3$reflection()], ["l36", US3$reflection()], ["l37", US3$reflection()], ["l38", US3$reflection()], ["l39", US11$reflection()], ["l40", US12$reflection()], ["l41", US11$reflection()], ["l42", US3$reflection()], ["l43", US3$reflection()], ["l44", US3$reflection()], ["l45", US3$reflection()], ["l46", US3$reflection()], ["l47", US3$reflection()], ["l48", US3$reflection()], ["l49", US3$reflection()], ["l50", US3$reflection()], ["l51", US3$reflection()], ["l52", US3$reflection()], ["l53", US3$reflection()], ["l54", US3$reflection()], ["l55", US3$reflection()], ["l56", US3$reflection()], ["l57", US3$reflection()], ["l58", US10$reflection()], ["l59", US3$reflection()], ["l60", US3$reflection()], ["l61", US8$reflection()], ["l62", US3$reflection()], ["l63", US2$reflection()], ["l64", US3$reflection()]]);
}

export const enum UH0_Tag {
    UH0_0 = 0,
    UH0_1 = 1
}

export type UH0_Fields = [[[string, any], UH0], []];

export type UH0 = UH0_Cons<UH0_Tag.UH0_0> | UH0_Cons<UH0_Tag.UH0_1>;

export function UH0_UH0_0(Item1: [string, any], Item2: UH0) {
    return new UH0_Cons<UH0_Tag.UH0_0>(UH0_Tag.UH0_0, [Item1, Item2]);
}

export function UH0_UH0_1() {
    return new UH0_Cons<UH0_Tag.UH0_1>(UH0_Tag.UH0_1, []);
}

export class UH0_Cons<Tag extends keyof UH0_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: UH0_Fields[Tag]) {
        super();
    }
    cases() {
        return ["UH0_0", "UH0_1"];
    }
}

export function UH0$reflection(): TypeInfo {
    return union_type("Components_spi.UH0", [], UH0_Cons, () => [[["Item1", tuple_type(string_type, obj_type)], ["Item2", UH0$reflection()]], []]);
}

export class Mut4 extends Record {
    l0: () => boolean;
    l1: (arg0: boolean) => void;
    l2: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3];
    constructor(l0: () => boolean, l1: (arg0: boolean) => void, l2: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) {
        super();
        this.l0 = l0;
        this.l1 = l1;
        this.l2 = l2;
    }
}

export function Mut4$reflection(): TypeInfo {
    return record_type("Components_spi.Mut4", [], Mut4, () => [["l0", lambda_type(unit_type, bool_type)], ["l1", lambda_type(bool_type, unit_type)], ["l2", lambda_type(tuple_type(US3$reflection(), US3$reflection(), US3$reflection(), US5$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US7$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US8$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US9$reflection(), US6$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US11$reflection(), US12$reflection(), US11$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US8$reflection(), US3$reflection(), US2$reflection(), US3$reflection()), tuple_type(US3$reflection(), US3$reflection(), US3$reflection(), US5$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US7$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US8$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US9$reflection(), US6$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US11$reflection(), US12$reflection(), US11$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US8$reflection(), US3$reflection(), US2$reflection(), US3$reflection()))]]);
}

export const enum US13_Tag {
    US13_0 = 0,
    US13_1 = 1
}

export type US13_Fields = [[], [(arg0: Mut1, arg1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void]];

export type US13 = US13_Cons<US13_Tag.US13_0> | US13_Cons<US13_Tag.US13_1>;

export function US13_US13_0() {
    return new US13_Cons<US13_Tag.US13_0>(US13_Tag.US13_0, []);
}

export function US13_US13_1(f1_0: (arg0: Mut1, arg1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void) {
    return new US13_Cons<US13_Tag.US13_1>(US13_Tag.US13_1, [f1_0]);
}

export class US13_Cons<Tag extends keyof US13_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US13_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US13_0", "US13_1"];
    }
}

export function US13$reflection(): TypeInfo {
    return union_type("Components_spi.US13", [], US13_Cons, () => [[], [["f1_0", lambda_type(Mut1$reflection(), lambda_type(lambda_type(lambda_type(Mut1$reflection(), lambda_type(Mut1$reflection(), unit_type)), unit_type), unit_type))]]]);
}

export const enum US14_Tag {
    US14_0 = 0,
    US14_1 = 1,
    US14_2 = 2
}

export type US14_Fields = [[], [], []];

export type US14 = US14_Cons<US14_Tag.US14_0> | US14_Cons<US14_Tag.US14_1> | US14_Cons<US14_Tag.US14_2>;

export function US14_US14_0() {
    return new US14_Cons<US14_Tag.US14_0>(US14_Tag.US14_0, []);
}

export function US14_US14_1() {
    return new US14_Cons<US14_Tag.US14_1>(US14_Tag.US14_1, []);
}

export function US14_US14_2() {
    return new US14_Cons<US14_Tag.US14_2>(US14_Tag.US14_2, []);
}

export class US14_Cons<Tag extends keyof US14_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: US14_Fields[Tag]) {
        super();
    }
    cases() {
        return ["US14_0", "US14_1", "US14_2"];
    }
}

export function US14$reflection(): TypeInfo {
    return union_type("Components_spi.US14", [], US14_Cons, () => [[], [], []]);
}

export class Mut5 extends Record {
    l0: US13;
    l1: US13;
    l2: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3];
    l3: US14;
    constructor(l0: US13, l1: US13, l2: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3], l3: US14) {
        super();
        this.l0 = l0;
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }
}

export function Mut5$reflection(): TypeInfo {
    return record_type("Components_spi.Mut5", [], Mut5, () => [["l0", US13$reflection()], ["l1", US13$reflection()], ["l2", lambda_type(tuple_type(US3$reflection(), US3$reflection(), US3$reflection(), US5$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US7$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US8$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US9$reflection(), US6$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US11$reflection(), US12$reflection(), US11$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US8$reflection(), US3$reflection(), US2$reflection(), US3$reflection()), tuple_type(US3$reflection(), US3$reflection(), US3$reflection(), US5$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US7$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US8$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US9$reflection(), US6$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US11$reflection(), US12$reflection(), US11$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US8$reflection(), US3$reflection(), US2$reflection(), US3$reflection()))], ["l3", US14$reflection()]]);
}

export class Mut6 extends Record {
    l0: boolean;
    l1: boolean;
    l2: US13;
    l3: US13;
    l4: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3];
    constructor(l0: boolean, l1: boolean, l2: US13, l3: US13, l4: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) {
        super();
        this.l0 = l0;
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
        this.l4 = l4;
    }
}

export function Mut6$reflection(): TypeInfo {
    return record_type("Components_spi.Mut6", [], Mut6, () => [["l0", bool_type], ["l1", bool_type], ["l2", US13$reflection()], ["l3", US13$reflection()], ["l4", lambda_type(tuple_type(US3$reflection(), US3$reflection(), US3$reflection(), US5$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US7$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US8$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US9$reflection(), US6$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US11$reflection(), US12$reflection(), US11$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US8$reflection(), US3$reflection(), US2$reflection(), US3$reflection()), tuple_type(US3$reflection(), US3$reflection(), US3$reflection(), US5$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US7$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US8$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US9$reflection(), US6$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US11$reflection(), US12$reflection(), US11$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US8$reflection(), US3$reflection(), US2$reflection(), US3$reflection()))]]);
}

export class Mut7 extends Record {
    l0: int32;
    constructor(l0: int32) {
        super();
        this.l0 = (l0 | 0);
    }
}

export function Mut7$reflection(): TypeInfo {
    return record_type("Components_spi.Mut7", [], Mut7, () => [["l0", int32_type]]);
}

export class Mut8 extends Record {
    l0: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3];
    l1: () => any;
    l2: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3];
    constructor(l0: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3], l1: () => any, l2: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) {
        super();
        this.l0 = l0;
        this.l1 = l1;
        this.l2 = l2;
    }
}

export function Mut8$reflection(): TypeInfo {
    return record_type("Components_spi.Mut8", [], Mut8, () => [["l0", lambda_type(tuple_type(US3$reflection(), US3$reflection(), US3$reflection(), US5$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US7$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US8$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US9$reflection(), US6$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US11$reflection(), US12$reflection(), US11$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US8$reflection(), US3$reflection(), US2$reflection(), US3$reflection()), tuple_type(US3$reflection(), US3$reflection(), US3$reflection(), US5$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US7$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US8$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US9$reflection(), US6$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US11$reflection(), US12$reflection(), US11$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US8$reflection(), US3$reflection(), US2$reflection(), US3$reflection()))], ["l1", lambda_type(unit_type, class_type("Fable.Core.JS.Function"))], ["l2", lambda_type(tuple_type(US3$reflection(), US3$reflection(), US3$reflection(), US5$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US7$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US8$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US9$reflection(), US6$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US11$reflection(), US12$reflection(), US11$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US8$reflection(), US3$reflection(), US2$reflection(), US3$reflection()), tuple_type(US3$reflection(), US3$reflection(), US3$reflection(), US5$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US7$reflection(), US3$reflection(), US3$reflection(), US6$reflection(), US8$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US9$reflection(), US6$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US11$reflection(), US12$reflection(), US11$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US3$reflection(), US10$reflection(), US3$reflection(), US3$reflection(), US8$reflection(), US3$reflection(), US2$reflection(), US3$reflection()))]]);
}

export class Mut9 extends Record {
    l0: (arg0: Mut1) => US3;
    l1: (arg0: Mut1, arg1: Mut1, arg2: US3) => void;
    constructor(l0: (arg0: Mut1) => US3, l1: (arg0: Mut1, arg1: Mut1, arg2: US3) => void) {
        super();
        this.l0 = l0;
        this.l1 = l1;
    }
}

export function Mut9$reflection(): TypeInfo {
    return record_type("Components_spi.Mut9", [], Mut9, () => [["l0", lambda_type(Mut1$reflection(), US3$reflection())], ["l1", lambda_type(Mut1$reflection(), lambda_type(Mut1$reflection(), lambda_type(US3$reflection(), unit_type)))]]);
}

export class Mut10 extends Record {
    l0: (arg0: Mut1) => US2;
    l1: (arg0: Mut1, arg1: Mut1, arg2: US2) => void;
    constructor(l0: (arg0: Mut1) => US2, l1: (arg0: Mut1, arg1: Mut1, arg2: US2) => void) {
        super();
        this.l0 = l0;
        this.l1 = l1;
    }
}

export function Mut10$reflection(): TypeInfo {
    return record_type("Components_spi.Mut10", [], Mut10, () => [["l0", lambda_type(Mut1$reflection(), US2$reflection())], ["l1", lambda_type(Mut1$reflection(), lambda_type(Mut1$reflection(), lambda_type(US2$reflection(), unit_type)))]]);
}

export class Mut11 extends Record {
    l0: int32;
    l1: int32;
    constructor(l0: int32, l1: int32) {
        super();
        this.l0 = (l0 | 0);
        this.l1 = (l1 | 0);
    }
}

export function Mut11$reflection(): TypeInfo {
    return record_type("Components_spi.Mut11", [], Mut11, () => [["l0", int32_type], ["l1", int32_type]]);
}

export class Mut12 extends Record {
    l0: US4;
    constructor(l0: US4) {
        super();
        this.l0 = l0;
    }
}

export function Mut12$reflection(): TypeInfo {
    return record_type("Components_spi.Mut12", [], Mut12, () => [["l0", US4$reflection()]]);
}

export class Mut13 extends Record {
    l0: US4;
    l1: (arg0: [US4, int32, string, string]) => US3;
    l2: (arg0: [US4, int32, string, string], arg1: US3) => [US4, int32, string, string];
    constructor(l0: US4, l1: (arg0: [US4, int32, string, string]) => US3, l2: (arg0: [US4, int32, string, string], arg1: US3) => [US4, int32, string, string]) {
        super();
        this.l0 = l0;
        this.l1 = l1;
        this.l2 = l2;
    }
}

export function Mut13$reflection(): TypeInfo {
    return record_type("Components_spi.Mut13", [], Mut13, () => [["l0", US4$reflection()], ["l1", lambda_type(tuple_type(US4$reflection(), int32_type, string_type, string_type), US3$reflection())], ["l2", lambda_type(tuple_type(US4$reflection(), int32_type, string_type, string_type), lambda_type(US3$reflection(), tuple_type(US4$reflection(), int32_type, string_type, string_type)))]]);
}

export class Mut14 extends Record {
    l0: int32;
    l1: US3;
    constructor(l0: int32, l1: US3) {
        super();
        this.l0 = (l0 | 0);
        this.l1 = l1;
    }
}

export function Mut14$reflection(): TypeInfo {
    return record_type("Components_spi.Mut14", [], Mut14, () => [["l0", int32_type], ["l1", US3$reflection()]]);
}

export class Mut15 extends Record {
    l0: US4;
    l1: (arg0: [US4, int32, string, string]) => US2;
    l2: (arg0: [US4, int32, string, string], arg1: US2) => [US4, int32, string, string];
    constructor(l0: US4, l1: (arg0: [US4, int32, string, string]) => US2, l2: (arg0: [US4, int32, string, string], arg1: US2) => [US4, int32, string, string]) {
        super();
        this.l0 = l0;
        this.l1 = l1;
        this.l2 = l2;
    }
}

export function Mut15$reflection(): TypeInfo {
    return record_type("Components_spi.Mut15", [], Mut15, () => [["l0", US4$reflection()], ["l1", lambda_type(tuple_type(US4$reflection(), int32_type, string_type, string_type), US2$reflection())], ["l2", lambda_type(tuple_type(US4$reflection(), int32_type, string_type, string_type), lambda_type(US2$reflection(), tuple_type(US4$reflection(), int32_type, string_type, string_type)))]]);
}

export class Mut16 extends Record {
    l0: int32;
    l1: US2;
    constructor(l0: int32, l1: US2) {
        super();
        this.l0 = (l0 | 0);
        this.l1 = l1;
    }
}

export function Mut16$reflection(): TypeInfo {
    return record_type("Components_spi.Mut16", [], Mut16, () => [["l0", int32_type], ["l1", US2$reflection()]]);
}

export const enum UH1_Tag {
    UH1_0 = 0,
    UH1_1 = 1
}

export type UH1_Fields = [[int32, int32, UH1], []];

export type UH1 = UH1_Cons<UH1_Tag.UH1_0> | UH1_Cons<UH1_Tag.UH1_1>;

export function UH1_UH1_0(Item1: int32, Item2: int32, Item3: UH1) {
    return new UH1_Cons<UH1_Tag.UH1_0>(UH1_Tag.UH1_0, [Item1, Item2, Item3]);
}

export function UH1_UH1_1() {
    return new UH1_Cons<UH1_Tag.UH1_1>(UH1_Tag.UH1_1, []);
}

export class UH1_Cons<Tag extends keyof UH1_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: UH1_Fields[Tag]) {
        super();
    }
    cases() {
        return ["UH1_0", "UH1_1"];
    }
}

export function UH1$reflection(): TypeInfo {
    return union_type("Components_spi.UH1", [], UH1_Cons, () => [[["Item1", int32_type], ["Item2", int32_type], ["Item3", UH1$reflection()]], []]);
}

export class Mut17 extends Record {
    l0: int32;
    l1: UH1;
    constructor(l0: int32, l1: UH1) {
        super();
        this.l0 = (l0 | 0);
        this.l1 = l1;
    }
}

export function Mut17$reflection(): TypeInfo {
    return record_type("Components_spi.Mut17", [], Mut17, () => [["l0", int32_type], ["l1", UH1$reflection()]]);
}

export const enum UH2_Tag {
    UH2_0 = 0,
    UH2_1 = 1
}

export type UH2_Fields = [[int32, any, UH2], []];

export type UH2 = UH2_Cons<UH2_Tag.UH2_0> | UH2_Cons<UH2_Tag.UH2_1>;

export function UH2_UH2_0(Item1: int32, Item2: any, Item3: UH2) {
    return new UH2_Cons<UH2_Tag.UH2_0>(UH2_Tag.UH2_0, [Item1, Item2, Item3]);
}

export function UH2_UH2_1() {
    return new UH2_Cons<UH2_Tag.UH2_1>(UH2_Tag.UH2_1, []);
}

export class UH2_Cons<Tag extends keyof UH2_Fields> extends Union {
    constructor(readonly tag: Tag, readonly fields: UH2_Fields[Tag]) {
        super();
    }
    cases() {
        return ["UH2_0", "UH2_1"];
    }
}

export function UH2$reflection(): TypeInfo {
    return union_type("Components_spi.UH2", [], UH2_Cons, () => [[["Item1", int32_type], ["Item2", obj_type], ["Item3", UH2$reflection()]], []]);
}

export class Mut18 extends Record {
    l0: int32;
    l1: UH2;
    constructor(l0: int32, l1: UH2) {
        super();
        this.l0 = (l0 | 0);
        this.l1 = l1;
    }
}

export function Mut18$reflection(): TypeInfo {
    return record_type("Components_spi.Mut18", [], Mut18, () => [["l0", int32_type], ["l1", UH2$reflection()]]);
}

export function method1(): [string, any, string, string, boolean] {
    const v0_1: any = components_spi.env;
    const v1_1: string = v0_1.CODESPACE_NAME || "";
    const v2: string = v0_1.GITHUB_RUN_ID || "";
    const v3: string = v0_1.GITHUB_SHA || "";
    const v4: any = v0_1.IS_TEST;
    return [v1_1, v0_1, v2, v3, (!v4) === false];
}

export function method2(): string {
    return "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
}

export function method3(): string {
    return "http://localhost";
}

export function method4(): int32 {
    return 4001;
}

export function method5(): [US0, string, string, string][] {
    return [[US0_US0_0(), "4ZZJNAAPJGOUBHORYKX5DQSJJIMQLADNUIH7ONXZAVEZYZGOAM5CM7HV2M", "poem slush dry adult final thunder price pause concert topic mesh wild dry gate judge celery winter list promote clump country loan move about faith", "OBVzhzxAK4ZPdaF1QbkXsd8hgRUPJeCfYFjFghgMGnLmcpaAD0mdQJ3Rwq/RwklKGQWAbaIP9zb5BUmcZM4DOg=="], [US0_US0_1(US1_US1_1()), "Q2MAJEB7HYFK42KSN2MY26PL3P5P7HVIGR22GDAGCJQUARDEIM4WLHSIFQ", "crater dove click normal kitten aisle obvious error exotic lunar guard impact donkey gun lamp divide announce match cement excess piano turn fish above make", "lHFQVWKpvRYU00yAQqHOHJegn5nvP0owYkroBFKr94qGmASQPz4KrmlSbpmNeevb+v+eqDR1owwGEmFARGRDOQ=="], [US0_US0_1(US1_US1_0()), "KVGJONR4BETXZ3AS224T4MAJATTSTQGVO3VC3YAGSWAYBVD7KPR23RKNBI", "key churn alert mother lock run lyrics category office lamp silver nut cement pistol fury hollow faculty feed capable announce index cloth faint about bid", "0DNKDAK5QfWuMCTMNJ+Re5mSlc7rbI0q1UOUYDmvPGpVTJc2PAknfOwS1rk+MAkE5ynA1XbqLeAGlYGA1H9T4w=="]];
}

export function method0(): [[US0, string, string, string][], US2, US3, US3, [US4, int32, string, string][], [US4, US4][], [int32, any][], [int32, any][], [int32, int32][], US2] {
    const patternInput: [string, any, string, string, boolean] = method1();
    const v4: boolean = patternInput[4];
    const v0_1: string = patternInput[0];
    const v5: string = method2();
    const v6: boolean = "" === v0_1;
    const v9: string = v6 ? method3() : (`http://${v0_1}-4001.githubpreview.dev`);
    const v11: int32 = (v6 ? method4() : 80) | 0;
    return [method5(), US2_US2_1(v11), US3_US3_1(v5), US3_US3_1(v9), [[US4_US4_1(), v6 ? ((true === v4) ? 14944 : ((false === v4) ? 4944 : 80)) : 80, v6 ? "ws://localhost" : ((true === v4) ? "ws://localhost" : (`ws://${v0_1}-4944.githubpreview.dev`)), "ws"], [US4_US4_0(), v6 ? ((true === v4) ? 18765 : ((false === v4) ? 8765 : 80)) : 80, v6 ? "wss://localhost" : ((true === v4) ? "wss://localhost" : (`ws://${v0_1}-8765.githubpreview.dev`)), "gun"]], [], [], [], [], US2_US2_0()];
}

export function closure0(v0_1: any, v1_1: any): void {
    const v2: any = v1_1.on;
    v2("@init", ((): any => v0_1));
    v2("set", ((_: any, state: any) => state));
}

export function method6(v0_1: any): any {
    const v3: any = createStoreon;
    const v4: (arg0: any) => void = (v: any): void => {
        closure0(v0_1, v);
    };
    return v3([v4]);
}

export function closure2(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function method9(v0_1_mut: int32, v1_1_mut: string): string {
    method9:
    while (true) {
        const v0_1: int32 = v0_1_mut, v1_1: string = v1_1_mut;
        if (v1_1.length < v0_1) {
            v0_1_mut = v0_1;
            v1_1_mut = (`0${v1_1}`);
            continue method9;
        }
        else {
            return v1_1;
        }
        break;
    }
}

export function closure3(v0_1: () => any[], v1_1: string, v2: string, v3: any, v4: string, v5: string, v6: boolean, v7: int64, v8: any[]): void {
    let copyOfStruct: Date;
    const v15: string = `[${method9(6, toString(op_Subtraction(op_Division((copyOfStruct = utcNow(), getTicks(copyOfStruct)), fromBits(1000, 0, false)), v7)))}] ${components_spi.run_id}`;
    const v16: string = JSON.stringify(v8);
    const v17: any[] = v0_1();
    const v18: string = JSON.stringify(v17);
    let patternInput: [string, string, string, string, string];
    if (v6) {
        const v19: string = "";
        patternInput = [v15, v16, v18, v19, v19];
    }
    else {
        patternInput = [`${v15} %c%s %c%s`, `font-weight: bold; color: ${v1_1}`, v16, "font-weight: bold; color: #444", v18];
    }
    console.log.apply(console, [patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4]]);
}

export function method8(v0_1: () => any[], v1_1: string): (arg0: any[]) => void {
    let copyOfStruct: Date;
    const patternInput: [string, any, string, string, boolean] = method1();
    const v7: int64 = op_Division((copyOfStruct = utcNow(), getTicks(copyOfStruct)), fromBits(1000, 0, false));
    return (v: any[]): void => {
        closure3(v0_1, v1_1, patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], v7, v);
    };
}

export function closure4(v0_1: (arg0: any[]) => void, _arg: [Mut1, Mut1, any]): void {
    const v2: Mut1 = _arg[1];
    v0_1([">> db_listener store.on(@changed)", ["b_changed:", v2]]);
    const patternInput: [[US4, int32, string, string][], [US4, US4][]] = [v2.l4, v2.l5];
    let v17: boolean;
    if ((!patternInput[1]) === false) {
        v17 = true;
    }
    else {
        const patternInput_1: [[US4, int32, string, string][], [US4, US4][]] = [v2.l4, v2.l5];
        v17 = ((!patternInput_1[0]) === false);
    }
}

export function method7(v0_1: any): any {
    const v1_1: () => any[] = (): any[] => closure2(void 0, void 0);
    const v3: (arg0: any[]) => void = method8(v1_1, "#cf1100");
    v3(["> db_listener ()"]);
    const v7: any = v0_1.on;
    const v8: (arg0: [Mut1, Mut1, any]) => void = (arg10$0040_1: [Mut1, Mut1, any]): void => {
        closure4(v3, arg10$0040_1);
    };
    const v9: any = (...args: any[]) => v8(args);
    const v10: () => void = v7("@changed", v9);
    const v13: any = onCleanup;
    v13(v10);
    return <></>;
}

export function closure1(v0_1: any, v1_1: Mut2): any {
    return method7(v0_1);
}

export function method11(): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    return [US3_US3_0(), US3_US3_0(), US3_US3_0(), US5_US5_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US6_US6_0(), US7_US7_0(), US3_US3_0(), US3_US3_0(), US6_US6_0(), US8_US8_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US9_US9_0(), US6_US6_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US10_US10_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US10_US10_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US11_US11_0(), US12_US12_0(), US11_US11_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US3_US3_0(), US10_US10_0(), US3_US3_0(), US3_US3_0(), US8_US8_0(), US3_US3_0(), US2_US2_0(), US3_US3_0()];
}

export function closure10(v0_1: Mut1, unitVar: void): any[] {
    return [<>
        {JSON.stringify(v0_1, null, 2)}
    </>];
}

export function method15(v0_1_mut: UH0, v1_1_mut: int32): int32 {
    method15:
    while (true) {
        const v0_1: UH0 = v0_1_mut, v1_1: int32 = v1_1_mut;
        if (v0_1.tag === UH0_Tag.UH0_1) {
            return v1_1 | 0;
        }
        else {
            v0_1_mut = v0_1.fields[1];
            v1_1_mut = (v1_1 + 1);
            continue method15;
        }
        break;
    }
}

export function method16(v0_1_mut: [string, any][], v1_1_mut: UH0, v2_mut: int32): int32 {
    method16:
    while (true) {
        const v0_1: [string, any][] = v0_1_mut, v1_1: UH0 = v1_1_mut, v2: int32 = v2_mut;
        if (v1_1.tag === UH0_Tag.UH0_1) {
            return v2 | 0;
        }
        else {
            v0_1[v2] = v1_1.fields[0];
            v0_1_mut = v0_1;
            v1_1_mut = v1_1.fields[1];
            v2_mut = (v2 + 1);
            continue method16;
        }
        break;
    }
}

export function method14(v0_1: UH0): [string, any][] {
    const v2: int32 = method15(v0_1, 0) | 0;
    const v3: [string, any][] = fill(new Array(v2), 0, v2, null);
    const v5: int32 = method16(v3, v0_1, 0) | 0;
    return v3;
}

export function method13(v0_1: US3, v1_1: US3, v2: US3, v3: US5, v4: US3, v5: US3, v6: US3, v7: US3, v8: US3, v9: US3, v10: US6, v11: US7, v12: US3, v13: US3, v14: US6, v15: US8, v16: US3, v17: US3, v18: US3, v19: US9, v20: US6, v21: US3, v22: US3, v23: US3, v24: US3, v25: US3, v26: US10, v27: US3, v28: US3, v29: US3, v30: US10, v31: US3, v32: US3, v33: US3, v34: US3, v35: US3, v36: US3, v37: US3, v38: US3, v39: US11, v40: US12, v41: US11, v42: US3, v43: US3, v44: US3, v45: US3, v46: US3, v47: US3, v48: US3, v49: US3, v50: US3, v51: US3, v52: US3, v53: US3, v54: US3, v55: US3, v56: US3, v57: US3, v58: US10, v59: US3, v60: US3, v61: US8, v62: US3, v63: US2, v64: US3): [string, any][] {
    const v68_1: any = (v0_1.tag === US3_Tag.US3_1) ? v0_1.fields[0] : (void 0);
    const v75_1: UH0 = (!v68_1) ? UH0_UH0_1() : UH0_UH0_0(["alignItems", v68_1], UH0_UH0_1());
    const v79_1: any = (v1_1.tag === US3_Tag.US3_1) ? v1_1.fields[0] : (void 0);
    const v84_1: UH0 = (!v79_1) ? v75_1 : UH0_UH0_0(["alignSelf", v79_1], v75_1);
    const v88_1: any = (v2.tag === US3_Tag.US3_1) ? v2.fields[0] : (void 0);
    const v93_1: UH0 = (!v88_1) ? v84_1 : UH0_UH0_0(["aria-label", v88_1], v84_1);
    const v97_1: any = (v3.tag === US5_Tag.US5_1) ? v3.fields[0] : (void 0);
    const v102: UH0 = (!v97_1) ? v93_1 : UH0_UH0_0(["as", v97_1], v93_1);
    const v106: any = (v4.tag === US3_Tag.US3_1) ? v4.fields[0] : (void 0);
    const v111: UH0 = (!v106) ? v102 : UH0_UH0_0(["backgroundColor", v106], v102);
    const v115: any = (v5.tag === US3_Tag.US3_1) ? v5.fields[0] : (void 0);
    const v120: UH0 = (!v115) ? v111 : UH0_UH0_0(["border", v115], v111);
    const v124: any = (v6.tag === US3_Tag.US3_1) ? v6.fields[0] : (void 0);
    const v129: UH0 = (!v124) ? v120 : UH0_UH0_0(["borderBottomWidth", v124], v120);
    const v133: any = (v7.tag === US3_Tag.US3_1) ? v7.fields[0] : (void 0);
    const v138: UH0 = (!v133) ? v129 : UH0_UH0_0(["borderColor", v133], v129);
    const v142: any = (v8.tag === US3_Tag.US3_1) ? v8.fields[0] : (void 0);
    const v147: UH0 = (!v142) ? v138 : UH0_UH0_0(["borderWidth", v142], v138);
    const v151: any = (v9.tag === US3_Tag.US3_1) ? v9.fields[0] : (void 0);
    const v156: UH0 = (!v151) ? v147 : UH0_UH0_0(["bottom", v151], v147);
    const v160: any = (v10.tag === US6_Tag.US6_1) ? v10.fields[0] : (void 0);
    const v165: UH0 = (!v160) ? v156 : UH0_UH0_0(["checked", v160], v156);
    const v169: any = (v11.tag === US7_Tag.US7_1) ? v11.fields[0] : (void 0);
    const v174: UH0 = (!v169) ? v165 : UH0_UH0_0(["children", v169], v165);
    const v178: any = (v12.tag === US3_Tag.US3_1) ? v12.fields[0] : (void 0);
    const v183: UH0 = (!v178) ? v174 : UH0_UH0_0(["color", v178], v174);
    const v187: any = (v13.tag === US3_Tag.US3_1) ? v13.fields[0] : (void 0);
    const v192: UH0 = (!v187) ? v183 : UH0_UH0_0(["colorScheme", v187], v183);
    const v196: any = (v14.tag === US6_Tag.US6_1) ? v14.fields[0] : (void 0);
    const v201: UH0 = (!v196) ? v192 : UH0_UH0_0(["compact", v196], v192);
    const v205: any = (v15.tag === US8_Tag.US8_1) ? v15.fields[0] : (void 0);
    const v210: UH0 = (!v205) ? v201 : UH0_UH0_0(["css", v205], v201);
    const v214: any = (v16.tag === US3_Tag.US3_1) ? v16.fields[0] : (void 0);
    const v219: UH0 = (!v214) ? v210 : UH0_UH0_0(["defaultValue", v214], v210);
    const v223: any = (v17.tag === US3_Tag.US3_1) ? v17.fields[0] : (void 0);
    const v228: UH0 = (!v223) ? v219 : UH0_UH0_0(["direction", v223], v219);
    const v232: any = (v18.tag === US3_Tag.US3_1) ? v18.fields[0] : (void 0);
    const v237: UH0 = (!v232) ? v228 : UH0_UH0_0(["display", v232], v228);
    const v241: any = (v19.tag === US9_Tag.US9_1) ? v19.fields[0] : (void 0);
    const v246: UH0 = (!v241) ? v237 : UH0_UH0_0(["each", v241], v237);
    const v250: any = (v20.tag === US6_Tag.US6_1) ? v20.fields[0] : (void 0);
    const v255: UH0 = (!v250) ? v246 : UH0_UH0_0(["external", v250], v246);
    const v259: any = (v21.tag === US3_Tag.US3_1) ? v21.fields[0] : (void 0);
    const v264: UH0 = (!v259) ? v255 : UH0_UH0_0(["flex", v259], v255);
    const v268: any = (v22.tag === US3_Tag.US3_1) ? v22.fields[0] : (void 0);
    const v273: UH0 = (!v268) ? v264 : UH0_UH0_0(["flexDirection", v268], v264);
    const v277: any = (v23.tag === US3_Tag.US3_1) ? v23.fields[0] : (void 0);
    const v282: UH0 = (!v277) ? v273 : UH0_UH0_0(["fontSize", v277], v273);
    const v286: any = (v24.tag === US3_Tag.US3_1) ? v24.fields[0] : (void 0);
    const v291: UH0 = (!v286) ? v282 : UH0_UH0_0(["height", v286], v282);
    const v295: any = (v25.tag === US3_Tag.US3_1) ? v25.fields[0] : (void 0);
    const v300: UH0 = (!v295) ? v291 : UH0_UH0_0(["href", v295], v291);
    const v304: any = (v26.tag === US10_Tag.US10_1) ? v26.fields[0] : (void 0);
    const v309: UH0 = (!v304) ? v300 : UH0_UH0_0(["icon", v304], v300);
    const v313: any = (v27.tag === US3_Tag.US3_1) ? v27.fields[0] : (void 0);
    const v318: UH0 = (!v313) ? v309 : UH0_UH0_0(["id", v313], v309);
    const v322: any = (v28.tag === US3_Tag.US3_1) ? v28.fields[0] : (void 0);
    const v327: UH0 = (!v322) ? v318 : UH0_UH0_0(["justifyContent", v322], v318);
    const v331: any = (v29.tag === US3_Tag.US3_1) ? v29.fields[0] : (void 0);
    const v336: UH0 = (!v331) ? v327 : UH0_UH0_0(["left", v331], v327);
    const v340: any = (v30.tag === US10_Tag.US10_1) ? v30.fields[0] : (void 0);
    const v345: UH0 = (!v340) ? v336 : UH0_UH0_0(["leftIcon", v340], v336);
    const v349: any = (v31.tag === US3_Tag.US3_1) ? v31.fields[0] : (void 0);
    const v354: UH0 = (!v349) ? v345 : UH0_UH0_0(["lineHeight", v349], v345);
    const v358: any = (v32.tag === US3_Tag.US3_1) ? v32.fields[0] : (void 0);
    const v363: UH0 = (!v358) ? v354 : UH0_UH0_0(["margin", v358], v354);
    const v367: any = (v33.tag === US3_Tag.US3_1) ? v33.fields[0] : (void 0);
    const v372: UH0 = (!v367) ? v363 : UH0_UH0_0(["marginBottom", v367], v363);
    const v376: any = (v34.tag === US3_Tag.US3_1) ? v34.fields[0] : (void 0);
    const v381: UH0 = (!v376) ? v372 : UH0_UH0_0(["marginLeft", v376], v372);
    const v385: any = (v35.tag === US3_Tag.US3_1) ? v35.fields[0] : (void 0);
    const v390: UH0 = (!v385) ? v381 : UH0_UH0_0(["marginRight", v385], v381);
    const v394: any = (v36.tag === US3_Tag.US3_1) ? v36.fields[0] : (void 0);
    const v399: UH0 = (!v394) ? v390 : UH0_UH0_0(["marginTop", v394], v390);
    const v403: any = (v37.tag === US3_Tag.US3_1) ? v37.fields[0] : (void 0);
    const v408: UH0 = (!v403) ? v399 : UH0_UH0_0(["maxHeight", v403], v399);
    const v412: any = (v38.tag === US3_Tag.US3_1) ? v38.fields[0] : (void 0);
    const v417: UH0 = (!v412) ? v408 : UH0_UH0_0(["maxWidth", v412], v408);
    const v421: any = (v39.tag === US11_Tag.US11_1) ? v39.fields[0] : (void 0);
    const v426: UH0 = (!v421) ? v417 : UH0_UH0_0(["onChange", v421], v417);
    const v430: any = (v40.tag === US12_Tag.US12_1) ? v40.fields[0] : (void 0);
    const v435: UH0 = (!v430) ? v426 : UH0_UH0_0(["onClick", v430], v426);
    const v439: any = (v41.tag === US11_Tag.US11_1) ? v41.fields[0] : (void 0);
    const v444: UH0 = (!v439) ? v435 : UH0_UH0_0(["onInput", v439], v435);
    const v448: any = (v42.tag === US3_Tag.US3_1) ? v42.fields[0] : (void 0);
    const v453: UH0 = (!v448) ? v444 : UH0_UH0_0(["outline", v448], v444);
    const v457: any = (v43.tag === US3_Tag.US3_1) ? v43.fields[0] : (void 0);
    const v462: UH0 = (!v457) ? v453 : UH0_UH0_0(["overflow", v457], v453);
    const v466: any = (v44.tag === US3_Tag.US3_1) ? v44.fields[0] : (void 0);
    const v471: UH0 = (!v466) ? v462 : UH0_UH0_0(["overflowX", v466], v462);
    const v475: any = (v45.tag === US3_Tag.US3_1) ? v45.fields[0] : (void 0);
    const v480: UH0 = (!v475) ? v471 : UH0_UH0_0(["overflowY", v475], v471);
    const v484: any = (v46.tag === US3_Tag.US3_1) ? v46.fields[0] : (void 0);
    const v489: UH0 = (!v484) ? v480 : UH0_UH0_0(["padding", v484], v480);
    const v493: any = (v47.tag === US3_Tag.US3_1) ? v47.fields[0] : (void 0);
    const v498: UH0 = (!v493) ? v489 : UH0_UH0_0(["paddingBottom", v493], v489);
    const v502: any = (v48.tag === US3_Tag.US3_1) ? v48.fields[0] : (void 0);
    const v507: UH0 = (!v502) ? v498 : UH0_UH0_0(["paddingLeft", v502], v498);
    const v511: any = (v49.tag === US3_Tag.US3_1) ? v49.fields[0] : (void 0);
    const v516: UH0 = (!v511) ? v507 : UH0_UH0_0(["paddingRight", v511], v507);
    const v520: any = (v50.tag === US3_Tag.US3_1) ? v50.fields[0] : (void 0);
    const v525: UH0 = (!v520) ? v516 : UH0_UH0_0(["paddingTop", v520], v516);
    const v529: any = (v51.tag === US3_Tag.US3_1) ? v51.fields[0] : (void 0);
    const v534: UH0 = (!v529) ? v525 : UH0_UH0_0(["position", v529], v525);
    const v538: any = (v52.tag === US3_Tag.US3_1) ? v52.fields[0] : (void 0);
    const v543: UH0 = (!v538) ? v534 : UH0_UH0_0(["right", v538], v534);
    const v547: any = (v53.tag === US3_Tag.US3_1) ? v53.fields[0] : (void 0);
    const v552: UH0 = (!v547) ? v543 : UH0_UH0_0(["size", v547], v543);
    const v556: any = (v54.tag === US3_Tag.US3_1) ? v54.fields[0] : (void 0);
    const v561: UH0 = (!v556) ? v552 : UH0_UH0_0(["spacing", v556], v552);
    const v565: any = (v55.tag === US3_Tag.US3_1) ? v55.fields[0] : (void 0);
    const v570: UH0 = (!v565) ? v561 : UH0_UH0_0(["src", v565], v561);
    const v574: any = (v56.tag === US3_Tag.US3_1) ? v56.fields[0] : (void 0);
    const v579: UH0 = (!v574) ? v570 : UH0_UH0_0(["striped", v574], v570);
    const v583: any = (v57.tag === US3_Tag.US3_1) ? v57.fields[0] : (void 0);
    const v588: UH0 = (!v583) ? v579 : UH0_UH0_0(["thickness", v583], v579);
    const v592: any = (v58.tag === US10_Tag.US10_1) ? v58.fields[0] : (void 0);
    const v597: UH0 = (!v592) ? v588 : UH0_UH0_0(["title", v592], v588);
    const v601: any = (v59.tag === US3_Tag.US3_1) ? v59.fields[0] : (void 0);
    const v606: UH0 = (!v601) ? v597 : UH0_UH0_0(["top", v601], v597);
    const v610: any = (v60.tag === US3_Tag.US3_1) ? v60.fields[0] : (void 0);
    const v615: UH0 = (!v610) ? v606 : UH0_UH0_0(["type", v610], v606);
    const v619: any = (v61.tag === US8_Tag.US8_1) ? v61.fields[0] : (void 0);
    const v624: UH0 = (!v619) ? v615 : UH0_UH0_0(["value", v619], v615);
    const v628: any = (v62.tag === US3_Tag.US3_1) ? v62.fields[0] : (void 0);
    const v633: UH0 = (!v628) ? v624 : UH0_UH0_0(["width", v628], v624);
    const v637: any = (v63.tag === US2_Tag.US2_1) ? v63.fields[0] : (void 0);
    const v642: UH0 = (!v637) ? v633 : UH0_UH0_0(["zIndex", v637], v633);
    const v646: any = (v64.tag === US3_Tag.US3_1) ? v64.fields[0] : (void 0);
    return method14((!v646) ? v642 : UH0_UH0_0(["zoom", v646], v642));
}

export function closure9(v0_1: Mut1, v1_1: () => boolean, unitVar: void): any[] {
    let v5: any, v6: any, patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3], v72_1: () => any[], v77_1: any, v78_1: (arg0: any) => any, v81_1: any;
    return [v1_1() ? ((v5 = hope, (v6 = v5.pre, (patternInput = method11(), (v72_1 = ((): any[] => closure10(v0_1, void 0)), (v77_1 = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v72_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], US3_US3_1("9px"), patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64])), (v78_1 = (v6), (v81_1 = createComponent, v81_1(v78_1, v77_1))))))))) : <></>];
}

export function closure14(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure13(v0_1: US3, v1_1: US3, v2: US3, v3: US5, v4: US3, v5: US3, v6: US3, v7: US3, v8: US3, v9: US3, v10: US6, v11: US7, v12: US3, v13: US3, v14: US6, v15: US8, v16: US3, v17: US3, v18: US3, v19: US9, v20: US6, v21: US3, v22: US3, v23: US3, v24: US3, v25: US3, v26: US10, v27: US3, v28: US3, v29: US3, v30: US10, v31: US3, v32: US3, v33: US3, v34: US3, v35: US3, v36: US3, v37: US3, v38: US3, v39: US11, v40: US12, v41: US11, v42: US3, v43: US3, v44: US3, v45: US3, v46: US3, v47: US3, v48: US3, v49: US3, v50: US3, v51: US3, v52: US3, v53: US3, v54: US3, v55: US3, v56: US3, v57: US3, v58: US10, v59: US3, v60: US3, v61: US8, v62: US3, v63: US2, v64: US3, unitVar: void): any[] {
    const v67_1: () => any[] = (v11.tag === US7_Tag.US7_1) ? v11.fields[0] : ((): any[] => closure14(void 0, void 0));
    const v70_1: any = Box;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v140: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v67_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], US3_US3_1("2px"), patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v141: (arg0: any) => any = v70_1;
    const v144: any = createComponent;
    return [v144(v141, v140)];
}

export function closure15(v0_1: Mut4, v1_1: any): void {
    const v2: boolean = v1_1.target.checked;
    v0_1.l1(v2);
}

export function closure12(unitVar: void, v0_1: Mut4): any {
    const v1_1: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = v0_1.l2;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = v1_1([patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]]);
    const v134: any = Checkbox;
    const patternInput_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v203: () => any[] = (): any[] => closure13(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62], patternInput_1[63], patternInput_1[64], void 0);
    const v209: (arg0: any) => void = (v: any): void => {
        closure15(v0_1, v);
    };
    const v214: any = createObj(method13(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], US6_US6_1(v0_1.l0()), US7_US7_1(v203), patternInput_2[12], US3_US3_1("neutral"), patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], US3_US3_1("2px"), patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], US11_US11_1(v209), patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], US3_US3_1("sm"), patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62], patternInput_2[63], patternInput_2[64]));
    const v215: (arg0: any) => any = v134;
    const v218: any = createComponent;
    return v218(v215, v214);
}

export function closure17(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Debug
    </>];
}

export function closure16(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v65: () => any[] = (): any[] => closure17(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v65), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], _arg[58], _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure11(v0_1: (arg0: boolean) => void, v1_1: () => boolean, unitVar: void): any[] {
    const v2: (arg0: Mut4) => any = (v: Mut4): any => closure12(void 0, v);
    const v3: (arg0: any) => any = v2;
    const v4: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure16(void 0, arg10$0040);
    const v5: Mut4 = new Mut4(v1_1, v0_1, v4);
    const v9: any = createComponent;
    return [v9(v3, v5)];
}

export function closure8(v0_1: Mut1, v1_1: (arg0: boolean) => void, v2: () => boolean, unitVar: void): any[] {
    const v5: any = Box;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v71_1: () => any[] = (): any[] => closure9(v0_1, v2, void 0);
    const v76_1: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v71_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], US3_US3_1("1"), patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v77_1: (arg0: any) => any = v5;
    const v80_1: any = createComponent;
    const v81_1: any = v80_1(v77_1, v76_1);
    const v82_1: any = Box;
    const patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v150: () => any[] = (): any[] => closure11(v1_1, v2, void 0);
    const v153: any = createObj(method13(patternInput_1[0], US3_US3_1("flex-end"), patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], US7_US7_1(v150), patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62], patternInput_1[63], patternInput_1[64]));
    const v154: (arg0: any) => any = v82_1;
    const v155: any = createComponent;
    return [v81_1, v155(v154, v153)];
}

export function method12(): any {
    const v2: any = useStoreon;
    const v3: any[] = v2();
    const v4: Mut1 = v3[0];
    const v5: any = v3[1];
    const v8: any = createSignal;
    const v9: any[] = v8(false);
    let v10: () => boolean;
    const value_4: any = v9[0];
    v10 = (value_4);
    let v11: (arg0: boolean) => void;
    const value_5: any = v9[1];
    v11 = ((arg_1: boolean): void => {
        value_5(arg_1);
    });
    const v14: any = Box;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v82_1: string = "0";
    const v84_1: () => any[] = (): any[] => closure8(v4, v11, v10, void 0);
    const v104: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], US3_US3_1("#00000066"), patternInput[5], patternInput[6], patternInput[7], patternInput[8], US3_US3_1(v82_1), patternInput[10], US7_US7_1(v84_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], US3_US3_1("flex"), patternInput[19], patternInput[20], patternInput[21], US3_US3_1("column"), patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], US3_US3_1("80vh"), US3_US3_1("50vw"), patternInput[39], patternInput[40], patternInput[41], patternInput[42], US3_US3_1("auto"), patternInput[44], patternInput[45], US3_US3_1("2px 6px"), patternInput[47], patternInput[48], patternInput[49], patternInput[50], US3_US3_1("absolute"), US3_US3_1(v82_1), patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], US2_US2_1(2), patternInput[64]));
    const v105: (arg0: any) => any = v14;
    const v107: any = createComponent;
    return v107(v105, v104);
}

export function closure7(unitVar: void, v0_1: Mut2): any {
    return method12();
}

export function closure20(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure19(v0_1: Mut3, unitVar: void): any[] {
    const v1_1: US7 = v0_1.l11;
    const v4: () => any[] = (v1_1.tag === US7_Tag.US7_1) ? v1_1.fields[0] : ((): any[] => closure20(void 0, void 0));
    const v7: any = Tbody;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v83_1: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], US3_US3_1("$blackAlpha3"), patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v4), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], US3_US3_1("flex"), patternInput[19], patternInput[20], patternInput[21], US3_US3_1("column"), patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], US3_US3_1("-1px"), patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v84_1: (arg0: any) => any = v7;
    const v87_1: any = createComponent;
    return [v87_1(v84_1, v83_1)];
}

export function method17(v0_1: Mut3): any {
    const v3: any = Table;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v69_1: US3 = v0_1.l45;
    const v73_1: () => any[] = (): any[] => closure19(v0_1, void 0);
    const v85_1: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v73_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], US3_US3_1("flex"), patternInput[19], patternInput[20], US3_US3_1("1"), US3_US3_1("column"), patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], US3_US3_1("hidden"), US3_US3_1((v69_1.tag === US3_Tag.US3_1) ? v69_1.fields[0] : "hidden"), patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v86_1: (arg0: any) => any = v3;
    const v89_1: any = createComponent;
    return v89_1(v86_1, v85_1);
}

export function closure18(unitVar: void, v0_1: Mut3): any {
    return method17(v0_1);
}

export function method19(v0_1: string, v1_1: string): string {
    return {
        "@initial": v1_1,
        "@sm": v0_1,
    };
}

export function closure26(v0_1: any, unitVar: void): any[] {
    return [v0_1];
}

export function closure25(v0_1: any, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v66: () => any[] = (): any[] => closure26(v0_1, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v66), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], _arg[58], _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure24(v0_1: Mut5, v1_1: (arg0: boolean) => void, v2: () => boolean, v3: any, unitVar: void): any[] {
    let v14: (arg0: Mut4) => any, v15: (arg0: any) => any, v16: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3], v17: Mut4, v21: any, v5: (arg0: Mut4) => any, v6: (arg0: any) => any, v7: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3], v8: Mut4, v12: any;
    const v4: US14 = v0_1.l3;
    return [(v4.tag === US14_Tag.US14_1) ? ((v14 = ((v_1: Mut4): any => closure12(void 0, v_1)), (v15 = (v14), (v16 = ((arg10$0040_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure25(v3, arg10$0040_1)), (v17 = (new Mut4(v2, v1_1, v16)), (v21 = createComponent, v21(v15, v17))))))) : ((v4.tag === US14_Tag.US14_2) ? v3 : ((v5 = ((v: Mut4): any => closure12(void 0, v)), (v6 = (v5), (v7 = ((arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure25(v3, arg10$0040)), (v8 = (new Mut4(v2, v1_1, v7)), (v12 = createComponent, v12(v6, v8))))))))];
}

export function closure27(unitVar: void, unitVar_1: void): any[] {
    return [<>
        &nbsp;
    </>];
}

export function closure30(v0_1: () => boolean, unitVar: void): any[] {
    return [v0_1()];
}

export function closure31(v0_1: (arg0: boolean) => void, v1_1: () => boolean, unitVar: void): void {
    if (v1_1()) {
        v0_1(false);
    }
}

export function closure33(v0_1: Mut1, v1_1: any, v2: (arg0: Mut1, arg1: Mut1) => void): void {
    const v5: Mut1 = createObj(fill(new Array(0), 0, 0, null));
    v2(v0_1, v5);
    toConsole(interpolate("%A%P()", [["use_store dispatch", "new_state(new):", JSON.stringify(v5)]]));
    v1_1("set", v5);
}

export function closure32(v0_1: Mut6, v1_1: Mut1, v2: any, unitVar: void): void {
    const v3: US13 = v0_1.l3;
    if (v3.tag === US13_Tag.US13_1) {
        const v6: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void = (v: (arg0: Mut1, arg1: Mut1) => void): void => {
            closure33(v1_1, v2, uncurry(2, v));
        };
        v3.fields[0](v1_1, v6);
    }
}

export function closure37(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function method23(v0_1: int32, v1_1: Mut7): boolean {
    return v1_1.l0 < v0_1;
}

export function method22(v0_1: Mut3, v1_1: Mut3): void {
    const v2: string[] = Object.keys(v0_1);
    const v3: int32 = v2.length | 0;
    const v4: Mut7 = new Mut7(0);
    while (method23(v3, v4)) {
        const v6: int32 = v4.l0 | 0;
        const v7: string = v2[v6];
        if (!!v1_1[v7].tag) {
            v0_1[v7] = v1_1[v7];
        }
        const v9: int32 = (v6 + 1) | 0;
        v4.l0 = (v9 | 0);
    }
}

export function method21(v0_1: Mut3): any {
    const v1_1: US7 = v0_1.l11;
    const v4: () => any[] = (v1_1.tag === US7_Tag.US7_1) ? v1_1.fields[0] : ((): any[] => closure37(void 0, void 0));
    const v7: any = Button;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = [v0_1.l0, v0_1.l1, v0_1.l2, v0_1.l3, v0_1.l4, v0_1.l5, v0_1.l6, v0_1.l7, v0_1.l8, v0_1.l9, v0_1.l10, v0_1.l11, v0_1.l12, v0_1.l13, v0_1.l14, v0_1.l15, v0_1.l16, v0_1.l17, v0_1.l18, v0_1.l19, v0_1.l20, v0_1.l21, v0_1.l22, v0_1.l23, v0_1.l24, v0_1.l25, v0_1.l26, v0_1.l27, v0_1.l28, v0_1.l29, v0_1.l30, v0_1.l31, v0_1.l32, v0_1.l33, v0_1.l34, v0_1.l35, v0_1.l36, v0_1.l37, v0_1.l38, v0_1.l39, v0_1.l40, v0_1.l41, v0_1.l42, v0_1.l43, v0_1.l44, v0_1.l45, v0_1.l46, v0_1.l47, v0_1.l48, v0_1.l49, v0_1.l50, v0_1.l51, v0_1.l52, v0_1.l53, v0_1.l54, v0_1.l55, v0_1.l56, v0_1.l57, v0_1.l58, v0_1.l59, v0_1.l60, v0_1.l61, v0_1.l62, v0_1.l63, v0_1.l64];
    const v146: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], US3_US3_1("neutral"), US6_US6_1(true), patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], US3_US3_1("left"), patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], US3_US3_1("xs"), patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    method22(v146, new Mut3(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62], patternInput_1[63], patternInput_1[64]));
    const patternInput_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = [v146.l0, v146.l1, v146.l2, v146.l3, v146.l4, v146.l5, v146.l6, v146.l7, v146.l8, v146.l9, v146.l10, v146.l11, v146.l12, v146.l13, v146.l14, v146.l15, v146.l16, v146.l17, v146.l18, v146.l19, v146.l20, v146.l21, v146.l22, v146.l23, v146.l24, v146.l25, v146.l26, v146.l27, v146.l28, v146.l29, v146.l30, v146.l31, v146.l32, v146.l33, v146.l34, v146.l35, v146.l36, v146.l37, v146.l38, v146.l39, v146.l40, v146.l41, v146.l42, v146.l43, v146.l44, v146.l45, v146.l46, v146.l47, v146.l48, v146.l49, v146.l50, v146.l51, v146.l52, v146.l53, v146.l54, v146.l55, v146.l56, v146.l57, v146.l58, v146.l59, v146.l60, v146.l61, v146.l62, v146.l63, v146.l64];
    const v214: any = createObj(method13(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], patternInput_2[10], US7_US7_1(v4), patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62], patternInput_2[63], patternInput_2[64]));
    const v215: (arg0: any) => any = v7;
    const v218: any = createComponent;
    return v218(v215, v214);
}

export function closure36(unitVar: void, v0_1: Mut3): any {
    return method21(v0_1);
}

export function closure38(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Load
    </>];
}

export function closure39(v0_1: (arg0: boolean) => void, v1_1: Mut6, v2: Mut1, v3: any, unitVar: void): void {
    const v4: US13 = v1_1.l2;
    if (v4.tag === US13_Tag.US13_1) {
        const v7: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void = (v: (arg0: Mut1, arg1: Mut1) => void): void => {
            closure33(v2, v3, uncurry(2, v));
        };
        v4.fields[0](v2, v7);
    }
    v0_1(true);
}

export function closure35(v0_1: (arg0: boolean) => void, v1_1: Mut6, v2: Mut1, v3: any, unitVar: void): any[] {
    const v4: (arg0: Mut3) => any = (v: Mut3): any => closure36(void 0, v);
    const v5: (arg0: any) => any = v4;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v71_1: () => any[] = (): any[] => closure38(void 0, void 0);
    const v73_1: () => void = (): void => {
        closure39(v0_1, v1_1, v2, v3, void 0);
    };
    const v75_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v71_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], US12_US12_1(v73_1), patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v75_1.children = v71_1;
    const v79_1: any = createComponent;
    return [v79_1(v5, v75_1)];
}

export function closure44(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function method24(v0_1: Mut8): any {
    const v3: any = Icon;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v70_1: any = v0_1.l1();
    const patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v137: string = "-12px";
    const patternInput_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = v0_1.l0([patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], US3_US3_1(v137), patternInput_1[35], US3_US3_1(v137), patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62], patternInput_1[63], US3_US3_1("0.6")]);
    const v208: any = createObj(method13(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], patternInput_2[10], patternInput_2[11], patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62], patternInput_2[63], patternInput_2[64]));
    const patternInput_3: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = v0_1.l2([patternInput[0], patternInput[1], patternInput[2], US5_US5_1(v70_1), patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], US8_US8_1(v208), patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], US3_US3_1("14px"), patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]]);
    const v279: () => any[] = (): any[] => closure44(void 0, void 0);
    const v282: any = createObj(method13(patternInput_3[0], patternInput_3[1], patternInput_3[2], patternInput_3[3], patternInput_3[4], patternInput_3[5], patternInput_3[6], patternInput_3[7], patternInput_3[8], patternInput_3[9], patternInput_3[10], US7_US7_1(v279), patternInput_3[12], patternInput_3[13], patternInput_3[14], patternInput_3[15], patternInput_3[16], patternInput_3[17], patternInput_3[18], patternInput_3[19], patternInput_3[20], patternInput_3[21], patternInput_3[22], patternInput_3[23], patternInput_3[24], patternInput_3[25], patternInput_3[26], patternInput_3[27], patternInput_3[28], patternInput_3[29], patternInput_3[30], patternInput_3[31], patternInput_3[32], patternInput_3[33], patternInput_3[34], patternInput_3[35], patternInput_3[36], patternInput_3[37], patternInput_3[38], patternInput_3[39], patternInput_3[40], patternInput_3[41], patternInput_3[42], patternInput_3[43], patternInput_3[44], patternInput_3[45], patternInput_3[46], patternInput_3[47], patternInput_3[48], patternInput_3[49], patternInput_3[50], patternInput_3[51], patternInput_3[52], patternInput_3[53], patternInput_3[54], patternInput_3[55], patternInput_3[56], patternInput_3[57], patternInput_3[58], patternInput_3[59], patternInput_3[60], patternInput_3[61], patternInput_3[62], patternInput_3[63], patternInput_3[64]));
    const v283: (arg0: any) => any = v3;
    const v286: any = createComponent;
    return v286(v283, v282);
}

export function closure43(unitVar: void, v0_1: Mut8): any {
    return method24(v0_1);
}

export function closure45(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], _arg[11], _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], _arg[58], _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure46(unitVar: void, unitVar_1: void): any {
    const v2: any = BiRegularRefresh;
    return v2;
}

export function closure47(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure48(v0_1: (arg0: boolean) => void, unitVar: void): void {
    v0_1(true);
}

export function closure49(unitVar: void, unitVar_1: void): any {
    const v2: any = BiRegularDownArrow;
    return v2;
}

export function closure50(unitVar: void, unitVar_1: void): any {
    const v2: any = BiRegularUpArrow;
    return v2;
}

export function closure51(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure52(v0_1: Mut1, v1_1: any, v2: int32, v3: (arg0: boolean) => void, v4: () => boolean, unitVar: void): void {
    const v6: boolean = v4() === false;
    v3(v6);
    const v9: Mut1 = createObj(fill(new Array(0), 0, 0, null));
    const v12: US2 = v6 ? US2_US2_1(v2) : US2_US2_0();
    v9.l9 = v12;
    toConsole(interpolate("%A%P()", [["use_store dispatch", "new_state(new):", JSON.stringify(v9)]]));
    v1_1("set", v9);
}

export function closure53(unitVar: void, unitVar_1: void): any {
    const v2: any = BiRegularUndo;
    return v2;
}

export function closure54(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure55(v0_1: (arg0: boolean) => void, v1_1: Mut6, v2: Mut1, v3: any, unitVar: void): void {
    toConsole(interpolate("%A%P()", ["# on_click"]));
    const v5: US13 = v1_1.l3;
    if (v5.tag === US13_Tag.US13_1) {
        const v8: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void = (v: (arg0: Mut1, arg1: Mut1) => void): void => {
            closure33(v2, v3, uncurry(2, v));
        };
        v5.fields[0](v2, v8);
    }
    v0_1(false);
}

export function closure42(v0_1: Mut1, v1_1: any, v2: int32, v3: (arg0: boolean) => void, v4: (arg0: boolean) => void, v5: (arg0: boolean) => void, v6: () => boolean, v7: Mut6, unitVar: void): any[] {
    const v10: any = IconButton;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v76_1: (arg0: Mut8) => any = (v: Mut8): any => closure43(void 0, v);
    const v77_1: (arg0: any) => any = v76_1;
    const v78_1: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure45(void 0, arg10$0040);
    const v79_1: () => any = (): any => closure46(void 0, void 0);
    const v80_1: Mut8 = new Mut8(v78_1, v79_1, v78_1);
    const v84_1: any = createComponent;
    const v88_1: () => any[] = (): any[] => closure47(void 0, void 0);
    const v90_1: string = "neutral";
    const v92_1: string = "20px";
    const v95_1: () => void = (): void => {
        closure48(v4, void 0);
    };
    const v97_1: string = "xs";
    const v100: any = createObj(method13(patternInput[0], patternInput[1], US3_US3_1("Refresh"), patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v88_1), patternInput[12], US3_US3_1(v90_1), patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], US3_US3_1(v92_1), patternInput[25], US10_US10_1(v84_1(v77_1, v80_1)), patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], US12_US12_1(v95_1), patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], US3_US3_1(v97_1), patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v101: (arg0: any) => any = v10;
    const v102: any = createComponent;
    const v103: any = v102(v101, v100);
    const v104: any = IconButton;
    const patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v173: string = v6() ? "Restore" : "Maximize";
    const v178: (arg0: any) => any = v76_1;
    const v179: Mut8 = new Mut8(v78_1, v6() ? ((): any => closure49(void 0, void 0)) : ((): any => closure50(void 0, void 0)), v78_1);
    const v181: any = createComponent;
    const v184: () => any[] = (): any[] => closure51(void 0, void 0);
    const v189: () => void = (): void => {
        closure52(v0_1, v1_1, v2, v5, v6, void 0);
    };
    const v193: any = createObj(method13(patternInput_1[0], patternInput_1[1], US3_US3_1(v173), patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], US7_US7_1(v184), patternInput_1[12], US3_US3_1(v90_1), patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], US3_US3_1(v92_1), patternInput_1[25], US10_US10_1(v181(v178, v179)), patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], US12_US12_1(v189), patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], US3_US3_1(v97_1), patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62], patternInput_1[63], patternInput_1[64]));
    const v194: (arg0: any) => any = v104;
    const v195: any = createComponent;
    const v196: any = v195(v194, v193);
    const v197: any = IconButton;
    const patternInput_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v263: (arg0: any) => any = v76_1;
    const v264: () => any = (): any => closure53(void 0, void 0);
    const v265: Mut8 = new Mut8(v78_1, v264, v78_1);
    const v267: any = createComponent;
    const v271: () => any[] = (): any[] => closure54(void 0, void 0);
    const v276: () => void = (): void => {
        closure55(v3, v7, v0_1, v1_1, void 0);
    };
    const v280: any = createObj(method13(patternInput_2[0], patternInput_2[1], US3_US3_1("Unload"), patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], patternInput_2[10], US7_US7_1(v271), patternInput_2[12], US3_US3_1(v90_1), patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], US3_US3_1(v92_1), patternInput_2[25], US10_US10_1(v267(v263, v265)), patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], US12_US12_1(v276), patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], US3_US3_1(v97_1), patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62], patternInput_2[63], patternInput_2[64]));
    const v281: (arg0: any) => any = v197;
    const v282: any = createComponent;
    return [v103, v196, v282(v281, v280)];
}

export function closure41(v0_1: Mut1, v1_1: any, v2: int32, v3: (arg0: boolean) => void, v4: (arg0: boolean) => void, v5: () => boolean, v6: (arg0: boolean) => void, v7: () => boolean, v8: Mut6, v9: () => any[], unitVar: void): any[] {
    const v12: any = Stack;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v78_1: US2 = v0_1.l9;
    const v88_1: () => any[] = (): any[] => closure42(v0_1, v1_1, v2, v3, v4, v6, v7, v8, void 0);
    const v94_1: string = "6px";
    const v102: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v88_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], US3_US3_1("row"), (v78_1.tag === US2_Tag.US2_1) ? (((v78_1.fields[0] === v2) !== true) ? US3_US3_1("none") : US3_US3_0()) : US3_US3_0(), patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], US3_US3_1("absolute"), US3_US3_1(v94_1), patternInput[53], US3_US3_1("3px"), patternInput[55], patternInput[56], patternInput[57], patternInput[58], US3_US3_1(v94_1), patternInput[60], patternInput[61], patternInput[62], US2_US2_1(2), patternInput[64]));
    const v103: (arg0: any) => any = v12;
    const v106: any = createComponent;
    return [v106(v103, v102), v5() ? <></> : v9];
}

export function closure40(v0_1: US3, v1_1: US3, v2: US3, v3: US5, v4: US3, v5: US3, v6: US3, v7: US3, v8: US3, v9: US3, v10: US6, v11: US7, v12: US3, v13: US3, v14: US6, v15: US8, v16: US3, v17: US3, v18: US3, v19: US9, v20: US6, v21: US3, v22: US3, v23: US3, v24: US3, v25: US3, v26: US10, v27: US3, v28: US3, v29: US3, v30: US10, v31: US3, v32: US3, v33: US3, v34: US3, v35: US3, v36: US3, v37: US3, v38: US3, v39: US11, v40: US12, v41: US11, v42: US3, v43: US3, v44: US3, v45: US3, v46: US3, v47: US3, v48: US3, v49: US3, v50: US3, v51: US3, v52: US3, v53: US3, v54: US3, v55: US3, v56: US3, v57: US3, v58: US10, v59: US3, v60: US3, v61: US8, v62: US3, v63: US2, v64: US3, v65: Mut1, v66: any, v67_1: int32, v68_1: (arg0: boolean) => void, v69_1: (arg0: boolean) => void, v70_1: () => boolean, v71_1: (arg0: boolean) => void, v72_1: () => boolean, v73_1: Mut6, unitVar: void): any[] {
    let v78_1: any, patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3], v151: () => any[], v158: any, v159: (arg0: any) => any, v162: any;
    return [(v11.tag === US7_Tag.US7_1) ? ((v78_1 = Box, (patternInput = method11(), (v151 = ((): any[] => closure41(v65, v66, v67_1, v68_1, v69_1, v70_1, v71_1, v72_1, v73_1, v11.fields[0], void 0)), (v158 = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v151), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], US3_US3_1("flex"), patternInput[19], patternInput[20], US3_US3_1("1"), patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], (v65.l9.tag === US2_Tag.US2_0) ? US3_US3_1("relative") : US3_US3_0(), patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64])), (v159 = (v78_1), (v162 = createComponent, v162(v159, v158)))))))) : <></>];
}

export function closure34(v0_1: US3, v1_1: US3, v2: US3, v3: US5, v4: US3, v5: US3, v6: US3, v7: US3, v8: US3, v9: US3, v10: US6, v11: US7, v12: US3, v13: US3, v14: US6, v15: US8, v16: US3, v17: US3, v18: US3, v19: US9, v20: US6, v21: US3, v22: US3, v23: US3, v24: US3, v25: US3, v26: US10, v27: US3, v28: US3, v29: US3, v30: US10, v31: US3, v32: US3, v33: US3, v34: US3, v35: US3, v36: US3, v37: US3, v38: US3, v39: US11, v40: US12, v41: US11, v42: US3, v43: US3, v44: US3, v45: US3, v46: US3, v47: US3, v48: US3, v49: US3, v50: US3, v51: US3, v52: US3, v53: US3, v54: US3, v55: US3, v56: US3, v57: US3, v58: US10, v59: US3, v60: US3, v61: US8, v62: US3, v63: US2, v64: US3, v65: Mut1, v66: any, v67_1: int32, v68_1: (arg0: boolean) => void, v69_1: () => boolean, v70_1: (arg0: boolean) => void, v71_1: () => boolean, v72_1: (arg0: boolean) => void, v73_1: () => boolean, v74_1: Mut6, unitVar: void): any[] {
    let v79_1: any, patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3], v145: () => any[], v150: any, v151: (arg0: any) => any, v154: any, v158: any, patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3], v227: US2, v232: US3, v237: US3, v242: US3, v247: US3, v252: US3, v258: () => any[], v265: any, v266: (arg0: any) => any, v269: any;
    return [(v69_1() === false) ? ((v79_1 = Box, (patternInput = method11(), (v145 = ((): any[] => closure35(v68_1, v74_1, v65, v66, void 0)), (v150 = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v145), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], US3_US3_1("3px 0"), patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64])), (v151 = (v79_1), (v154 = createComponent, v154(v151, v150)))))))) : ((v158 = Box, (patternInput_1 = method11(), (v227 = (v73_1() ? US2_US2_1(1) : US2_US2_0()), (v232 = (v73_1() ? US3_US3_1("absolute") : US3_US3_0()), (v237 = (v73_1() ? US3_US3_1("0") : US3_US3_0()), (v242 = (v73_1() ? US3_US3_1("0") : US3_US3_0()), (v247 = (v73_1() ? US3_US3_1("0") : US3_US3_0()), (v252 = (v73_1() ? US3_US3_1("0") : US3_US3_0()), (v258 = ((): any[] => closure40(v0_1, v1_1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23, v24, v25, v26, v27, v28, v29, v30, v31, v32, v33, v34, v35, v36, v37, v38, v39, v40, v41, v42, v43, v44, v45, v46, v47, v48, v49, v50, v51, v52, v53, v54, v55, v56, v57, v58, v59, v60, v61, v62, v63, v64, v65, v66, v67_1, v68_1, v70_1, v71_1, v72_1, v73_1, v74_1, void 0)), (v265 = createObj(method13(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], v73_1() ? US3_US3_1("$bg") : US3_US3_0(), patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], v247, patternInput_1[10], US7_US7_1(v258), patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], US3_US3_1("flex"), patternInput_1[19], patternInput_1[20], US3_US3_1("1"), patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], v252, patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], v232, v242, patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], v237, patternInput_1[60], patternInput_1[61], patternInput_1[62], v227, patternInput_1[64])), (v266 = (v158), (v269 = createComponent, v269(v266, v265))))))))))))))];
}

export function method20(v0_1: Mut6): any {
    const v1_1: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = v0_1.l4;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = v1_1([patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]]);
    const v94_1: US3 = patternInput_1[27];
    const v134: any = useStoreon;
    const v135: any[] = v134();
    const v136: Mut1 = v135[0];
    const v137: any = v135[1];
    const v138: int32 = nonSeeded().Next0() | 0;
    const v139: boolean = v0_1.l0;
    const v142: any = createSignal;
    const v143: any[] = v142(v139);
    let v144: () => boolean;
    const value_4: any = v143[0];
    v144 = (value_4);
    let v145: (arg0: boolean) => void;
    const value_5: any = v143[1];
    v145 = ((arg_1: boolean): void => {
        value_5(arg_1);
    });
    const v146: any = createSignal;
    const v147: any[] = v146(false);
    let v148: () => boolean;
    const value_7: any = v147[0];
    v148 = (value_7);
    let v149: (arg0: boolean) => void;
    const value_8: any = v147[1];
    v149 = ((arg_3: boolean): void => {
        value_8(arg_3);
    });
    const v150: boolean = v0_1.l1;
    const v151: any = createSignal;
    const v152: any[] = v151(v150);
    let v153: () => boolean;
    const value_10: any = v152[0];
    v153 = (value_10);
    let v154: (arg0: boolean) => void;
    const value_11: any = v152[1];
    v154 = ((arg_5: boolean): void => {
        value_11(arg_5);
    });
    const v156: any = on;
    const v157: () => any[] = (): any[] => closure30(v148, void 0);
    const v158: () => void = (): void => {
        closure31(v149, v148, void 0);
    };
    const v159: any = v156(v157, v158);
    const v161: any = createEffect;
    v161(v159);
    const v163: any = onCleanup;
    const v164: () => void = (): void => {
        closure32(v0_1, v136, v137, void 0);
    };
    v163(v164);
    if (v0_1.l0 === true) {
        const v167: US13 = v0_1.l2;
        if (v167.tag === US13_Tag.US13_1) {
            const v170: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void = (v: (arg0: Mut1, arg1: Mut1) => void): void => {
                closure33(v136, v137, uncurry(2, v));
            };
            v167.fields[0](v136, v170);
        }
    }
    const v173: any = Box;
    const patternInput_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v239: () => any[] = (): any[] => closure34(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], v94_1, patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62], patternInput_1[63], patternInput_1[64], v136, v137, v138, v145, v144, v149, v148, v154, v153, v0_1, void 0);
    const v246: any = createObj(method13(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], patternInput_2[10], US7_US7_1(v239), patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], US3_US3_1("flex"), patternInput_2[19], patternInput_2[20], US3_US3_1("1"), patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], v94_1, patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62], patternInput_2[63], patternInput_2[64]));
    const v247: (arg0: any) => any = v173;
    const v249: any = createComponent;
    return v249(v247, v246);
}

export function closure29(unitVar: void, v0_1: Mut6): any {
    return method20(v0_1);
}

export function closure56(v0_1: () => any[], _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v0_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], _arg[58], _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure28(v0_1: Mut5, v1_1: () => boolean, v2: () => any[], unitVar: void): any[] {
    let v21: (arg0: Mut6) => any, v22: (arg0: any) => any, v23: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3], v24: Mut6, v28: any, v7: (arg0: Mut6) => any, v8: (arg0: any) => any, v9: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3], v10: Mut6, v14: any;
    const v3: US14 = v0_1.l3;
    return [(v3.tag === US14_Tag.US14_1) ? (v1_1() ? ((v21 = ((v_1: Mut6): any => closure29(void 0, v_1)), (v22 = (v21), (v23 = ((arg10$0040_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure56(v2, arg10$0040_1)), (v24 = (new Mut6(true, false, v0_1.l0, v0_1.l1, v23)), (v28 = createComponent, v28(v22, v24))))))) : <></>) : ((v3.tag === US14_Tag.US14_2) ? v2 : (v1_1() ? ((v7 = ((v: Mut6): any => closure29(void 0, v)), (v8 = (v7), (v9 = ((arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure56(v2, arg10$0040)), (v10 = (new Mut6(true, false, v0_1.l0, v0_1.l1, v9)), (v14 = createComponent, v14(v8, v10))))))) : <></>))];
}

export function closure23(v0_1: Mut5, v1_1: US3, v2: US3, v3: US3, v4: US5, v5: US3, v6: US3, v7: US3, v8: US3, v9: US3, v10: US3, v11: US6, v12: US7, v13: US3, v14: US3, v15: US6, v16: US8, v17: US3, v18: US3, v19: US3, v20: US9, v21: US6, v22: US3, v23: US3, v24: US3, v25: US3, v26: US3, v27: US10, v28: US3, v29: US3, v30: US3, v31: US10, v32: US3, v33: US3, v34: US3, v35: US3, v36: US3, v37: US3, v38: US3, v39: US3, v40: US11, v41: US12, v42: US11, v43: US3, v44: US3, v45: US3, v46: US3, v47: US3, v48: US3, v49: US3, v50: US3, v51: US3, v52: US3, v53: US3, v54: US3, v55: US3, v56: US3, v57: US3, v58: US3, v59: US10, v60: US3, v61: US3, v62: US8, v63: US3, v64: US2, v65: US3, v66: (arg0: boolean) => void, v67_1: () => boolean, unitVar: void): any[] {
    let v72_1: any, patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3], v151: () => any[], v164: any, v165: (arg0: any) => any, v168: any, v256: any, patternInput_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3], v325: string, v327: () => any[], v347: any, v348: (arg0: any) => any, v351: any, v173: any, patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3], v239: string, v241: () => any[], v247: any, v248: (arg0: any) => any, v251: any;
    return [(v59.tag === US10_Tag.US10_1) ? ((v72_1 = Td, (patternInput = method11(), (v151 = ((): any[] => closure24(v0_1, v66, v67_1, v59.fields[0], void 0)), (v164 = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], US3_US3_1(((v0_1.l3.tag === US14_Tag.US14_2) ? true : v67_1()) ? method19("0px !important", "2px !important") : "0px !important"), US3_US3_1("$neutral5"), patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v151), US3_US3_1("$neutral9"), patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], US3_US3_1("flex"), patternInput[19], patternInput[20], patternInput[21], US3_US3_1("column"), US3_US3_1("$sm"), patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], US3_US3_1("3px 20px 0 8px"), patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64])), (v165 = (v72_1), (v168 = createComponent, v168(v165, v164)))))))) : <></>, (v12.tag === US7_Tag.US7_1) ? ((v256 = Td, (patternInput_2 = method11(), (v325 = "0", (v327 = ((): any[] => closure28(v0_1, v67_1, v12.fields[0], void 0)), (v347 = createObj(method13(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], US3_US3_1(v325), patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], patternInput_2[10], US7_US7_1(v327), patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], US3_US3_1("flex"), patternInput_2[19], patternInput_2[20], US3_US3_1("6"), US3_US3_1("column"), US3_US3_1("$sm"), patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], US3_US3_1("$base"), US3_US3_1(v325), patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], US3_US3_1("85vh"), patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], US3_US3_1(v325), patternInput_2[43], patternInput_2[44], US3_US3_1("auto"), US3_US3_1((v47.tag === US3_Tag.US3_1) ? v47.fields[0] : "0"), patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62], patternInput_2[63], patternInput_2[64])), (v348 = (v256), (v351 = createComponent, v351(v348, v347))))))))) : ((v173 = Td, (patternInput_1 = method11(), (v239 = "0", (v241 = ((): any[] => closure27(void 0, void 0)), (v247 = createObj(method13(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], US3_US3_1(v239), patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], US7_US7_1(v241), patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], US3_US3_1("9px"), patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], US3_US3_1(v239), patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62], patternInput_1[63], patternInput_1[64])), (v248 = (v173), (v251 = createComponent, v251(v248, v247)))))))))];
}

export function method18(v0_1: Mut5): any {
    const v1_1: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = v0_1.l2;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = v1_1([patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]]);
    const v94_1: US3 = patternInput_1[27];
    const v135: boolean = (v0_1.l3.tag === US14_Tag.US14_0) !== true;
    const v138: any = createSignal;
    const v139: any[] = v138(v135);
    let v140: () => boolean;
    const value_1: any = v139[0];
    v140 = (value_1);
    let v141: (arg0: boolean) => void;
    const value_2: any = v139[1];
    v141 = ((arg_1: boolean): void => {
        value_2(arg_1);
    });
    const v144: any = Tr;
    const patternInput_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v217: () => any[] = (): any[] => closure23(v0_1, patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], v94_1, patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62], patternInput_1[63], patternInput_1[64], v141, v140, void 0);
    const v225: any = createObj(method13(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], US3_US3_1("$neutral5"), US3_US3_1("1px 2px"), patternInput_2[9], patternInput_2[10], US7_US7_1(v217), patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], US3_US3_1("flex"), patternInput_2[19], patternInput_2[20], US3_US3_1("1"), US3_US3_1(method19("row", "column")), patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], v94_1, patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62], patternInput_2[63], patternInput_2[64]));
    const v226: (arg0: any) => any = v144;
    const v228: any = createComponent;
    return v228(v226, v225);
}

export function closure22(unitVar: void, v0_1: Mut5): any {
    return method18(v0_1);
}

export function closure65(v0_1: Mut3, unitVar: void): any[] {
    const v1_1: US3 = v0_1.l25;
    return [<>
        {(v1_1.tag === US3_Tag.US3_1) ? v1_1.fields[0] : ""}
    </>];
}

export function closure66(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], _arg[11], _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], US3_US3_0(), _arg[35], US3_US3_1("-13px"), _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], _arg[58], _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure67(unitVar: void, unitVar_1: void): any {
    const v2: any = BiRegularLinkExternal;
    return v2;
}

export function closure64(v0_1: Mut3, unitVar: void): any[] {
    const v3: any = Anchor;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = [v0_1.l0, v0_1.l1, v0_1.l2, v0_1.l3, v0_1.l4, v0_1.l5, v0_1.l6, v0_1.l7, v0_1.l8, v0_1.l9, v0_1.l10, v0_1.l11, v0_1.l12, v0_1.l13, v0_1.l14, v0_1.l15, v0_1.l16, v0_1.l17, v0_1.l18, v0_1.l19, v0_1.l20, v0_1.l21, v0_1.l22, v0_1.l23, v0_1.l24, v0_1.l25, v0_1.l26, v0_1.l27, v0_1.l28, v0_1.l29, v0_1.l30, v0_1.l31, v0_1.l32, v0_1.l33, v0_1.l34, v0_1.l35, v0_1.l36, v0_1.l37, v0_1.l38, v0_1.l39, v0_1.l40, v0_1.l41, v0_1.l42, v0_1.l43, v0_1.l44, v0_1.l45, v0_1.l46, v0_1.l47, v0_1.l48, v0_1.l49, v0_1.l50, v0_1.l51, v0_1.l52, v0_1.l53, v0_1.l54, v0_1.l55, v0_1.l56, v0_1.l57, v0_1.l58, v0_1.l59, v0_1.l60, v0_1.l61, v0_1.l62, v0_1.l63, v0_1.l64];
    const v136: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], patternInput[11], patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], US6_US6_1(true), patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    method22(v136, new Mut3(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], patternInput_1[11], patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62], patternInput_1[63], patternInput_1[64]));
    const patternInput_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = [v136.l0, v136.l1, v136.l2, v136.l3, v136.l4, v136.l5, v136.l6, v136.l7, v136.l8, v136.l9, v136.l10, v136.l11, v136.l12, v136.l13, v136.l14, v136.l15, v136.l16, v136.l17, v136.l18, v136.l19, v136.l20, v136.l21, v136.l22, v136.l23, v136.l24, v136.l25, v136.l26, v136.l27, v136.l28, v136.l29, v136.l30, v136.l31, v136.l32, v136.l33, v136.l34, v136.l35, v136.l36, v136.l37, v136.l38, v136.l39, v136.l40, v136.l41, v136.l42, v136.l43, v136.l44, v136.l45, v136.l46, v136.l47, v136.l48, v136.l49, v136.l50, v136.l51, v136.l52, v136.l53, v136.l54, v136.l55, v136.l56, v136.l57, v136.l58, v136.l59, v136.l60, v136.l61, v136.l62, v136.l63, v136.l64];
    const v202: () => any[] = (): any[] => closure65(v0_1, void 0);
    const v205: any = createObj(method13(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], patternInput_2[10], US7_US7_1(v202), patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62], patternInput_2[63], patternInput_2[64]));
    const v206: (arg0: any) => any = v3;
    const v209: any = createComponent;
    const v213: (arg0: Mut8) => any = (v: Mut8): any => closure43(void 0, v);
    const v214: (arg0: any) => any = v213;
    const v215: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure66(void 0, arg10$0040_1);
    const v216: () => any = (): any => closure67(void 0, void 0);
    const v217: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_3: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure45(void 0, arg10$0040_3);
    const v218: Mut8 = new Mut8(v215, v216, v217);
    const v220: any = createComponent;
    return [v209(v206, v205), <>
        &nbsp;
    </>, v220(v214, v218)];
}

export function method26(v0_1: Mut3): any {
    const v3: any = Box;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v69_1: () => any[] = (): any[] => closure64(v0_1, void 0);
    const v72_1: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v69_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v73_1: (arg0: any) => any = v3;
    const v76_1: any = createComponent;
    return v76_1(v73_1, v72_1);
}

export function closure63(unitVar: void, v0_1: Mut3): any {
    return method26(v0_1);
}

export function closure68(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure62(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut3) => any = (v: Mut3): any => closure63(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v67_1: () => any[] = (): any[] => closure68(void 0, void 0);
    const v71_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v67_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], US3_US3_1("https://github.com/fc1943s/tictactoe_spiral"), patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v71_1.children = v67_1;
    const v75_1: any = createComponent;
    return [v75_1(v1_1, v71_1)];
}

export function closure61(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v65: () => any[] = (): any[] => closure62(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v65), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], US3_US3_1("1px 6px"), _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], _arg[58], _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure70(v0_1: string, unitVar: void): any[] {
    const v1_1: (arg0: Mut3) => any = (v: Mut3): any => closure63(void 0, v);
    const v2: (arg0: any) => any = v1_1;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v68_1: () => any[] = (): any[] => closure68(void 0, void 0);
    const v71_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v68_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], US3_US3_1(v0_1), patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v71_1.children = v68_1;
    const v75_1: any = createComponent;
    return [v75_1(v2, v71_1)];
}

export function closure69(v0_1: string, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v66: () => any[] = (): any[] => closure70(v0_1, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v66), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], US3_US3_1("1px 6px"), _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], _arg[58], _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure72(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut3) => any = (v: Mut3): any => closure63(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v67_1: () => any[] = (): any[] => closure68(void 0, void 0);
    const v71_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v67_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], US3_US3_1("https://fc1943s.github.io/tictactoe_spiral"), patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v71_1.children = v67_1;
    const v75_1: any = createComponent;
    return [v75_1(v1_1, v71_1)];
}

export function closure71(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v65: () => any[] = (): any[] => closure72(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v65), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], US3_US3_1("1px 6px"), _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], _arg[58], _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure74(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut3) => any = (v: Mut3): any => closure63(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v67_1: () => any[] = (): any[] => closure68(void 0, void 0);
    const v71_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v67_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], US3_US3_1("https://fc1943s.github.io/tictactoe_spiral/docs"), patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v71_1.children = v67_1;
    const v75_1: any = createComponent;
    return [v75_1(v1_1, v71_1)];
}

export function closure73(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v65: () => any[] = (): any[] => closure74(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v65), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], US3_US3_1("1px 6px"), _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], _arg[58], _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure60(v0_1: string, unitVar: void): any[] {
    let v2: (arg0: Mut5) => any, v3: (arg0: any) => any, v6: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3], v8: Mut5, v12: any, v15: (arg0: Mut5) => any, v16: (arg0: any) => any, v19: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3], v21: Mut5, v25: any;
    const v28: (arg0: Mut5) => any = (v_2: Mut5): any => closure22(void 0, v_2);
    const v29: (arg0: any) => any = v28;
    const v32: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure71(void 0, arg10$0040_2);
    const v34: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v32, US14_US14_2());
    const v38: any = createComponent;
    const v40: (arg0: any) => any = v28;
    const v43: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_3: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure73(void 0, arg10$0040_3);
    const v45: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v43, US14_US14_2());
    const v47: any = createComponent;
    return [("" === v0_1) ? ((v2 = ((v: Mut5): any => closure22(void 0, v)), (v3 = (v2), (v6 = ((arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure61(void 0, arg10$0040)), (v8 = (new Mut5(US13_US13_0(), US13_US13_0(), v6, US14_US14_2())), (v12 = createComponent, v12(v3, v8))))))) : ((v15 = ((v_1: Mut5): any => closure22(void 0, v_1)), (v16 = (v15), (v19 = ((arg10$0040_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure69(`https://github.com/fc1943s/tictactoe_spiral/tree/${v0_1}`, arg10$0040_1)), (v21 = (new Mut5(US13_US13_0(), US13_US13_0(), v19, US14_US14_2())), (v25 = createComponent, v25(v16, v21))))))), v38(v29, v34), v47(v40, v45)];
}

export function method25(): any {
    const patternInput: [string, any, string, string, boolean] = method1();
    const v5: (arg0: Mut3) => any = (v: Mut3): any => closure18(void 0, v);
    const v6: (arg0: any) => any = v5;
    const patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v72_1: () => any[] = (): any[] => closure60(patternInput[3], void 0);
    const v74_1: Mut3 = new Mut3(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], US7_US7_1(v72_1), patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62], patternInput_1[63], patternInput_1[64]);
    v74_1.children = v72_1;
    const v78_1: any = createComponent;
    return v78_1(v6, v74_1);
}

export function closure59(unitVar: void, v0_1: Mut3): any {
    return method25();
}

export function closure75(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure58(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut3) => any = (v: Mut3): any => closure59(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v67_1: () => any[] = (): any[] => closure75(void 0, void 0);
    const v69_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v67_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v69_1.children = v67_1;
    const v73_1: any = createComponent;
    return [v73_1(v1_1, v69_1)];
}

export function closure57(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v67_1: () => any[] = (): any[] => closure58(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v67_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        Links
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure84(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Dark
    </>];
}

export function closure85(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Light
    </>];
}

export function closure83(unitVar: void, unitVar_1: void): any[] {
    const v2: any = Radio;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v70_1: () => any[] = (): any[] => closure84(void 0, void 0);
    const v72_1: string = "neutral";
    const v74_1: string = "sm";
    const v78_1: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v70_1), patternInput[12], US3_US3_1(v72_1), patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], US3_US3_1(v74_1), patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], US8_US8_1("dark"), patternInput[62], patternInput[63], patternInput[64]));
    const v79_1: (arg0: any) => any = v2;
    const v82_1: any = createComponent;
    const v83_1: any = v82_1(v79_1, v78_1);
    const v84_1: any = Radio;
    const patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v152: () => any[] = (): any[] => closure85(void 0, void 0);
    const v158: any = createObj(method13(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], US7_US7_1(v152), patternInput_1[12], US3_US3_1(v72_1), patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], US3_US3_1(v74_1), patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], US8_US8_1("light"), patternInput_1[62], patternInput_1[63], patternInput_1[64]));
    const v159: (arg0: any) => any = v84_1;
    const v160: any = createComponent;
    return [v83_1, v160(v159, v158)];
}

export function closure82(unitVar: void, unitVar_1: void): any[] {
    const v2: any = Stack;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v68_1: () => any[] = (): any[] => closure83(void 0, void 0);
    const v75_1: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v68_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], US3_US3_1("row"), patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], US3_US3_1("$4"), patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v76_1: (arg0: any) => any = v2;
    const v79_1: any = createComponent;
    return [v79_1(v76_1, v75_1)];
}

export function closure86(v0_1: () => void, v1_1: any): void {
    v0_1();
}

export function closure81(v0_1: () => void, v1_1: () => string, unitVar: void): any[] {
    const v4: any = RadioGroup;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v71_1: () => any[] = (): any[] => closure82(void 0, void 0);
    const v74_1: (arg0: any) => void = (v: any): void => {
        closure86(v0_1, v);
    };
    const v77_1: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v71_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], US3_US3_1(v1_1()), patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], US11_US11_1(v74_1), patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v78_1: (arg0: any) => any = v4;
    const v81_1: any = createComponent;
    return [v81_1(v78_1, v77_1)];
}

export function closure80(v0_1: () => void, v1_1: () => string, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v69_1: () => any[] = (): any[] => closure81(v0_1, v1_1, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v69_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], US3_US3_1("5px 6px"), _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        Theme
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure79(v0_1: () => void, v1_1: () => string, unitVar: void): any[] {
    const v2: (arg0: Mut5) => any = (v: Mut5): any => closure22(void 0, v);
    const v3: (arg0: any) => any = v2;
    const v6: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure80(v0_1, v1_1, arg10$0040);
    const v8: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v6, US14_US14_2());
    const v12: any = createComponent;
    return [v12(v3, v8)];
}

export function method27(): any {
    const v2: any = useColorMode;
    const v3: any = v2();
    const v4: () => string = v3.colorMode;
    const v5: () => void = v3.toggleColorMode;
    const v6: (arg0: Mut3) => any = (v: Mut3): any => closure18(void 0, v);
    const v7: (arg0: any) => any = v6;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v73_1: () => any[] = (): any[] => closure79(v5, v4, void 0);
    const v75_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v73_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v75_1.children = v73_1;
    const v79_1: any = createComponent;
    return v79_1(v7, v75_1);
}

export function closure78(unitVar: void, v0_1: Mut3): any {
    return method27();
}

export function closure87(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure77(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut3) => any = (v: Mut3): any => closure78(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v67_1: () => any[] = (): any[] => closure87(void 0, void 0);
    const v69_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v67_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v69_1.children = v67_1;
    const v73_1: any = createComponent;
    return [v73_1(v1_1, v69_1)];
}

export function closure76(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v67_1: () => any[] = (): any[] => closure77(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v67_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        Settings
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure99(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure100(v0_1: Mut9, v1_1: Mut1, v2: any, v3: any): void {
    const v4: string = v3.currentTarget.value;
    const v7: Mut1 = createObj(fill(new Array(0), 0, 0, null));
    v0_1.l1(v1_1, v7, US3_US3_1(v4));
    toConsole(interpolate("%A%P()", [["use_store dispatch", "new_state(new):", JSON.stringify(v7)]]));
    v2("set", v7);
}

export function method30(v0_1: Mut9): any {
    const v3: any = useStoreon;
    const v4: any[] = v3();
    const v5: Mut1 = v4[0];
    const v6: any = v4[1];
    const v9: any = Input;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v76_1: US3 = v0_1.l0(v5);
    const v77_1: string = void 0;
    const v81_1: () => any[] = (): any[] => closure99(void 0, void 0);
    const v83_1: (arg0: any) => void = (v: any): void => {
        closure100(v0_1, v5, v6, v);
    };
    const v91_1: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v81_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], US11_US11_1(v83_1), patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], US3_US3_1("xs"), patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], US3_US3_1("text"), US8_US8_1((v76_1.tag === US3_Tag.US3_1) ? v76_1.fields[0] : v77_1), patternInput[62], patternInput[63], patternInput[64]));
    const v92_1: (arg0: any) => any = v9;
    const v95_1: any = createComponent;
    return v95_1(v92_1, v91_1);
}

export function closure98(unitVar: void, v0_1: Mut9): any {
    return method30(v0_1);
}

export function closure101(unitVar: void, v0_1: Mut1): US3 {
    return v0_1.l2;
}

export function closure104(v0_1: Mut1, v1_1: US3): void {
    v0_1.l2 = v1_1;
}

export function closure103(unitVar: void, v0_1: Mut1): (arg0: US3) => void {
    return (v: US3): void => {
        closure104(v0_1, v);
    };
}

export function closure102(unitVar: void, v0_1: Mut1): (arg0: Mut1, arg1: US3) => void {
    return (v: Mut1): (arg0: US3) => void => closure103(void 0, v);
}

export function closure97(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut9) => any = (v: Mut9): any => closure98(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const v2: (arg0: Mut1) => US3 = (v_1: Mut1): US3 => closure101(void 0, v_1);
    const v3: (arg0: Mut1, arg1: Mut1, arg2: US3) => void = (v_2: Mut1): (arg0: Mut1, arg1: US3) => void => closure102(void 0, v_2);
    const v4: Mut9 = new Mut9(v2, uncurry(3, v3));
    const v8: any = createComponent;
    return [v8(v1_1, v4)];
}

export function closure96(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v67_1: () => any[] = (): any[] => closure97(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v67_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], US3_US3_1("3px"), _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        Token
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure107(unitVar: void, v0_1: Mut1): US3 {
    return v0_1.l3;
}

export function closure110(v0_1: Mut1, v1_1: US3): void {
    v0_1.l3 = v1_1;
}

export function closure109(unitVar: void, v0_1: Mut1): (arg0: US3) => void {
    return (v: US3): void => {
        closure110(v0_1, v);
    };
}

export function closure108(unitVar: void, v0_1: Mut1): (arg0: Mut1, arg1: US3) => void {
    return (v: Mut1): (arg0: US3) => void => closure109(void 0, v);
}

export function closure106(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut9) => any = (v: Mut9): any => closure98(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const v2: (arg0: Mut1) => US3 = (v_1: Mut1): US3 => closure107(void 0, v_1);
    const v3: (arg0: Mut1, arg1: Mut1, arg2: US3) => void = (v_2: Mut1): (arg0: Mut1, arg1: US3) => void => closure108(void 0, v_2);
    const v4: Mut9 = new Mut9(v2, uncurry(3, v3));
    const v8: any = createComponent;
    return [v8(v1_1, v4)];
}

export function closure105(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v67_1: () => any[] = (): any[] => closure106(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v67_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], US3_US3_1("3px"), _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        URL
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure114(v0_1: Mut10, v1_1: Mut1, v2: any, v3: any): void {
    const v4: int32 = v3.currentTarget.value | 0;
    const v7: Mut1 = createObj(fill(new Array(0), 0, 0, null));
    v0_1.l1(v1_1, v7, US2_US2_1(v4));
    toConsole(interpolate("%A%P()", [["use_store dispatch", "new_state(new):", JSON.stringify(v7)]]));
    v2("set", v7);
}

export function method31(v0_1: Mut10): any {
    const v3: any = useStoreon;
    const v4: any[] = v3();
    const v5: Mut1 = v4[0];
    const v6: any = v4[1];
    const v9: any = Input;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v76_1: US2 = v0_1.l0(v5);
    const v77_1: int32 = (void 0) | 0;
    const v81_1: () => any[] = (): any[] => closure99(void 0, void 0);
    const v83_1: (arg0: any) => void = (v: any): void => {
        closure114(v0_1, v5, v6, v);
    };
    const v91_1: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v81_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], US11_US11_1(v83_1), patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], US3_US3_1("xs"), patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], US3_US3_1("text"), US8_US8_1((v76_1.tag === US2_Tag.US2_1) ? v76_1.fields[0] : v77_1), patternInput[62], patternInput[63], patternInput[64]));
    const v92_1: (arg0: any) => any = v9;
    const v95_1: any = createComponent;
    return v95_1(v92_1, v91_1);
}

export function closure113(unitVar: void, v0_1: Mut10): any {
    return method31(v0_1);
}

export function closure115(unitVar: void, v0_1: Mut1): US2 {
    return v0_1.l1;
}

export function closure118(v0_1: Mut1, v1_1: US2): void {
    v0_1.l1 = v1_1;
}

export function closure117(unitVar: void, v0_1: Mut1): (arg0: US2) => void {
    return (v: US2): void => {
        closure118(v0_1, v);
    };
}

export function closure116(unitVar: void, v0_1: Mut1): (arg0: Mut1, arg1: US2) => void {
    return (v: Mut1): (arg0: US2) => void => closure117(void 0, v);
}

export function closure112(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut10) => any = (v: Mut10): any => closure113(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const v2: (arg0: Mut1) => US2 = (v_1: Mut1): US2 => closure115(void 0, v_1);
    const v3: (arg0: Mut1, arg1: Mut1, arg2: US2) => void = (v_2: Mut1): (arg0: Mut1, arg1: US2) => void => closure116(void 0, v_2);
    const v4: Mut10 = new Mut10(v2, uncurry(3, v3));
    const v8: any = createComponent;
    return [v8(v1_1, v4)];
}

export function closure111(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v67_1: () => any[] = (): any[] => closure112(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v67_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], US3_US3_1("3px"), _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        Port
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure95(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut5) => any = (v: Mut5): any => closure22(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const v4: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure96(void 0, arg10$0040);
    const v6: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v4, US14_US14_2());
    const v10: any = createComponent;
    const v12: (arg0: any) => any = v0_1;
    const v15: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure105(void 0, arg10$0040_1);
    const v17: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v15, US14_US14_2());
    const v19: any = createComponent;
    const v21: (arg0: any) => any = v0_1;
    const v24: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure111(void 0, arg10$0040_2);
    const v26: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v24, US14_US14_2());
    const v28: any = createComponent;
    return [v10(v1_1, v6), v19(v12, v17), v28(v21, v26)];
}

export function method29(): any {
    const v0_1: (arg0: Mut3) => any = (v: Mut3): any => closure18(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v67_1: () => any[] = (): any[] => closure95(void 0, void 0);
    const v69_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v67_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v69_1.children = v67_1;
    const v73_1: any = createComponent;
    return v73_1(v1_1, v69_1);
}

export function closure94(unitVar: void, v0_1: Mut3): any {
    return method29();
}

export function closure119(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure93(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut3) => any = (v: Mut3): any => closure94(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v67_1: () => any[] = (): any[] => closure119(void 0, void 0);
    const v69_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v67_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v69_1.children = v67_1;
    const v73_1: any = createComponent;
    return [v73_1(v1_1, v69_1)];
}

export function closure92(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v67_1: () => any[] = (): any[] => closure93(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v67_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        Connection
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure130(v0_1: US0, v1_1: string, v2: string, v3: string, v4: Mut1): US3 {
    return US3_US3_1(v1_1);
}

export function closure133(v0_1: US0, v1_1: string, v2: string, v3: string, v4: Mut1, v5: Mut1, v6: US3): void {
    let copyOfStruct: US0, copyOfStruct_1: US0;
    const v7: [US0, string, string, string][] = v4.l0;
    const v11: int32 = v7.length | 0;
    const v12: [US0, string, string, string][] = fill(new Array(v11), 0, v11, null);
    const v13: Mut7 = new Mut7(0);
    while (method23(v11, v13)) {
        const v15: int32 = v13.l0 | 0;
        const patternInput_1: [US0, string, string, string] = v7[v15];
        const v19: string = patternInput_1[3];
        const v18: string = patternInput_1[2];
        const v16: US0 = patternInput_1[0];
        const patternInput_2: [US0, string, string, string] = ((copyOfStruct = v16, (copyOfStruct.tag === US0_Tag.US0_1) ? ((copyOfStruct_1 = v0_1, (copyOfStruct_1.tag === US0_Tag.US0_1) && ((copyOfStruct.fields[0].tag === US1_Tag.US1_1) ? (copyOfStruct_1.fields[0].tag === US1_Tag.US1_1) : (copyOfStruct_1.fields[0].tag === US1_Tag.US1_0)))) : (v0_1.tag === US0_Tag.US0_0))) ? [v16, (v6.tag === US3_Tag.US3_1) ? v6.fields[0] : "", v18, v19] : [v16, patternInput_1[1], v18, v19];
        v12[v15] = [patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3]];
        const v31: int32 = (v15 + 1) | 0;
        v13.l0 = (v31 | 0);
    }
    v5.l0 = v12;
}

export function closure132(v0_1: US0, v1_1: string, v2: string, v3: string, v4: Mut1, v5: Mut1): (arg0: US3) => void {
    return (v: US3): void => {
        closure133(v0_1, v1_1, v2, v3, v4, v5, v);
    };
}

export function closure131(v0_1: US0, v1_1: string, v2: string, v3: string, v4: Mut1): (arg0: Mut1, arg1: US3) => void {
    return (v: Mut1): (arg0: US3) => void => closure132(v0_1, v1_1, v2, v3, v4, v);
}

export function closure129(v0_1: US0, v1_1: string, v2: string, v3: string, unitVar: void): any[] {
    const v4: (arg0: Mut9) => any = (v: Mut9): any => closure98(void 0, v);
    const v5: (arg0: any) => any = v4;
    const v6: (arg0: Mut1) => US3 = (v_1: Mut1): US3 => closure130(v0_1, v1_1, v2, v3, v_1);
    const v7: (arg0: Mut1, arg1: Mut1, arg2: US3) => void = (v_2: Mut1): (arg0: Mut1, arg1: US3) => void => closure131(v0_1, v1_1, v2, v3, v_2);
    const v8: Mut9 = new Mut9(v6, uncurry(3, v7));
    const v12: any = createComponent;
    return [v12(v5, v8)];
}

export function closure128(v0_1: US0, v1_1: string, v2: string, v3: string, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v71_1: () => any[] = (): any[] => closure129(v0_1, v1_1, v2, v3, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v71_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], US3_US3_1("3px"), _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        Address
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure136(v0_1: US0, v1_1: string, v2: string, v3: string, v4: Mut1): US3 {
    return US3_US3_1(v3);
}

export function closure139(v0_1: US0, v1_1: string, v2: string, v3: string, v4: Mut1, v5: Mut1, v6: US3): void {
    let copyOfStruct: US0, copyOfStruct_1: US0;
    const v7: [US0, string, string, string][] = v4.l0;
    const v11: int32 = v7.length | 0;
    const v12: [US0, string, string, string][] = fill(new Array(v11), 0, v11, null);
    const v13: Mut7 = new Mut7(0);
    while (method23(v11, v13)) {
        const v15: int32 = v13.l0 | 0;
        const patternInput_1: [US0, string, string, string] = v7[v15];
        const v18: string = patternInput_1[2];
        const v17: string = patternInput_1[1];
        const v16: US0 = patternInput_1[0];
        const patternInput_2: [US0, string, string, string] = ((copyOfStruct = v16, (copyOfStruct.tag === US0_Tag.US0_1) ? ((copyOfStruct_1 = v0_1, (copyOfStruct_1.tag === US0_Tag.US0_1) && ((copyOfStruct.fields[0].tag === US1_Tag.US1_1) ? (copyOfStruct_1.fields[0].tag === US1_Tag.US1_1) : (copyOfStruct_1.fields[0].tag === US1_Tag.US1_0)))) : (v0_1.tag === US0_Tag.US0_0))) ? [v16, v17, v18, (v6.tag === US3_Tag.US3_1) ? v6.fields[0] : ""] : [v16, v17, v18, patternInput_1[3]];
        v12[v15] = [patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3]];
        const v31: int32 = (v15 + 1) | 0;
        v13.l0 = (v31 | 0);
    }
    v5.l0 = v12;
}

export function closure138(v0_1: US0, v1_1: string, v2: string, v3: string, v4: Mut1, v5: Mut1): (arg0: US3) => void {
    return (v: US3): void => {
        closure139(v0_1, v1_1, v2, v3, v4, v5, v);
    };
}

export function closure137(v0_1: US0, v1_1: string, v2: string, v3: string, v4: Mut1): (arg0: Mut1, arg1: US3) => void {
    return (v: Mut1): (arg0: US3) => void => closure138(v0_1, v1_1, v2, v3, v4, v);
}

export function closure135(v0_1: US0, v1_1: string, v2: string, v3: string, unitVar: void): any[] {
    const v4: (arg0: Mut9) => any = (v: Mut9): any => closure98(void 0, v);
    const v5: (arg0: any) => any = v4;
    const v6: (arg0: Mut1) => US3 = (v_1: Mut1): US3 => closure136(v0_1, v1_1, v2, v3, v_1);
    const v7: (arg0: Mut1, arg1: Mut1, arg2: US3) => void = (v_2: Mut1): (arg0: Mut1, arg1: US3) => void => closure137(v0_1, v1_1, v2, v3, v_2);
    const v8: Mut9 = new Mut9(v6, uncurry(3, v7));
    const v12: any = createComponent;
    return [v12(v5, v8)];
}

export function closure134(v0_1: US0, v1_1: string, v2: string, v3: string, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v71_1: () => any[] = (): any[] => closure135(v0_1, v1_1, v2, v3, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v71_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], US3_US3_1("3px"), _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        Private Key
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure127(v0_1: US0, v1_1: string, v2: string, v3: string, unitVar: void): any[] {
    const v4: (arg0: Mut5) => any = (v: Mut5): any => closure22(void 0, v);
    const v5: (arg0: any) => any = v4;
    const v8: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure128(v0_1, v1_1, v2, v3, arg10$0040);
    const v10: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v8, US14_US14_2());
    const v14: any = createComponent;
    const v16: (arg0: any) => any = v4;
    const v19: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure134(v0_1, v1_1, v2, v3, arg10$0040_1);
    const v21: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v19, US14_US14_2());
    const v23: any = createComponent;
    return [v14(v5, v10), v23(v16, v21)];
}

export function closure126(v0_1: US0, v1_1: string, v2: string, v3: string, unitVar: void): any[] {
    const v4: (arg0: Mut3) => any = (v: Mut3): any => closure18(void 0, v);
    const v5: (arg0: any) => any = v4;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v71_1: () => any[] = (): any[] => closure127(v0_1, v1_1, v2, v3, void 0);
    const v73_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v71_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v73_1.children = v71_1;
    const v77_1: any = createComponent;
    return [v77_1(v5, v73_1)];
}

export function closure125(v0_1: US0, v1_1: string, v2: string, v3: string, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v76_1: () => any[] = (): any[] => closure126(v0_1, v1_1, v2, v3, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v76_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        {(v0_1.tag === US0_Tag.US0_1) ? ((v0_1.fields[0].tag === US1_Tag.US1_1) ? "x" : "o") : "admin"}
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure124(unitVar: void, _arg: [US0, string, string, string]): any[] {
    const v4: (arg0: Mut5) => any = (v: Mut5): any => closure22(void 0, v);
    const v5: (arg0: any) => any = v4;
    const v8: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure125(_arg[0], _arg[1], _arg[2], _arg[3], arg10$0040);
    const v10: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v8, US14_US14_2());
    const v14: any = createComponent;
    return [v14(v5, v10)];
}

export function closure123(v0_1: Mut1, unitVar: void): any[] {
    const patternInput: [[US0, string, string, string][], US2, US3, US3] = [v0_1.l0, v0_1.l1, v0_1.l2, v0_1.l3];
    const v7: any = For;
    const v8: (arg0: [US0, string, string, string]) => any[] = (arg10$0040: [US0, string, string, string]): any[] => closure124(void 0, arg10$0040);
    const v9: () => any[] = v8;
    const patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v79_1: any = createObj(method13(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], US7_US7_1(v9), patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], US9_US9_1(patternInput[0]), patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62], patternInput_1[63], patternInput_1[64]));
    const v80_1: (arg0: any) => any = v7;
    const v82_1: any = createComponent;
    return [v82_1(v80_1, v79_1)];
}

export function method32(): any {
    const v2: any = useStoreon;
    const v3: any[] = v2();
    const v4: Mut1 = v3[0];
    const v5: any = v3[1];
    const v6: (arg0: Mut3) => any = (v: Mut3): any => closure18(void 0, v);
    const v7: (arg0: any) => any = v6;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v73_1: () => any[] = (): any[] => closure123(v4, void 0);
    const v75_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v73_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v75_1.children = v73_1;
    const v79_1: any = createComponent;
    return v79_1(v7, v75_1);
}

export function closure122(unitVar: void, v0_1: Mut3): any {
    return method32();
}

export function closure140(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure121(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut3) => any = (v: Mut3): any => closure122(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v67_1: () => any[] = (): any[] => closure140(void 0, void 0);
    const v69_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v67_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v69_1.children = v67_1;
    const v73_1: any = createComponent;
    return [v73_1(v1_1, v69_1)];
}

export function closure120(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v67_1: () => any[] = (): any[] => closure121(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v67_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        Accounts
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure143(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure142(unitVar: void, unitVar_1: void): any[] {
    const v2: any = hope;
    const v3: any = v2.iframe;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v73_1: () => any[] = (): any[] => closure143(void 0, void 0);
    const v83_1: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], US3_US3_1("#aaa"), patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v73_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], US3_US3_1("1"), patternInput[22], patternInput[23], US3_US3_1("350px"), patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], US3_US3_1("https://bank.testnet.algorand.network"), patternInput[56], patternInput[57], US10_US10_1(<>
        algorand testnet bank
    </>), patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v84_1: (arg0: any) => any = v3;
    const v87_1: any = createComponent;
    return [v87_1(v84_1, v83_1)];
}

export function closure141(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v67_1: () => any[] = (): any[] => closure142(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v67_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        Testnet Bank Dispenser
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure91(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut5) => any = (v: Mut5): any => closure22(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const v4: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure92(void 0, arg10$0040);
    const v6: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v4, US14_US14_2());
    const v10: any = createComponent;
    const v12: (arg0: any) => any = v0_1;
    const v15: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure120(void 0, arg10$0040_1);
    const v17: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v15, US14_US14_2());
    const v19: any = createComponent;
    const v21: (arg0: any) => any = v0_1;
    const v24: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure141(void 0, arg10$0040_2);
    const v26: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v24, US14_US14_0());
    const v28: any = createComponent;
    return [v10(v1_1, v6), v19(v12, v17), v28(v21, v26)];
}

export function method28(): any {
    const v0_1: (arg0: Mut3) => any = (v: Mut3): any => closure18(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v67_1: () => any[] = (): any[] => closure91(void 0, void 0);
    const v69_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v67_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v69_1.children = v67_1;
    const v73_1: any = createComponent;
    return v73_1(v1_1, v69_1);
}

export function closure90(unitVar: void, v0_1: Mut3): any {
    return method28();
}

export function closure144(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure89(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut3) => any = (v: Mut3): any => closure90(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v67_1: () => any[] = (): any[] => closure144(void 0, void 0);
    const v69_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v67_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v69_1.children = v67_1;
    const v73_1: any = createComponent;
    return [v73_1(v1_1, v69_1)];
}

export function closure88(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v67_1: () => any[] = (): any[] => closure89(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v67_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], US3_US3_1("db"), _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        Chain
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure152(v0_1: Mut1, v1_1: Mut1): void {
    const v3: [US4, US4][] = v0_1.l5;
    const v6: [US4, US4][] = [[US4_US4_1(), US4_US4_1()]];
    const v7: int32 = v3.length | 0;
    const v9: int32 = (v7 + v6.length) | 0;
    const v10: [US4, US4][] = fill(new Array(v9), 0, v9, null);
    const v11: Mut7 = new Mut7(0);
    while (method23(v9, v11)) {
        const v13: int32 = v11.l0 | 0;
        let patternInput_3: [US4, US4];
        if (v13 < v7) {
            const patternInput_1: [US4, US4] = v3[v13];
            patternInput_3 = [patternInput_1[0], patternInput_1[1]];
        }
        else {
            const v17: int32 = (v13 - v7) | 0;
            const patternInput_2: [US4, US4] = v6[v17];
            patternInput_3 = [patternInput_2[0], patternInput_2[1]];
        }
        v10[v13] = [patternInput_3[0], patternInput_3[1]];
        const v22: int32 = (v13 + 1) | 0;
        v11.l0 = (v22 | 0);
    }
    v1_1.l5 = v10;
}

export function closure151(unitVar: void, v0_1: Mut1): (arg0: Mut1) => void {
    return (v: Mut1): void => {
        closure152(v0_1, v);
    };
}

export function closure150(unitVar: void, v0_1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void {
    const v1_1: (arg0: Mut1, arg1: Mut1) => void = (v: Mut1): (arg0: Mut1) => void => closure151(void 0, v);
    v0_1(v1_1);
}

export function closure149(unitVar: void, v0_1: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void {
    return (v: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void => {
        closure150(void 0, v);
    };
}

export function method34(v0_1: int32, v1_1: Mut11): boolean {
    return v1_1.l0 < v0_1;
}

export function closure156(v0_1: Mut1, v1_1: Mut1): void {
    const v3: [US4, US4][] = v0_1.l5;
    const v4: int32 = v3.length | 0;
    const v5: [US4, US4][] = fill(new Array(v4), 0, v4, null);
    const v6: Mut11 = new Mut11(0, 0);
    while (method34(v4, v6)) {
        const v8: int32 = v6.l0 | 0;
        const v9: int32 = v6.l1 | 0;
        const patternInput_1: [US4, US4] = v3[v8];
        const v11: US4 = patternInput_1[1];
        const v10: US4 = patternInput_1[0];
        let v19: int32;
        if (((v10.tag === US4_Tag.US4_1) && (v11.tag === US4_Tag.US4_1)) !== true) {
            v5[v9] = [v10, v11];
            v19 = (v9 + 1);
        }
        else {
            v19 = v9;
        }
        const v20: int32 = (v8 + 1) | 0;
        v6.l0 = (v20 | 0);
        v6.l1 = (v19 | 0);
    }
    const v21: int32 = v6.l1 | 0;
    const v22: [US4, US4][] = fill(new Array(v21), 0, v21, null);
    const v23: Mut7 = new Mut7(0);
    while (method23(v21, v23)) {
        const v25: int32 = v23.l0 | 0;
        const patternInput_2: [US4, US4] = v5[v25];
        v22[v25] = [patternInput_2[0], patternInput_2[1]];
        const v28: int32 = (v25 + 1) | 0;
        v23.l0 = (v28 | 0);
    }
    v1_1.l5 = v22;
}

export function closure155(unitVar: void, v0_1: Mut1): (arg0: Mut1) => void {
    return (v: Mut1): void => {
        closure156(v0_1, v);
    };
}

export function closure154(unitVar: void, v0_1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void {
    const v1_1: (arg0: Mut1, arg1: Mut1) => void = (v: Mut1): (arg0: Mut1) => void => closure155(void 0, v);
    v0_1(v1_1);
}

export function closure153(unitVar: void, v0_1: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void {
    return (v: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void => {
        closure154(void 0, v);
    };
}

export function method37(v0_1: int32, v1_1: Mut14): boolean {
    return v1_1.l0 < v0_1;
}

export function closure164(v0_1: Mut13, v1_1: Mut1): US3 {
    const v2: [US4, int32, string, string][] = v1_1.l4;
    const v4: int32 = v2.length | 0;
    const v6: Mut14 = new Mut14(0, US3_US3_0());
    while (method37(v4, v6)) {
        const v8: int32 = v6.l0 | 0;
        const v11: int32 = ((op_UnaryNegation_Int32(v8) + v4) - 1) | 0;
        const v12: US3 = v6.l1;
        const patternInput_1: [US4, int32, string, string] = v2[v11];
        const v13: US4 = patternInput_1[0];
        let v24: US3;
        if (v12.tag === US3_Tag.US3_1) {
            v24 = v12;
        }
        else {
            const v17: US4 = v0_1.l0;
            v24 = (((v13.tag === US4_Tag.US4_1) ? (v17.tag === US4_Tag.US4_1) : (v17.tag === US4_Tag.US4_0)) ? v0_1.l1([v13, patternInput_1[1], patternInput_1[2], patternInput_1[3]]) : US3_US3_0());
        }
        const v25: int32 = (v8 + 1) | 0;
        v6.l0 = (v25 | 0);
        v6.l1 = v24;
    }
    return v6.l1;
}

export function closure167(v0_1: Mut13, v1_1: Mut1, v2: Mut1, v3: US3): void {
    const v4: [US4, int32, string, string][] = v1_1.l4;
    const v6: int32 = v4.length | 0;
    const v7: [US4, int32, string, string][] = fill(new Array(v6), 0, v6, null);
    const v8: Mut7 = new Mut7(0);
    while (method23(v6, v8)) {
        const v10: int32 = v8.l0 | 0;
        const patternInput_1: [US4, int32, string, string] = v4[v10];
        const v14: string = patternInput_1[3];
        const v13: string = patternInput_1[2];
        const v12: int32 = patternInput_1[1] | 0;
        const v11: US4 = patternInput_1[0];
        const v15: US4 = v0_1.l0;
        let patternInput_3: [US4, int32, string, string];
        if ((v11.tag === US4_Tag.US4_1) ? (v15.tag === US4_Tag.US4_1) : (v15.tag === US4_Tag.US4_0)) {
            const patternInput_2: [US4, int32, string, string] = v0_1.l2([v11, v12, v13, v14], v3);
            patternInput_3 = [patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3]];
        }
        else {
            patternInput_3 = [v11, v12, v13, v14];
        }
        v7[v10] = [patternInput_3[0], patternInput_3[1], patternInput_3[2], patternInput_3[3]];
        const v27: int32 = (v10 + 1) | 0;
        v8.l0 = (v27 | 0);
    }
    v2.l4 = v7;
}

export function closure166(v0_1: Mut13, v1_1: Mut1, v2: Mut1): (arg0: US3) => void {
    return (v: US3): void => {
        closure167(v0_1, v1_1, v2, v);
    };
}

export function closure165(v0_1: Mut13, v1_1: Mut1): (arg0: Mut1, arg1: US3) => void {
    return (v: Mut1): (arg0: US3) => void => closure166(v0_1, v1_1, v);
}

export function method36(v0_1: Mut13): any {
    const v1_1: (arg0: Mut9) => any = (v: Mut9): any => closure98(void 0, v);
    const v2: (arg0: any) => any = v1_1;
    const v3: (arg0: Mut1) => US3 = (v_1: Mut1): US3 => closure164(v0_1, v_1);
    const v4: (arg0: Mut1, arg1: Mut1, arg2: US3) => void = (v_2: Mut1): (arg0: Mut1, arg1: US3) => void => closure165(v0_1, v_2);
    const v5: Mut9 = new Mut9(v3, uncurry(3, v4));
    const v9: any = createComponent;
    return v9(v2, v5);
}

export function closure163(unitVar: void, v0_1: Mut13): any {
    return method36(v0_1);
}

export function closure168(unitVar: void, _arg: [US4, int32, string, string]): US3 {
    return US3_US3_1(_arg[2]);
}

export function closure170(v0_1: Mut12, v1_1: US4, v2: int32, v3: string, v4: string, v5: US3): [US4, int32, string, string] {
    return [v0_1.l0, v2, (v5.tag === US3_Tag.US3_1) ? v5.fields[0] : "", v4];
}

export function closure169(v0_1: Mut12, _arg: [US4, int32, string, string]): (arg0: US3) => [US4, int32, string, string] {
    return (v: US3): [US4, int32, string, string] => closure170(v0_1, _arg[0], _arg[1], _arg[2], _arg[3], v);
}

export function closure162(v0_1: Mut12, unitVar: void): any[] {
    const v2: (arg0: Mut13) => any = (v: Mut13): any => closure163(void 0, v);
    const v3: (arg0: any) => any = v2;
    const v4: (arg0: [US4, int32, string, string]) => US3 = (arg10$0040: [US4, int32, string, string]): US3 => closure168(void 0, arg10$0040);
    const v5: (arg0: [US4, int32, string, string], arg1: US3) => [US4, int32, string, string] = (arg10$0040_1: [US4, int32, string, string]): (arg0: US3) => [US4, int32, string, string] => closure169(v0_1, arg10$0040_1);
    const v6: Mut13 = new Mut13(v0_1.l0, v4, uncurry(2, v5));
    const v10: any = createComponent;
    return [v10(v3, v6)];
}

export function closure161(v0_1: Mut12, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v68_1: () => any[] = (): any[] => closure162(v0_1, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v68_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], US3_US3_1("3px"), _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        URL
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function method39(v0_1: int32, v1_1: Mut16): boolean {
    return v1_1.l0 < v0_1;
}

export function closure174(v0_1: Mut15, v1_1: Mut1): US2 {
    const v2: [US4, int32, string, string][] = v1_1.l4;
    const v4: int32 = v2.length | 0;
    const v6: Mut16 = new Mut16(0, US2_US2_0());
    while (method39(v4, v6)) {
        const v8: int32 = v6.l0 | 0;
        const v11: int32 = ((op_UnaryNegation_Int32(v8) + v4) - 1) | 0;
        const v12: US2 = v6.l1;
        const patternInput_1: [US4, int32, string, string] = v2[v11];
        const v13: US4 = patternInput_1[0];
        let v24: US2;
        if (v12.tag === US2_Tag.US2_1) {
            v24 = v12;
        }
        else {
            const v17: US4 = v0_1.l0;
            v24 = (((v13.tag === US4_Tag.US4_1) ? (v17.tag === US4_Tag.US4_1) : (v17.tag === US4_Tag.US4_0)) ? v0_1.l1([v13, patternInput_1[1], patternInput_1[2], patternInput_1[3]]) : US2_US2_0());
        }
        const v25: int32 = (v8 + 1) | 0;
        v6.l0 = (v25 | 0);
        v6.l1 = v24;
    }
    return v6.l1;
}

export function closure177(v0_1: Mut15, v1_1: Mut1, v2: Mut1, v3: US2): void {
    const v4: [US4, int32, string, string][] = v1_1.l4;
    const v6: int32 = v4.length | 0;
    const v7: [US4, int32, string, string][] = fill(new Array(v6), 0, v6, null);
    const v8: Mut7 = new Mut7(0);
    while (method23(v6, v8)) {
        const v10: int32 = v8.l0 | 0;
        const patternInput_1: [US4, int32, string, string] = v4[v10];
        const v14: string = patternInput_1[3];
        const v13: string = patternInput_1[2];
        const v12: int32 = patternInput_1[1] | 0;
        const v11: US4 = patternInput_1[0];
        const v15: US4 = v0_1.l0;
        let patternInput_3: [US4, int32, string, string];
        if ((v11.tag === US4_Tag.US4_1) ? (v15.tag === US4_Tag.US4_1) : (v15.tag === US4_Tag.US4_0)) {
            const patternInput_2: [US4, int32, string, string] = v0_1.l2([v11, v12, v13, v14], v3);
            patternInput_3 = [patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3]];
        }
        else {
            patternInput_3 = [v11, v12, v13, v14];
        }
        v7[v10] = [patternInput_3[0], patternInput_3[1], patternInput_3[2], patternInput_3[3]];
        const v27: int32 = (v10 + 1) | 0;
        v8.l0 = (v27 | 0);
    }
    v2.l4 = v7;
}

export function closure176(v0_1: Mut15, v1_1: Mut1, v2: Mut1): (arg0: US2) => void {
    return (v: US2): void => {
        closure177(v0_1, v1_1, v2, v);
    };
}

export function closure175(v0_1: Mut15, v1_1: Mut1): (arg0: Mut1, arg1: US2) => void {
    return (v: Mut1): (arg0: US2) => void => closure176(v0_1, v1_1, v);
}

export function method38(v0_1: Mut15): any {
    const v1_1: (arg0: Mut10) => any = (v: Mut10): any => closure113(void 0, v);
    const v2: (arg0: any) => any = v1_1;
    const v3: (arg0: Mut1) => US2 = (v_1: Mut1): US2 => closure174(v0_1, v_1);
    const v4: (arg0: Mut1, arg1: Mut1, arg2: US2) => void = (v_2: Mut1): (arg0: Mut1, arg1: US2) => void => closure175(v0_1, v_2);
    const v5: Mut10 = new Mut10(v3, uncurry(3, v4));
    const v9: any = createComponent;
    return v9(v2, v5);
}

export function closure173(unitVar: void, v0_1: Mut15): any {
    return method38(v0_1);
}

export function closure178(unitVar: void, _arg: [US4, int32, string, string]): US2 {
    return US2_US2_1(_arg[1]);
}

export function closure180(v0_1: Mut12, v1_1: US4, v2: int32, v3: string, v4: string, v5: US2): [US4, int32, string, string] {
    return [v0_1.l0, (v5.tag === US2_Tag.US2_1) ? v5.fields[0] : 0, v3, v4];
}

export function closure179(v0_1: Mut12, _arg: [US4, int32, string, string]): (arg0: US2) => [US4, int32, string, string] {
    return (v: US2): [US4, int32, string, string] => closure180(v0_1, _arg[0], _arg[1], _arg[2], _arg[3], v);
}

export function closure172(v0_1: Mut12, unitVar: void): any[] {
    const v2: (arg0: Mut15) => any = (v: Mut15): any => closure173(void 0, v);
    const v3: (arg0: any) => any = v2;
    const v4: (arg0: [US4, int32, string, string]) => US2 = (arg10$0040: [US4, int32, string, string]): US2 => closure178(void 0, arg10$0040);
    const v5: (arg0: [US4, int32, string, string], arg1: US2) => [US4, int32, string, string] = (arg10$0040_1: [US4, int32, string, string]): (arg0: US2) => [US4, int32, string, string] => closure179(v0_1, arg10$0040_1);
    const v6: Mut15 = new Mut15(v0_1.l0, v4, uncurry(2, v5));
    const v10: any = createComponent;
    return [v10(v3, v6)];
}

export function closure171(v0_1: Mut12, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v68_1: () => any[] = (): any[] => closure172(v0_1, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v68_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], US3_US3_1("3px"), _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        Port
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure160(v0_1: Mut12, unitVar: void): any[] {
    const v1_1: (arg0: Mut5) => any = (v: Mut5): any => closure22(void 0, v);
    const v2: (arg0: any) => any = v1_1;
    const v5: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure161(v0_1, arg10$0040);
    const v7: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v5, US14_US14_2());
    const v11: any = createComponent;
    const v13: (arg0: any) => any = v1_1;
    const v16: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure171(v0_1, arg10$0040_1);
    const v18: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v16, US14_US14_2());
    const v20: any = createComponent;
    return [v11(v2, v7), v20(v13, v18)];
}

export function method35(v0_1: Mut12): any {
    const v1_1: (arg0: Mut3) => any = (v: Mut3): any => closure18(void 0, v);
    const v2: (arg0: any) => any = v1_1;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v68_1: () => any[] = (): any[] => closure160(v0_1, void 0);
    const v70_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v68_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v70_1.children = v68_1;
    const v74_1: any = createComponent;
    return v74_1(v2, v70_1);
}

export function closure159(unitVar: void, v0_1: Mut12): any {
    return method35(v0_1);
}

export function closure158(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut12) => any = (v: Mut12): any => closure159(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const v3: Mut12 = new Mut12(US4_US4_1());
    const v7: any = createComponent;
    return [v7(v1_1, v3)];
}

export function closure157(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v67_1: () => any[] = (): any[] => closure158(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v67_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], US3_US3_1("db-gun-rs-rs"), _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        Rust -{'>'} Rust
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure184(v0_1: Mut1, v1_1: Mut1): void {
    const v3: [US4, US4][] = v0_1.l5;
    const v6: [US4, US4][] = [[US4_US4_1(), US4_US4_0()]];
    const v7: int32 = v3.length | 0;
    const v9: int32 = (v7 + v6.length) | 0;
    const v10: [US4, US4][] = fill(new Array(v9), 0, v9, null);
    const v11: Mut7 = new Mut7(0);
    while (method23(v9, v11)) {
        const v13: int32 = v11.l0 | 0;
        let patternInput_3: [US4, US4];
        if (v13 < v7) {
            const patternInput_1: [US4, US4] = v3[v13];
            patternInput_3 = [patternInput_1[0], patternInput_1[1]];
        }
        else {
            const v17: int32 = (v13 - v7) | 0;
            const patternInput_2: [US4, US4] = v6[v17];
            patternInput_3 = [patternInput_2[0], patternInput_2[1]];
        }
        v10[v13] = [patternInput_3[0], patternInput_3[1]];
        const v22: int32 = (v13 + 1) | 0;
        v11.l0 = (v22 | 0);
    }
    v1_1.l5 = v10;
}

export function closure183(unitVar: void, v0_1: Mut1): (arg0: Mut1) => void {
    return (v: Mut1): void => {
        closure184(v0_1, v);
    };
}

export function closure182(unitVar: void, v0_1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void {
    const v1_1: (arg0: Mut1, arg1: Mut1) => void = (v: Mut1): (arg0: Mut1) => void => closure183(void 0, v);
    v0_1(v1_1);
}

export function closure181(unitVar: void, v0_1: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void {
    return (v: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void => {
        closure182(void 0, v);
    };
}

export function closure188(v0_1: Mut1, v1_1: Mut1): void {
    const v3: [US4, US4][] = v0_1.l5;
    const v4: int32 = v3.length | 0;
    const v5: [US4, US4][] = fill(new Array(v4), 0, v4, null);
    const v6: Mut11 = new Mut11(0, 0);
    while (method34(v4, v6)) {
        const v8: int32 = v6.l0 | 0;
        const v9: int32 = v6.l1 | 0;
        const patternInput_1: [US4, US4] = v3[v8];
        const v11: US4 = patternInput_1[1];
        const v10: US4 = patternInput_1[0];
        let v19: int32;
        if (((v10.tag === US4_Tag.US4_1) && (v11.tag === US4_Tag.US4_0)) !== true) {
            v5[v9] = [v10, v11];
            v19 = (v9 + 1);
        }
        else {
            v19 = v9;
        }
        const v20: int32 = (v8 + 1) | 0;
        v6.l0 = (v20 | 0);
        v6.l1 = (v19 | 0);
    }
    const v21: int32 = v6.l1 | 0;
    const v22: [US4, US4][] = fill(new Array(v21), 0, v21, null);
    const v23: Mut7 = new Mut7(0);
    while (method23(v21, v23)) {
        const v25: int32 = v23.l0 | 0;
        const patternInput_2: [US4, US4] = v5[v25];
        v22[v25] = [patternInput_2[0], patternInput_2[1]];
        const v28: int32 = (v25 + 1) | 0;
        v23.l0 = (v28 | 0);
    }
    v1_1.l5 = v22;
}

export function closure187(unitVar: void, v0_1: Mut1): (arg0: Mut1) => void {
    return (v: Mut1): void => {
        closure188(v0_1, v);
    };
}

export function closure186(unitVar: void, v0_1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void {
    const v1_1: (arg0: Mut1, arg1: Mut1) => void = (v: Mut1): (arg0: Mut1) => void => closure187(void 0, v);
    v0_1(v1_1);
}

export function closure185(unitVar: void, v0_1: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void {
    return (v: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void => {
        closure186(void 0, v);
    };
}

export function closure190(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut12) => any = (v: Mut12): any => closure159(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const v3: Mut12 = new Mut12(US4_US4_0());
    const v7: any = createComponent;
    return [v7(v1_1, v3)];
}

export function closure189(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v67_1: () => any[] = (): any[] => closure190(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v67_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], US3_US3_1("db-gun-rs-js"), _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        Rust -{'>'} JavaScript
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure194(v0_1: Mut1, v1_1: Mut1): void {
    const v3: [US4, US4][] = v0_1.l5;
    const v6: [US4, US4][] = [[US4_US4_0(), US4_US4_0()]];
    const v7: int32 = v3.length | 0;
    const v9: int32 = (v7 + v6.length) | 0;
    const v10: [US4, US4][] = fill(new Array(v9), 0, v9, null);
    const v11: Mut7 = new Mut7(0);
    while (method23(v9, v11)) {
        const v13: int32 = v11.l0 | 0;
        let patternInput_3: [US4, US4];
        if (v13 < v7) {
            const patternInput_1: [US4, US4] = v3[v13];
            patternInput_3 = [patternInput_1[0], patternInput_1[1]];
        }
        else {
            const v17: int32 = (v13 - v7) | 0;
            const patternInput_2: [US4, US4] = v6[v17];
            patternInput_3 = [patternInput_2[0], patternInput_2[1]];
        }
        v10[v13] = [patternInput_3[0], patternInput_3[1]];
        const v22: int32 = (v13 + 1) | 0;
        v11.l0 = (v22 | 0);
    }
    v1_1.l5 = v10;
}

export function closure193(unitVar: void, v0_1: Mut1): (arg0: Mut1) => void {
    return (v: Mut1): void => {
        closure194(v0_1, v);
    };
}

export function closure192(unitVar: void, v0_1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void {
    const v1_1: (arg0: Mut1, arg1: Mut1) => void = (v: Mut1): (arg0: Mut1) => void => closure193(void 0, v);
    v0_1(v1_1);
}

export function closure191(unitVar: void, v0_1: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void {
    return (v: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void => {
        closure192(void 0, v);
    };
}

export function closure198(v0_1: Mut1, v1_1: Mut1): void {
    const v3: [US4, US4][] = v0_1.l5;
    const v4: int32 = v3.length | 0;
    const v5: [US4, US4][] = fill(new Array(v4), 0, v4, null);
    const v6: Mut11 = new Mut11(0, 0);
    while (method34(v4, v6)) {
        const v8: int32 = v6.l0 | 0;
        const v9: int32 = v6.l1 | 0;
        const patternInput_1: [US4, US4] = v3[v8];
        const v11: US4 = patternInput_1[1];
        const v10: US4 = patternInput_1[0];
        let v19: int32;
        if (((v10.tag === US4_Tag.US4_0) && (v11.tag === US4_Tag.US4_0)) !== true) {
            v5[v9] = [v10, v11];
            v19 = (v9 + 1);
        }
        else {
            v19 = v9;
        }
        const v20: int32 = (v8 + 1) | 0;
        v6.l0 = (v20 | 0);
        v6.l1 = (v19 | 0);
    }
    const v21: int32 = v6.l1 | 0;
    const v22: [US4, US4][] = fill(new Array(v21), 0, v21, null);
    const v23: Mut7 = new Mut7(0);
    while (method23(v21, v23)) {
        const v25: int32 = v23.l0 | 0;
        const patternInput_2: [US4, US4] = v5[v25];
        v22[v25] = [patternInput_2[0], patternInput_2[1]];
        const v28: int32 = (v25 + 1) | 0;
        v23.l0 = (v28 | 0);
    }
    v1_1.l5 = v22;
}

export function closure197(unitVar: void, v0_1: Mut1): (arg0: Mut1) => void {
    return (v: Mut1): void => {
        closure198(v0_1, v);
    };
}

export function closure196(unitVar: void, v0_1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void {
    const v1_1: (arg0: Mut1, arg1: Mut1) => void = (v: Mut1): (arg0: Mut1) => void => closure197(void 0, v);
    v0_1(v1_1);
}

export function closure195(unitVar: void, v0_1: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void {
    return (v: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void => {
        closure196(void 0, v);
    };
}

export function closure199(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v67_1: () => any[] = (): any[] => closure190(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v67_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], US3_US3_1("db-gun-js-js"), _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        JavaScript -{'>'} JavaScript
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure203(v0_1: Mut1, v1_1: Mut1): void {
    const v3: [US4, US4][] = v0_1.l5;
    const v6: [US4, US4][] = [[US4_US4_0(), US4_US4_1()]];
    const v7: int32 = v3.length | 0;
    const v9: int32 = (v7 + v6.length) | 0;
    const v10: [US4, US4][] = fill(new Array(v9), 0, v9, null);
    const v11: Mut7 = new Mut7(0);
    while (method23(v9, v11)) {
        const v13: int32 = v11.l0 | 0;
        let patternInput_3: [US4, US4];
        if (v13 < v7) {
            const patternInput_1: [US4, US4] = v3[v13];
            patternInput_3 = [patternInput_1[0], patternInput_1[1]];
        }
        else {
            const v17: int32 = (v13 - v7) | 0;
            const patternInput_2: [US4, US4] = v6[v17];
            patternInput_3 = [patternInput_2[0], patternInput_2[1]];
        }
        v10[v13] = [patternInput_3[0], patternInput_3[1]];
        const v22: int32 = (v13 + 1) | 0;
        v11.l0 = (v22 | 0);
    }
    v1_1.l5 = v10;
}

export function closure202(unitVar: void, v0_1: Mut1): (arg0: Mut1) => void {
    return (v: Mut1): void => {
        closure203(v0_1, v);
    };
}

export function closure201(unitVar: void, v0_1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void {
    const v1_1: (arg0: Mut1, arg1: Mut1) => void = (v: Mut1): (arg0: Mut1) => void => closure202(void 0, v);
    v0_1(v1_1);
}

export function closure200(unitVar: void, v0_1: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void {
    return (v: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void => {
        closure201(void 0, v);
    };
}

export function closure207(v0_1: Mut1, v1_1: Mut1): void {
    const v3: [US4, US4][] = v0_1.l5;
    const v4: int32 = v3.length | 0;
    const v5: [US4, US4][] = fill(new Array(v4), 0, v4, null);
    const v6: Mut11 = new Mut11(0, 0);
    while (method34(v4, v6)) {
        const v8: int32 = v6.l0 | 0;
        const v9: int32 = v6.l1 | 0;
        const patternInput_1: [US4, US4] = v3[v8];
        const v11: US4 = patternInput_1[1];
        const v10: US4 = patternInput_1[0];
        let v19: int32;
        if (((v10.tag === US4_Tag.US4_0) && (v11.tag === US4_Tag.US4_1)) !== true) {
            v5[v9] = [v10, v11];
            v19 = (v9 + 1);
        }
        else {
            v19 = v9;
        }
        const v20: int32 = (v8 + 1) | 0;
        v6.l0 = (v20 | 0);
        v6.l1 = (v19 | 0);
    }
    const v21: int32 = v6.l1 | 0;
    const v22: [US4, US4][] = fill(new Array(v21), 0, v21, null);
    const v23: Mut7 = new Mut7(0);
    while (method23(v21, v23)) {
        const v25: int32 = v23.l0 | 0;
        const patternInput_2: [US4, US4] = v5[v25];
        v22[v25] = [patternInput_2[0], patternInput_2[1]];
        const v28: int32 = (v25 + 1) | 0;
        v23.l0 = (v28 | 0);
    }
    v1_1.l5 = v22;
}

export function closure206(unitVar: void, v0_1: Mut1): (arg0: Mut1) => void {
    return (v: Mut1): void => {
        closure207(v0_1, v);
    };
}

export function closure205(unitVar: void, v0_1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void {
    const v1_1: (arg0: Mut1, arg1: Mut1) => void = (v: Mut1): (arg0: Mut1) => void => closure206(void 0, v);
    v0_1(v1_1);
}

export function closure204(unitVar: void, v0_1: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void {
    return (v: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void): void => {
        closure205(void 0, v);
    };
}

export function closure208(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v67_1: () => any[] = (): any[] => closure158(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v67_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], US3_US3_1("db-gun-js-rs"), _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        JavaScript -{'>'} Rust
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure148(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut5) => any = (v: Mut5): any => closure22(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const v2: (arg0: Mut1, arg1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void = (v_1: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void => closure149(void 0, v_1);
    const v4: (arg0: Mut1, arg1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void = (v_2: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void => closure153(void 0, v_2);
    const v6: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure157(void 0, arg10$0040);
    const v8: Mut5 = new Mut5(US13_US13_1(uncurry(2, v2)), US13_US13_1(uncurry(2, v4)), v6, US14_US14_0());
    const v12: any = createComponent;
    const v14: (arg0: any) => any = v0_1;
    const v15: (arg0: Mut1, arg1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void = (v_3: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void => closure181(void 0, v_3);
    const v17: (arg0: Mut1, arg1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void = (v_4: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void => closure185(void 0, v_4);
    const v19: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure189(void 0, arg10$0040_1);
    const v21: Mut5 = new Mut5(US13_US13_1(uncurry(2, v15)), US13_US13_1(uncurry(2, v17)), v19, US14_US14_0());
    const v23: any = createComponent;
    const v25: (arg0: any) => any = v0_1;
    const v26: (arg0: Mut1, arg1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void = (v_5: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void => closure191(void 0, v_5);
    const v28: (arg0: Mut1, arg1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void = (v_6: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void => closure195(void 0, v_6);
    const v30: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure199(void 0, arg10$0040_2);
    const v32: Mut5 = new Mut5(US13_US13_1(uncurry(2, v26)), US13_US13_1(uncurry(2, v28)), v30, US14_US14_0());
    const v34: any = createComponent;
    const v36: (arg0: any) => any = v0_1;
    const v37: (arg0: Mut1, arg1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void = (v_7: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void => closure200(void 0, v_7);
    const v39: (arg0: Mut1, arg1: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void = (v_8: Mut1): (arg0: (arg0: (arg0: Mut1, arg1: Mut1) => void) => void) => void => closure204(void 0, v_8);
    const v41: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_3: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure208(void 0, arg10$0040_3);
    const v43: Mut5 = new Mut5(US13_US13_1(uncurry(2, v37)), US13_US13_1(uncurry(2, v39)), v41, US14_US14_0());
    const v45: any = createComponent;
    return [v12(v1_1, v8), v23(v14, v21), v34(v25, v32), v45(v36, v43)];
}

export function method33(): any {
    const v0_1: (arg0: Mut3) => any = (v: Mut3): any => closure18(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v67_1: () => any[] = (): any[] => closure148(void 0, void 0);
    const v69_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v67_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v69_1.children = v67_1;
    const v73_1: any = createComponent;
    return v73_1(v1_1, v69_1);
}

export function closure147(unitVar: void, v0_1: Mut3): any {
    return method33();
}

export function closure209(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure146(unitVar: void, unitVar_1: void): any[] {
    const v0_1: (arg0: Mut3) => any = (v: Mut3): any => closure147(void 0, v);
    const v1_1: (arg0: any) => any = v0_1;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v67_1: () => any[] = (): any[] => closure209(void 0, void 0);
    const v69_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v67_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v69_1.children = v67_1;
    const v73_1: any = createComponent;
    return [v73_1(v1_1, v69_1)];
}

export function closure145(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v67_1: () => any[] = (): any[] => closure146(void 0, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v67_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], US3_US3_1("db"), _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        Database
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure216(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Counter
    </>];
}

export function closure217(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], _arg[11], _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], US3_US3_0(), _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], _arg[58], _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure218(unitVar: void, unitVar_1: void): any {
    const v2: any = BiRegularPlus;
    return v2;
}

export function closure219(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Request
    </>];
}

export function closure220(unitVar: void, unitVar_1: void): void {
    toConsole(interpolate("%A%P()", [["use_fetch request.", "content_address:", "profile/tmp/counter"]]));
}

export function closure221(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], _arg[11], _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], US3_US3_0(), _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], _arg[58], _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure222(unitVar: void, unitVar_1: void): any {
    const v2: any = BiRegularMinus;
    return v2;
}

export function closure223(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Clear
    </>];
}

export function closure224(unitVar: void, unitVar_1: void): void {
    toConsole(interpolate("%A%P()", [["use_fetch clear.", "content_address:", "profile/tmp/counter"]]));
}

export function closure215(unitVar: void, unitVar_1: void): any[] {
    const v2: any = Box;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v68_1: () => any[] = (): any[] => closure216(void 0, void 0);
    const v71_1: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v68_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v72_1: (arg0: any) => any = v2;
    const v75_1: any = createComponent;
    const v76_1: any = v75_1(v72_1, v71_1);
    const v77_1: (arg0: Mut3) => any = (v: Mut3): any => closure36(void 0, v);
    const v78_1: (arg0: any) => any = v77_1;
    const patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v144: (arg0: Mut8) => any = (v_1: Mut8): any => closure43(void 0, v_1);
    const v145: (arg0: any) => any = v144;
    const v146: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure217(void 0, arg10$0040_1);
    const v147: () => any = (): any => closure218(void 0, void 0);
    const v148: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_3: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure45(void 0, arg10$0040_3);
    const v149: Mut8 = new Mut8(v146, v147, v148);
    const v151: any = createComponent;
    const v153: () => any[] = (): any[] => closure219(void 0, void 0);
    const v156: () => void = (): void => {
        closure220(void 0, void 0);
    };
    const v158: string = "10px";
    const v160: Mut3 = new Mut3(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], US7_US7_1(v153), patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], US10_US10_1(v151(v145, v149)), patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], US12_US12_1(v156), patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], US3_US3_1(v158), patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62], patternInput_1[63], patternInput_1[64]);
    v160.children = v153;
    const v162: any = createComponent;
    const v163: any = v162(v78_1, v160);
    const v164: (arg0: any) => any = v77_1;
    const patternInput_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v230: (arg0: any) => any = v144;
    const v231: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_6: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure221(void 0, arg10$0040_6);
    const v232: () => any = (): any => closure222(void 0, void 0);
    const v233: Mut8 = new Mut8(v231, v232, v148);
    const v235: any = createComponent;
    const v237: () => any[] = (): any[] => closure223(void 0, void 0);
    const v240: () => void = (): void => {
        closure224(void 0, void 0);
    };
    const v243: Mut3 = new Mut3(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], patternInput_2[10], US7_US7_1(v237), patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], US10_US10_1(v235(v230, v233)), patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], US12_US12_1(v240), patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], US3_US3_1(v158), patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62], patternInput_2[63], patternInput_2[64]);
    v243.children = v237;
    const v245: any = createComponent;
    return [v76_1, v163, v245(v164, v243)];
}

export function method41(v0_1: int32, v1_1: Mut17): boolean {
    return v1_1.l0 < v0_1;
}

export function method42(v0_1_mut: UH1, v1_1_mut: UH1): UH1 {
    method42:
    while (true) {
        const v0_1: UH1 = v0_1_mut, v1_1: UH1 = v1_1_mut;
        if (v0_1.tag === UH1_Tag.UH1_1) {
            return v1_1;
        }
        else {
            v0_1_mut = v0_1.fields[2];
            v1_1_mut = UH1_UH1_0(v0_1.fields[0], v0_1.fields[1], v1_1);
            continue method42;
        }
        break;
    }
}

export function method44(v0_1_mut: UH1, v1_1_mut: int32): int32 {
    method44:
    while (true) {
        const v0_1: UH1 = v0_1_mut, v1_1: int32 = v1_1_mut;
        if (v0_1.tag === UH1_Tag.UH1_1) {
            return v1_1 | 0;
        }
        else {
            v0_1_mut = v0_1.fields[2];
            v1_1_mut = (v1_1 + 1);
            continue method44;
        }
        break;
    }
}

export function method45(v0_1_mut: [int32, int32][], v1_1_mut: UH1, v2_mut: int32): int32 {
    method45:
    while (true) {
        const v0_1: [int32, int32][] = v0_1_mut, v1_1: UH1 = v1_1_mut, v2: int32 = v2_mut;
        if (v1_1.tag === UH1_Tag.UH1_1) {
            return v2 | 0;
        }
        else {
            v0_1[v2] = [v1_1.fields[0], v1_1.fields[1]];
            v0_1_mut = v0_1;
            v1_1_mut = v1_1.fields[2];
            v2_mut = (v2 + 1);
            continue method45;
        }
        break;
    }
}

export function method43(v0_1: UH1): [int32, int32][] {
    const v2: int32 = method44(v0_1, 0) | 0;
    const v3: [int32, int32][] = fill(new Array(v2), 0, v2, null);
    const v5: int32 = method45(v3, v0_1, 0) | 0;
    return v3;
}

export function closure230(v0_1: () => [int32, int32], unitVar: void): any[] {
    const patternInput: [int32, int32] = v0_1();
    return [<>
        {JSON.stringify(patternInput[1], null, 2)}
    </>];
}

export function closure229(v0_1: () => [int32, int32], unitVar: void): any[] {
    const v3: any = hope;
    const v4: any = v3.pre;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v70_1: () => any[] = (): any[] => closure230(v0_1, void 0);
    const v73_1: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v70_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v74_1: (arg0: any) => any = v4;
    const v77_1: any = createComponent;
    return [v77_1(v74_1, v73_1)];
}

export function closure228(v0_1: () => [int32, int32], _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v70_1: () => any[] = (): any[] => closure229(v0_1, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v70_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], US3_US3_1("3px"), _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        {int32ToString(v0_1()[0])}
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure227(unitVar: void, v0_1: () => [int32, int32]): any[] {
    const v1_1: (arg0: Mut5) => any = (v: Mut5): any => closure22(void 0, v);
    const v2: (arg0: any) => any = v1_1;
    const v5: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure228(v0_1, arg10$0040);
    const v7: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v5, US14_US14_2());
    const v11: any = createComponent;
    return [v11(v2, v7)];
}

export function closure226(v0_1: Mut1, unitVar: void): any[] {
    const v3: [int32, int32][] = v0_1.l8;
    const v4: int32 = v3.length | 0;
    const v6: Mut17 = new Mut17(0, UH1_UH1_1());
    while (method41(v4, v6)) {
        const v8: int32 = v6.l0 | 0;
        const v11: int32 = ((op_UnaryNegation_Int32(v8) + v4) - 1) | 0;
        const v12: UH1 = v6.l1;
        const patternInput_1: [int32, int32] = v3[v11];
        const v15: int32 = (v8 + 1) | 0;
        v6.l0 = (v15 | 0);
        v6.l1 = UH1_UH1_0(patternInput_1[0], patternInput_1[1], v12);
    }
    const v20: [int32, int32][] = method43(method42(v6.l1, UH1_UH1_1()));
    const v23: any = Index;
    const v24: (arg0: () => [int32, int32]) => any[] = (v: () => [int32, int32]): any[] => closure227(void 0, v);
    const v25: () => any[] = v24;
    const patternInput_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v95_1: any = createObj(method13(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], patternInput_2[10], US7_US7_1(v25), patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], US9_US9_1(v20), patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62], patternInput_2[63], patternInput_2[64]));
    const v96_1: (arg0: any) => any = v23;
    const v98: any = createComponent;
    return [v98(v96_1, v95_1)];
}

export function closure225(v0_1: Mut1, unitVar: void): any[] {
    const v1_1: (arg0: Mut3) => any = (v: Mut3): any => closure18(void 0, v);
    const v2: (arg0: any) => any = v1_1;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v68_1: () => any[] = (): any[] => closure226(v0_1, void 0);
    const v70_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v68_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v70_1.children = v68_1;
    const v74_1: any = createComponent;
    return [v74_1(v2, v70_1)];
}

export function closure214(v0_1: Mut1, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v68_1: any = Stack;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v142: () => any[] = (): any[] => closure215(void 0, void 0);
    const v151: any = createObj(method13(US3_US3_1("start"), patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v142), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], US3_US3_1(method19("column", "row")), patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], US3_US3_1(method19("8px", "0")), patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], US3_US3_1("3px"), patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], US3_US3_1("7px"), patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v152: (arg0: any) => any = v68_1;
    const v155: any = createComponent;
    const v157: () => any[] = (): any[] => closure225(v0_1, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v157), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], US3_US3_1("counter"), _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(v155(v152, v151)), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function method40(): any {
    const v2: any = useStoreon;
    const v3: any[] = v2();
    const v4: Mut1 = v3[0];
    const v5: any = v3[1];
    const patternInput: [[int32, any][], [int32, any][], [int32, int32][]] = [v4.l6, v4.l7, v4.l8];
    const v9: (arg0: Mut5) => any = (v: Mut5): any => closure22(void 0, v);
    const v10: (arg0: any) => any = v9;
    const v13: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure214(v4, arg10$0040);
    const v15: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v13, US14_US14_2());
    const v19: any = createComponent;
    return v19(v10, v15);
}

export function closure213(unitVar: void, v0_1: Mut3): any {
    return method40();
}

export function closure231(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure235(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Chain Status
    </>];
}

export function closure236(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], _arg[11], _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], US3_US3_0(), _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], _arg[58], _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure237(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Request
    </>];
}

export function closure238(unitVar: void, unitVar_1: void): void {
    toConsole(interpolate("%A%P()", [["use_fetch request.", "content_address:", "profile/tmp/chain_status"]]));
}

export function closure239(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], _arg[11], _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], US3_US3_0(), _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], _arg[58], _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure240(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Clear
    </>];
}

export function closure241(unitVar: void, unitVar_1: void): void {
    toConsole(interpolate("%A%P()", [["use_fetch clear.", "content_address:", "profile/tmp/chain_status"]]));
}

export function closure234(unitVar: void, unitVar_1: void): any[] {
    const v2: any = Box;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v68_1: () => any[] = (): any[] => closure235(void 0, void 0);
    const v71_1: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v68_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v72_1: (arg0: any) => any = v2;
    const v75_1: any = createComponent;
    const v76_1: any = v75_1(v72_1, v71_1);
    const v77_1: (arg0: Mut3) => any = (v: Mut3): any => closure36(void 0, v);
    const v78_1: (arg0: any) => any = v77_1;
    const patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v144: (arg0: Mut8) => any = (v_1: Mut8): any => closure43(void 0, v_1);
    const v145: (arg0: any) => any = v144;
    const v146: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure236(void 0, arg10$0040_1);
    const v147: () => any = (): any => closure218(void 0, void 0);
    const v148: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_3: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure45(void 0, arg10$0040_3);
    const v149: Mut8 = new Mut8(v146, v147, v148);
    const v151: any = createComponent;
    const v153: () => any[] = (): any[] => closure237(void 0, void 0);
    const v156: () => void = (): void => {
        closure238(void 0, void 0);
    };
    const v158: string = "10px";
    const v160: Mut3 = new Mut3(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], US7_US7_1(v153), patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], US10_US10_1(v151(v145, v149)), patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], US12_US12_1(v156), patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], US3_US3_1(v158), patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62], patternInput_1[63], patternInput_1[64]);
    v160.children = v153;
    const v162: any = createComponent;
    const v163: any = v162(v78_1, v160);
    const v164: (arg0: any) => any = v77_1;
    const patternInput_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v230: (arg0: any) => any = v144;
    const v231: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_6: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure239(void 0, arg10$0040_6);
    const v232: () => any = (): any => closure222(void 0, void 0);
    const v233: Mut8 = new Mut8(v231, v232, v148);
    const v235: any = createComponent;
    const v237: () => any[] = (): any[] => closure240(void 0, void 0);
    const v240: () => void = (): void => {
        closure241(void 0, void 0);
    };
    const v243: Mut3 = new Mut3(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], patternInput_2[10], US7_US7_1(v237), patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], US10_US10_1(v235(v230, v233)), patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], US12_US12_1(v240), patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], US3_US3_1(v158), patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62], patternInput_2[63], patternInput_2[64]);
    v243.children = v237;
    const v245: any = createComponent;
    return [v76_1, v163, v245(v164, v243)];
}

export function method47(v0_1: int32, v1_1: Mut18): boolean {
    return v1_1.l0 < v0_1;
}

export function method48(v0_1_mut: UH2, v1_1_mut: UH2): UH2 {
    method48:
    while (true) {
        const v0_1: UH2 = v0_1_mut, v1_1: UH2 = v1_1_mut;
        if (v0_1.tag === UH2_Tag.UH2_1) {
            return v1_1;
        }
        else {
            v0_1_mut = v0_1.fields[2];
            v1_1_mut = UH2_UH2_0(v0_1.fields[0], v0_1.fields[1], v1_1);
            continue method48;
        }
        break;
    }
}

export function method50(v0_1_mut: UH2, v1_1_mut: int32): int32 {
    method50:
    while (true) {
        const v0_1: UH2 = v0_1_mut, v1_1: int32 = v1_1_mut;
        if (v0_1.tag === UH2_Tag.UH2_1) {
            return v1_1 | 0;
        }
        else {
            v0_1_mut = v0_1.fields[2];
            v1_1_mut = (v1_1 + 1);
            continue method50;
        }
        break;
    }
}

export function method51(v0_1_mut: [int32, any][], v1_1_mut: UH2, v2_mut: int32): int32 {
    method51:
    while (true) {
        const v0_1: [int32, any][] = v0_1_mut, v1_1: UH2 = v1_1_mut, v2: int32 = v2_mut;
        if (v1_1.tag === UH2_Tag.UH2_1) {
            return v2 | 0;
        }
        else {
            v0_1[v2] = [v1_1.fields[0], v1_1.fields[1]];
            v0_1_mut = v0_1;
            v1_1_mut = v1_1.fields[2];
            v2_mut = (v2 + 1);
            continue method51;
        }
        break;
    }
}

export function method49(v0_1: UH2): [int32, any][] {
    const v2: int32 = method50(v0_1, 0) | 0;
    const v3: [int32, any][] = fill(new Array(v2), 0, v2, null);
    const v5: int32 = method51(v3, v0_1, 0) | 0;
    return v3;
}

export function closure247(v0_1: () => [int32, any], unitVar: void): any[] {
    const patternInput: [int32, any] = v0_1();
    return [<>
        {JSON.stringify(patternInput[1], null, 2)}
    </>];
}

export function closure246(v0_1: () => [int32, any], unitVar: void): any[] {
    const v3: any = hope;
    const v4: any = v3.pre;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v70_1: () => any[] = (): any[] => closure247(v0_1, void 0);
    const v73_1: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v70_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v74_1: (arg0: any) => any = v4;
    const v77_1: any = createComponent;
    return [v77_1(v74_1, v73_1)];
}

export function closure245(v0_1: () => [int32, any], _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v70_1: () => any[] = (): any[] => closure246(v0_1, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v70_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], US3_US3_1("3px"), _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        {int32ToString(v0_1()[0])}
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure244(unitVar: void, v0_1: () => [int32, any]): any[] {
    const v1_1: (arg0: Mut5) => any = (v: Mut5): any => closure22(void 0, v);
    const v2: (arg0: any) => any = v1_1;
    const v5: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure245(v0_1, arg10$0040);
    const v7: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v5, US14_US14_2());
    const v11: any = createComponent;
    return [v11(v2, v7)];
}

export function closure243(v0_1: Mut1, unitVar: void): any[] {
    const v2: [int32, any][] = v0_1.l7;
    const v4: int32 = v2.length | 0;
    const v6: Mut18 = new Mut18(0, UH2_UH2_1());
    while (method47(v4, v6)) {
        const v8: int32 = v6.l0 | 0;
        const v11: int32 = ((op_UnaryNegation_Int32(v8) + v4) - 1) | 0;
        const v12: UH2 = v6.l1;
        const patternInput_1: [int32, any] = v2[v11];
        const v15: int32 = (v8 + 1) | 0;
        v6.l0 = (v15 | 0);
        v6.l1 = UH2_UH2_0(patternInput_1[0], patternInput_1[1], v12);
    }
    const v20: [int32, any][] = method49(method48(v6.l1, UH2_UH2_1()));
    const v23: any = Index;
    const v24: (arg0: () => [int32, any]) => any[] = (v: () => [int32, any]): any[] => closure244(void 0, v);
    const v25: () => any[] = v24;
    const patternInput_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v95_1: any = createObj(method13(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], patternInput_2[10], US7_US7_1(v25), patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], US9_US9_1(v20), patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62], patternInput_2[63], patternInput_2[64]));
    const v96_1: (arg0: any) => any = v23;
    const v98: any = createComponent;
    return [v98(v96_1, v95_1)];
}

export function closure242(v0_1: Mut1, unitVar: void): any[] {
    const v1_1: (arg0: Mut3) => any = (v: Mut3): any => closure18(void 0, v);
    const v2: (arg0: any) => any = v1_1;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v68_1: () => any[] = (): any[] => closure243(v0_1, void 0);
    const v70_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v68_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v70_1.children = v68_1;
    const v74_1: any = createComponent;
    return [v74_1(v2, v70_1)];
}

export function closure233(v0_1: Mut1, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v68_1: any = Stack;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v142: () => any[] = (): any[] => closure234(void 0, void 0);
    const v151: any = createObj(method13(US3_US3_1("start"), patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v142), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], US3_US3_1(method19("column", "row")), patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], US3_US3_1(method19("8px", "0")), patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], US3_US3_1("3px"), patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], US3_US3_1("7px"), patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v152: (arg0: any) => any = v68_1;
    const v155: any = createComponent;
    const v157: () => any[] = (): any[] => closure242(v0_1, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v157), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], US3_US3_1("status"), _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(v155(v152, v151)), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function method46(): any {
    const v2: any = useStoreon;
    const v3: any[] = v2();
    const v4: Mut1 = v3[0];
    const v5: any = v3[1];
    const patternInput: [[int32, any][], [int32, any][], [int32, int32][]] = [v4.l6, v4.l7, v4.l8];
    const v9: (arg0: Mut5) => any = (v: Mut5): any => closure22(void 0, v);
    const v10: (arg0: any) => any = v9;
    const v13: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure233(v4, arg10$0040);
    const v15: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v13, US14_US14_2());
    const v19: any = createComponent;
    return v19(v10, v15);
}

export function closure232(unitVar: void, v0_1: Mut3): any {
    return method46();
}

export function closure248(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure252(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Chain Deploy
    </>];
}

export function closure253(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], _arg[11], _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], US3_US3_0(), _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], _arg[58], _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure254(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Request
    </>];
}

export function closure255(unitVar: void, unitVar_1: void): void {
    toConsole(interpolate("%A%P()", [["use_fetch request.", "content_address:", "profile/tmp/chain_deploy"]]));
}

export function closure256(unitVar: void, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], _arg[11], _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], US3_US3_0(), _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], _arg[58], _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure257(unitVar: void, unitVar_1: void): any[] {
    return [<>
        Clear
    </>];
}

export function closure258(unitVar: void, unitVar_1: void): void {
    toConsole(interpolate("%A%P()", [["use_fetch clear.", "content_address:", "profile/tmp/chain_deploy"]]));
}

export function closure251(unitVar: void, unitVar_1: void): any[] {
    const v2: any = Box;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v68_1: () => any[] = (): any[] => closure252(void 0, void 0);
    const v71_1: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v68_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v72_1: (arg0: any) => any = v2;
    const v75_1: any = createComponent;
    const v76_1: any = v75_1(v72_1, v71_1);
    const v77_1: (arg0: Mut3) => any = (v: Mut3): any => closure36(void 0, v);
    const v78_1: (arg0: any) => any = v77_1;
    const patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v144: (arg0: Mut8) => any = (v_1: Mut8): any => closure43(void 0, v_1);
    const v145: (arg0: any) => any = v144;
    const v146: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure253(void 0, arg10$0040_1);
    const v147: () => any = (): any => closure218(void 0, void 0);
    const v148: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_3: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure45(void 0, arg10$0040_3);
    const v149: Mut8 = new Mut8(v146, v147, v148);
    const v151: any = createComponent;
    const v153: () => any[] = (): any[] => closure254(void 0, void 0);
    const v156: () => void = (): void => {
        closure255(void 0, void 0);
    };
    const v158: string = "10px";
    const v160: Mut3 = new Mut3(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], US7_US7_1(v153), patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], US10_US10_1(v151(v145, v149)), patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], US12_US12_1(v156), patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], US3_US3_1(v158), patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62], patternInput_1[63], patternInput_1[64]);
    v160.children = v153;
    const v162: any = createComponent;
    const v163: any = v162(v78_1, v160);
    const v164: (arg0: any) => any = v77_1;
    const patternInput_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v230: (arg0: any) => any = v144;
    const v231: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_6: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure256(void 0, arg10$0040_6);
    const v232: () => any = (): any => closure222(void 0, void 0);
    const v233: Mut8 = new Mut8(v231, v232, v148);
    const v235: any = createComponent;
    const v237: () => any[] = (): any[] => closure257(void 0, void 0);
    const v240: () => void = (): void => {
        closure258(void 0, void 0);
    };
    const v243: Mut3 = new Mut3(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], patternInput_2[10], US7_US7_1(v237), patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], US10_US10_1(v235(v230, v233)), patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], US12_US12_1(v240), patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], US3_US3_1(v158), patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62], patternInput_2[63], patternInput_2[64]);
    v243.children = v237;
    const v245: any = createComponent;
    return [v76_1, v163, v245(v164, v243)];
}

export function closure264(v0_1: () => [int32, any], unitVar: void): any[] {
    const patternInput: [int32, any] = v0_1();
    return [<>
        {JSON.stringify(patternInput[1], null, 2)}
    </>];
}

export function closure263(v0_1: () => [int32, any], unitVar: void): any[] {
    const v3: any = hope;
    const v4: any = v3.pre;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v70_1: () => any[] = (): any[] => closure264(v0_1, void 0);
    const v73_1: any = createObj(method13(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v70_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v74_1: (arg0: any) => any = v4;
    const v77_1: any = createComponent;
    return [v77_1(v74_1, v73_1)];
}

export function closure262(v0_1: () => [int32, any], _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v70_1: () => any[] = (): any[] => closure263(v0_1, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v70_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], US3_US3_1("3px"), _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        {int32ToString(v0_1()[0])}
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure261(unitVar: void, v0_1: () => [int32, any]): any[] {
    const v1_1: (arg0: Mut5) => any = (v: Mut5): any => closure22(void 0, v);
    const v2: (arg0: any) => any = v1_1;
    const v5: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure262(v0_1, arg10$0040);
    const v7: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v5, US14_US14_2());
    const v11: any = createComponent;
    return [v11(v2, v7)];
}

export function closure260(v0_1: Mut1, unitVar: void): any[] {
    const v1_1: [int32, any][] = v0_1.l6;
    const v4: int32 = v1_1.length | 0;
    const v6: Mut18 = new Mut18(0, UH2_UH2_1());
    while (method47(v4, v6)) {
        const v8: int32 = v6.l0 | 0;
        const v11: int32 = ((op_UnaryNegation_Int32(v8) + v4) - 1) | 0;
        const v12: UH2 = v6.l1;
        const patternInput_1: [int32, any] = v1_1[v11];
        const v15: int32 = (v8 + 1) | 0;
        v6.l0 = (v15 | 0);
        v6.l1 = UH2_UH2_0(patternInput_1[0], patternInput_1[1], v12);
    }
    const v20: [int32, any][] = method49(method48(v6.l1, UH2_UH2_1()));
    const v23: any = Index;
    const v24: (arg0: () => [int32, any]) => any[] = (v: () => [int32, any]): any[] => closure261(void 0, v);
    const v25: () => any[] = v24;
    const patternInput_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v95_1: any = createObj(method13(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], patternInput_2[10], US7_US7_1(v25), patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], US9_US9_1(v20), patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62], patternInput_2[63], patternInput_2[64]));
    const v96_1: (arg0: any) => any = v23;
    const v98: any = createComponent;
    return [v98(v96_1, v95_1)];
}

export function closure259(v0_1: Mut1, unitVar: void): any[] {
    const v1_1: (arg0: Mut3) => any = (v: Mut3): any => closure18(void 0, v);
    const v2: (arg0: any) => any = v1_1;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v68_1: () => any[] = (): any[] => closure260(v0_1, void 0);
    const v70_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v68_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v70_1.children = v68_1;
    const v74_1: any = createComponent;
    return [v74_1(v2, v70_1)];
}

export function closure250(v0_1: Mut1, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v68_1: any = Stack;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v142: () => any[] = (): any[] => closure251(void 0, void 0);
    const v151: any = createObj(method13(US3_US3_1("start"), patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v142), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], US3_US3_1(method19("column", "row")), patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], US3_US3_1(method19("8px", "0")), patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], US3_US3_1("3px"), patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], US3_US3_1("7px"), patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]));
    const v152: (arg0: any) => any = v68_1;
    const v155: any = createComponent;
    const v157: () => any[] = (): any[] => closure259(v0_1, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v157), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], US3_US3_1("deploy"), _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(v155(v152, v151)), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function method52(): any {
    const v2: any = useStoreon;
    const v3: any[] = v2();
    const v4: Mut1 = v3[0];
    const v5: any = v3[1];
    const patternInput: [[int32, any][], [int32, any][], [int32, int32][]] = [v4.l6, v4.l7, v4.l8];
    const v9: (arg0: Mut5) => any = (v: Mut5): any => closure22(void 0, v);
    const v10: (arg0: any) => any = v9;
    const v13: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure250(v4, arg10$0040);
    const v15: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v13, US14_US14_2());
    const v19: any = createComponent;
    return v19(v10, v15);
}

export function closure249(unitVar: void, v0_1: Mut3): any {
    return method52();
}

export function closure265(unitVar: void, unitVar_1: void): any[] {
    return [];
}

export function closure212(v0_1: string, v1_1: any, v2: string, v3: string, v4: boolean, unitVar: void): any[] {
    const v5: (arg0: Mut3) => any = (v: Mut3): any => closure213(void 0, v);
    const v6: (arg0: any) => any = v5;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v72_1: () => any[] = (): any[] => closure231(void 0, void 0);
    const v74_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v72_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v74_1.children = v72_1;
    const v78_1: any = createComponent;
    const v79_1: any = v78_1(v6, v74_1);
    const v80_1: (arg0: Mut3) => any = (v_1: Mut3): any => closure232(void 0, v_1);
    const v81_1: (arg0: any) => any = v80_1;
    const patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v147: () => any[] = (): any[] => closure248(void 0, void 0);
    const v149: Mut3 = new Mut3(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], patternInput_1[4], patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], US7_US7_1(v147), patternInput_1[12], patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], patternInput_1[18], patternInput_1[19], patternInput_1[20], patternInput_1[21], patternInput_1[22], patternInput_1[23], patternInput_1[24], patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], patternInput_1[38], patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], patternInput_1[46], patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62], patternInput_1[63], patternInput_1[64]);
    v149.children = v147;
    const v151: any = createComponent;
    const v155: boolean = (v2 === "") !== true;
    const v157: any = v155 ? (v151(v81_1, v149)) : <></>;
    const v158: (arg0: Mut3) => any = (v_2: Mut3): any => closure249(void 0, v_2);
    const v159: (arg0: any) => any = v158;
    const patternInput_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v225: () => any[] = (): any[] => closure265(void 0, void 0);
    const v227: Mut3 = new Mut3(patternInput_2[0], patternInput_2[1], patternInput_2[2], patternInput_2[3], patternInput_2[4], patternInput_2[5], patternInput_2[6], patternInput_2[7], patternInput_2[8], patternInput_2[9], patternInput_2[10], US7_US7_1(v225), patternInput_2[12], patternInput_2[13], patternInput_2[14], patternInput_2[15], patternInput_2[16], patternInput_2[17], patternInput_2[18], patternInput_2[19], patternInput_2[20], patternInput_2[21], patternInput_2[22], patternInput_2[23], patternInput_2[24], patternInput_2[25], patternInput_2[26], patternInput_2[27], patternInput_2[28], patternInput_2[29], patternInput_2[30], patternInput_2[31], patternInput_2[32], patternInput_2[33], patternInput_2[34], patternInput_2[35], patternInput_2[36], patternInput_2[37], patternInput_2[38], patternInput_2[39], patternInput_2[40], patternInput_2[41], patternInput_2[42], patternInput_2[43], patternInput_2[44], patternInput_2[45], patternInput_2[46], patternInput_2[47], patternInput_2[48], patternInput_2[49], patternInput_2[50], patternInput_2[51], patternInput_2[52], patternInput_2[53], patternInput_2[54], patternInput_2[55], patternInput_2[56], patternInput_2[57], patternInput_2[58], patternInput_2[59], patternInput_2[60], patternInput_2[61], patternInput_2[62], patternInput_2[63], patternInput_2[64]);
    v227.children = v225;
    const v229: any = createComponent;
    return [v79_1, v157, v155 ? (v229(v159, v227)) : <></>];
}

export function closure211(v0_1: string, v1_1: any, v2: string, v3: string, v4: boolean, unitVar: void): any[] {
    const v5: (arg0: Mut3) => any = (v: Mut3): any => closure18(void 0, v);
    const v6: (arg0: any) => any = v5;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v72_1: () => any[] = (): any[] => closure212(v0_1, v1_1, v2, v3, v4, void 0);
    const v74_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v72_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], patternInput[18], patternInput[19], patternInput[20], patternInput[21], patternInput[22], patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], patternInput[44], patternInput[45], patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v74_1.children = v72_1;
    const v78_1: any = createComponent;
    return [v78_1(v6, v74_1)];
}

export function closure210(v0_1: string, v1_1: any, v2: string, v3: string, v4: boolean, _arg: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] {
    const v72_1: () => any[] = (): any[] => closure211(v0_1, v1_1, v2, v3, v4, void 0);
    return [_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6], _arg[7], _arg[8], _arg[9], _arg[10], US7_US7_1(v72_1), _arg[12], _arg[13], _arg[14], _arg[15], _arg[16], _arg[17], _arg[18], _arg[19], _arg[20], _arg[21], _arg[22], _arg[23], _arg[24], _arg[25], _arg[26], _arg[27], _arg[28], _arg[29], _arg[30], _arg[31], _arg[32], _arg[33], _arg[34], _arg[35], _arg[36], _arg[37], _arg[38], _arg[39], _arg[40], _arg[41], _arg[42], _arg[43], _arg[44], _arg[45], _arg[46], _arg[47], _arg[48], _arg[49], _arg[50], _arg[51], _arg[52], _arg[53], _arg[54], _arg[55], _arg[56], _arg[57], US10_US10_1(<>
        Profile
    </>), _arg[59], _arg[60], _arg[61], _arg[62], _arg[63], _arg[64]];
}

export function closure21(v0_1: string, v1_1: any, v2: string, v3: string, v4: boolean, unitVar: void): any[] {
    const v5: (arg0: Mut5) => any = (v: Mut5): any => closure22(void 0, v);
    const v6: (arg0: any) => any = v5;
    const v9: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure57(void 0, arg10$0040);
    const v11: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v9, US14_US14_2());
    const v15: any = createComponent;
    const v17: (arg0: any) => any = v5;
    const v20: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure45(void 0, arg10$0040_1);
    const v22: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v20, US14_US14_2());
    const v24: any = createComponent;
    const v26: (arg0: any) => any = v5;
    const v29: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_2: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure76(void 0, arg10$0040_2);
    const v31: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v29, US14_US14_2());
    const v33: any = createComponent;
    const v35: (arg0: any) => any = v5;
    const v39: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v20, US14_US14_2());
    const v41: any = createComponent;
    const v43: (arg0: any) => any = v5;
    const v46: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_3: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure88(void 0, arg10$0040_3);
    const v48: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v46, US14_US14_0());
    const v50: any = createComponent;
    const v52: (arg0: any) => any = v5;
    const v56: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v20, US14_US14_2());
    const v58: any = createComponent;
    const v60: (arg0: any) => any = v5;
    const v63: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_4: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure145(void 0, arg10$0040_4);
    const v65: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v63, US14_US14_0());
    const v67_1: any = createComponent;
    const v69_1: (arg0: any) => any = v5;
    const v73_1: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v20, US14_US14_2());
    const v75_1: any = createComponent;
    const v77_1: (arg0: any) => any = v5;
    const v80_1: (arg0: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]) => [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = (arg10$0040_5: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3]): [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] => closure210(v0_1, v1_1, v2, v3, v4, arg10$0040_5);
    const v82_1: Mut5 = new Mut5(US13_US13_0(), US13_US13_0(), v80_1, US14_US14_2());
    const v84_1: any = createComponent;
    return [v15(v6, v11), v24(v17, v22), v33(v26, v31), v41(v35, v39), v50(v43, v48), v58(v52, v56), v67_1(v60, v65), v75_1(v69_1, v73_1), v84_1(v77_1, v82_1)];
}

export function closure6(v0_1: string, v1_1: any, v2: string, v3: string, v4: boolean, unitVar: void): any[] {
    const v5: (arg0: Mut2) => any = (v: Mut2): any => closure7(void 0, v);
    const v6: (arg0: any) => any = v5;
    const v7: Mut2 = Mut2_$ctor();
    const v11: any = createComponent;
    const v16: any = (v2 === "") ? (v11(v6, v7)) : <></>;
    const v17: (arg0: Mut3) => any = (v_1: Mut3): any => closure18(void 0, v_1);
    const v18: (arg0: any) => any = v17;
    const patternInput: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v84_1: () => any[] = (): any[] => closure21(v0_1, v1_1, v2, v3, v4, void 0);
    const v96_1: Mut3 = new Mut3(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], patternInput[5], patternInput[6], patternInput[7], patternInput[8], patternInput[9], patternInput[10], US7_US7_1(v84_1), patternInput[12], patternInput[13], patternInput[14], patternInput[15], patternInput[16], patternInput[17], US3_US3_1("flex"), patternInput[19], patternInput[20], US3_US3_1("1"), US3_US3_1("column"), patternInput[23], patternInput[24], patternInput[25], patternInput[26], patternInput[27], patternInput[28], patternInput[29], patternInput[30], patternInput[31], patternInput[32], patternInput[33], patternInput[34], patternInput[35], patternInput[36], patternInput[37], patternInput[38], patternInput[39], patternInput[40], patternInput[41], patternInput[42], patternInput[43], US3_US3_1("hidden"), US3_US3_1("auto"), patternInput[46], patternInput[47], patternInput[48], patternInput[49], patternInput[50], patternInput[51], patternInput[52], patternInput[53], patternInput[54], patternInput[55], patternInput[56], patternInput[57], patternInput[58], patternInput[59], patternInput[60], patternInput[61], patternInput[62], patternInput[63], patternInput[64]);
    v96_1.children = v84_1;
    const v98: any = createComponent;
    return [v16, v98(v18, v96_1)];
}

export function method10(): any {
    const patternInput: [string, any, string, string, boolean] = method1();
    const v7: any = Box;
    const patternInput_1: [US3, US3, US3, US5, US3, US3, US3, US3, US3, US3, US6, US7, US3, US3, US6, US8, US3, US3, US3, US9, US6, US3, US3, US3, US3, US3, US10, US3, US3, US3, US10, US3, US3, US3, US3, US3, US3, US3, US3, US11, US12, US11, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US3, US10, US3, US3, US8, US3, US2, US3] = method11();
    const v75_1: () => any[] = (): any[] => closure6(patternInput[0], patternInput[1], patternInput[2], patternInput[3], patternInput[4], void 0);
    const v94_1: any = createObj(method13(patternInput_1[0], patternInput_1[1], patternInput_1[2], patternInput_1[3], US3_US3_1("$bg"), patternInput_1[5], patternInput_1[6], patternInput_1[7], patternInput_1[8], patternInput_1[9], patternInput_1[10], US7_US7_1(v75_1), US3_US3_1("$text1"), patternInput_1[13], patternInput_1[14], patternInput_1[15], patternInput_1[16], patternInput_1[17], US3_US3_1("flex"), patternInput_1[19], patternInput_1[20], US3_US3_1("1"), US3_US3_1("column"), US3_US3_1("$sm"), US3_US3_1("100vh"), patternInput_1[25], patternInput_1[26], patternInput_1[27], patternInput_1[28], patternInput_1[29], patternInput_1[30], patternInput_1[31], patternInput_1[32], patternInput_1[33], patternInput_1[34], patternInput_1[35], patternInput_1[36], patternInput_1[37], US3_US3_1("100vw"), patternInput_1[39], patternInput_1[40], patternInput_1[41], patternInput_1[42], patternInput_1[43], patternInput_1[44], patternInput_1[45], US3_US3_1("1px"), patternInput_1[47], patternInput_1[48], patternInput_1[49], patternInput_1[50], patternInput_1[51], patternInput_1[52], patternInput_1[53], patternInput_1[54], patternInput_1[55], patternInput_1[56], patternInput_1[57], patternInput_1[58], patternInput_1[59], patternInput_1[60], patternInput_1[61], patternInput_1[62], patternInput_1[63], patternInput_1[64]));
    const v95_1: (arg0: any) => any = v7;
    const v98: any = createComponent;
    return v98(v95_1, v94_1);
}

export function closure5(unitVar: void, v0_1: Mut3): any {
    return method10();
}

export const v0 = void 0;

export const v1 = new Mut0(v0);

export const v67 = process.env;

export const v68 = "env";

export const v69 = [v68, v67];

export const v70 = [v69];

export const v71 = createObj(v70);

window.components_spi = v71;

export const patternInput$00405385 = method0();

export const v81 = patternInput$00405385[9];

export const v80 = patternInput$00405385[8];

export const v79 = patternInput$00405385[7];

export const v78 = patternInput$00405385[6];

export const v77 = patternInput$00405385[5];

export const v76 = patternInput$00405385[4];

export const v75 = patternInput$00405385[3];

export const v74 = patternInput$00405385[2];

export const v73 = patternInput$00405385[1];

export const v72 = patternInput$00405385[0];

export const v82 = new Mut1(v72, v73, v74, v75, v76, v77, v78, v79, v80, v81);

export const v83 = v82;

export const v84 = method6(v83);

export const v85 = nonSeeded().Next0();

export const v86 = "db_listener";

export const v87 = (v: Mut2): any => closure1(v84, v);

export const v88 = [v86, v87];

export const v89 = "content";

export const v90 = (v: Mut3): any => closure5(void 0, v);

export const v91 = [v89, v90];

export const v92 = "store";

export const v93 = [v92, v84];

export const v94 = "run_id";

export const v95 = [v94, v85];

export const v96 = [v88, v91, v93, v95, v69];

export const v97 = createObj(v96);

window.components_spi = v97;

v1.l0 = v97;


