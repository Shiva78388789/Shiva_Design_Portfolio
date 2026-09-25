import type { ComponentType } from 'react';
import * as raw from './components';

// The Figma-generated components are untyped; see
// design-reference/design/components/bijak/Components.d.ts for their props.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Bijak = raw as unknown as Record<keyof typeof raw, ComponentType<any>>;

export const { Button, InputField, CheckBox, RadioButton, Toggle, Timelapse, Hamburger, CalendarOutline, KYC, Cursor } = Bijak;
