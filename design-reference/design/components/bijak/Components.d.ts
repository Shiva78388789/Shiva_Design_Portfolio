// Components.d.ts — the complete catalog of the 42 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Back) and usable directly in JSX.
import * as React from 'react';

// figma layer: " back" (node 14:269)
export interface BackProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: ".baseArowAropDownDuplicate" (node 106:40549)
export interface BaseArowAropDownDuplicateProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: ".baseArowAropDownDuplicate" (node 136:22887)
export interface BaseArowAropDownDuplicate2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: ".baseCover" (node 93:390)
export interface BaseCoverProps {
  className?: string;
  style?: React.CSSProperties;
  research?: boolean;
  inDesign?: boolean;
  onHold?: boolean;
  testing?: boolean;
  engineering?: boolean;
  developed?: boolean;
  /** Text content; defaults to "🔍". */
  text1?: string;
  /** Text content; defaults to "Status". */
  text2?: string;
  /** Text content; defaults to "Scope & Strategy". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".baseCoverName" (node 93:411)
export interface BaseCoverNameProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Epic Name". */
  text1?: string;
  /** Text content; defaults to "Simple two-liner that succintly describes what this feature is and what problem it solves.". */
  text2?: string;
}

// figma layer: ".baseInput/Type3" (node 170:1509)
export interface BaseInputType3Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Help text ". */
  text1?: string;
}

// figma layer: ".baseOwnerName" (node 93:414)
export interface BaseOwnerNameProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "@slackID". */
  text1?: string;
  /** Text content; defaults to "Owner". */
  text2?: string;
}

// figma layer: "Button" (node 9:10724)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "stroke" | "nude" | "hover" | "type5" | "type6" | "type7" | "type8" | "square";
  state?: "disabled" | "enabled" | "loading";
  icon?: boolean;
  iconPosition?: "left" | "right";
  /** Text content; defaults to "Button". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Calendar Outline" (node 274:6)
export interface CalendarOutlineProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: " Cancel " (node 9:15)
export interface CancelProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: " Check" (node 9:25)
export interface CheckProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "CheckBox" (node 111:19135)
export interface CheckBoxProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "check" | "uncheck" | "indeterminate";
  status?: "active" | "inactive";
}

// figma layer: " date" (node 9:548)
export interface ComponentProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Component 10" (node 287:22504)
export interface Component10Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Component 3" (node 190:33271)
export interface Component3Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: ".baseadornment" | "component 2";
  property2?: ".baselabel";
  /** Text content; defaults to "Label". */
  text1?: string;
}

// figma layer: "Component 7" (node 286:22393)
export interface Component7Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Component 8" (node 286:22411)
export interface Component8Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Cursor" (node 93:867)
export interface CursorProps {
  className?: string;
  style?: React.CSSProperties;
  cursorType?: "default" | "link" | "scroll" | "help" | "wait" | "text" | "copy" | "not allowed" | "zoom in" | "zoom out" | "grab" | "grabbing" | "unavailable";
}

// figma layer: "3 dot" (node 244:20)
export interface Dot3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Element-Master" (node 256:21)
export interface ElementMasterProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Ellipse 1" (node 190:33261)
export interface Ellipse1Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Expandable Main component" (node 287:22500)
export interface ExpandableMainComponentProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Frame 4722" (node 244:603)
export interface Frame4722Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Business name". */
  text1?: string;
}

// figma layer: "Frame 4736" (node 236:35942)
export interface Frame4736Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Group 4583" (node 234:33338)
export interface Group4583Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: " Hamburger" (node 9:2)
export interface HamburgerProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Input Field" (node 287:28149)
export interface InputFieldProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "enabled" | "focus" | "disabled" | "error";
  dropdown?: "on" | "off";
  lable?: "on" | "off";
  helpText?: "on" | "off";
  paragraph?: "off" | "on";
}

// figma layer: " KYC" (node 274:19)
export interface KYCProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "$label" (node 190:33303)
export interface LabelProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Input text". */
  text1?: string;
}

// figma layer: "New Cover" (node 93:388)
export interface NewCoverProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Note / Is this clickable? I can’t tell?" (node 9:30)
export interface NoteIsThisClickableIProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Note / Yellow Note" (node 9:32)
export interface NoteYellowNoteProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "❓Why... \n\nwhy did you put that there?". */
  text1?: string;
}

// figma layer: "Parent Frame" (node 234:33359)
export interface ParentFrameProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Parent Frame" (node 235:34964)
export interface ParentFrame2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Placeholder" (node 14:281)
export interface PlaceholderProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "avatar" | "avatar selected" | "check" | "check-circle" | "close" | "iconarrodropdown" | "iconcontainer" | "language" | "spinner" | "tapable icon" | "tapableicondefault" | "📍button icons" | "📍icon";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "12px" (node 9:11)
export interface Px12Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "4px" (node 9:18)
export interface Px4Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "8px" (node 9:13)
export interface Px8Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Radio Button" (node 111:23105)
export interface RadioButtonProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "check" | "uncheck";
  disabled?: boolean;
}

// figma layer: "Spacing" (node 179:510)
export interface SpacingProps {
  className?: string;
  style?: React.CSSProperties;
  spacing?: "16" | "20" | "24" | "28" | "32" | "40" | "48" | "56" | "12" | "8";
}

// figma layer: "timelapse" (node 14:5814)
export interface TimelapseProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "filled" | "outlined" | "rounded" | "sharp" | "two-tone";
}

// figma layer: "Toggle" (node 179:319)
export interface ToggleProps {
  className?: string;
  style?: React.CSSProperties;
  state?: boolean;
}

declare const Back: React.FC<BackProps>;
declare const BaseArowAropDownDuplicate: React.FC<BaseArowAropDownDuplicateProps>;
declare const BaseArowAropDownDuplicate2: React.FC<BaseArowAropDownDuplicate2Props>;
declare const BaseCover: React.FC<BaseCoverProps>;
declare const BaseCoverName: React.FC<BaseCoverNameProps>;
declare const BaseInputType3: React.FC<BaseInputType3Props>;
declare const BaseOwnerName: React.FC<BaseOwnerNameProps>;
declare const Button: React.FC<ButtonProps>;
declare const CalendarOutline: React.FC<CalendarOutlineProps>;
declare const Cancel: React.FC<CancelProps>;
declare const Check: React.FC<CheckProps>;
declare const CheckBox: React.FC<CheckBoxProps>;
declare const Component: React.FC<ComponentProps>;
declare const Component10: React.FC<Component10Props>;
declare const Component3: React.FC<Component3Props>;
declare const Component7: React.FC<Component7Props>;
declare const Component8: React.FC<Component8Props>;
declare const Cursor: React.FC<CursorProps>;
declare const Dot3: React.FC<Dot3Props>;
declare const ElementMaster: React.FC<ElementMasterProps>;
declare const Ellipse1: React.FC<Ellipse1Props>;
declare const ExpandableMainComponent: React.FC<ExpandableMainComponentProps>;
declare const Frame4722: React.FC<Frame4722Props>;
declare const Frame4736: React.FC<Frame4736Props>;
declare const Group4583: React.FC<Group4583Props>;
declare const Hamburger: React.FC<HamburgerProps>;
declare const InputField: React.FC<InputFieldProps>;
declare const KYC: React.FC<KYCProps>;
declare const Label: React.FC<LabelProps>;
declare const NewCover: React.FC<NewCoverProps>;
declare const NoteIsThisClickableI: React.FC<NoteIsThisClickableIProps>;
declare const NoteYellowNote: React.FC<NoteYellowNoteProps>;
declare const ParentFrame: React.FC<ParentFrameProps>;
declare const ParentFrame2: React.FC<ParentFrame2Props>;
declare const Placeholder: React.FC<PlaceholderProps>;
declare const Px12: React.FC<Px12Props>;
declare const Px4: React.FC<Px4Props>;
declare const Px8: React.FC<Px8Props>;
declare const RadioButton: React.FC<RadioButtonProps>;
declare const Spacing: React.FC<SpacingProps>;
declare const Timelapse: React.FC<TimelapseProps>;
declare const Toggle: React.FC<ToggleProps>;
declare global {
  interface Window {
    Back: React.FC<BackProps>;
    BaseArowAropDownDuplicate: React.FC<BaseArowAropDownDuplicateProps>;
    BaseArowAropDownDuplicate2: React.FC<BaseArowAropDownDuplicate2Props>;
    BaseCover: React.FC<BaseCoverProps>;
    BaseCoverName: React.FC<BaseCoverNameProps>;
    BaseInputType3: React.FC<BaseInputType3Props>;
    BaseOwnerName: React.FC<BaseOwnerNameProps>;
    Button: React.FC<ButtonProps>;
    CalendarOutline: React.FC<CalendarOutlineProps>;
    Cancel: React.FC<CancelProps>;
    Check: React.FC<CheckProps>;
    CheckBox: React.FC<CheckBoxProps>;
    Component: React.FC<ComponentProps>;
    Component10: React.FC<Component10Props>;
    Component3: React.FC<Component3Props>;
    Component7: React.FC<Component7Props>;
    Component8: React.FC<Component8Props>;
    Cursor: React.FC<CursorProps>;
    Dot3: React.FC<Dot3Props>;
    ElementMaster: React.FC<ElementMasterProps>;
    Ellipse1: React.FC<Ellipse1Props>;
    ExpandableMainComponent: React.FC<ExpandableMainComponentProps>;
    Frame4722: React.FC<Frame4722Props>;
    Frame4736: React.FC<Frame4736Props>;
    Group4583: React.FC<Group4583Props>;
    Hamburger: React.FC<HamburgerProps>;
    InputField: React.FC<InputFieldProps>;
    KYC: React.FC<KYCProps>;
    Label: React.FC<LabelProps>;
    NewCover: React.FC<NewCoverProps>;
    NoteIsThisClickableI: React.FC<NoteIsThisClickableIProps>;
    NoteYellowNote: React.FC<NoteYellowNoteProps>;
    ParentFrame: React.FC<ParentFrameProps>;
    ParentFrame2: React.FC<ParentFrame2Props>;
    Placeholder: React.FC<PlaceholderProps>;
    Px12: React.FC<Px12Props>;
    Px4: React.FC<Px4Props>;
    Px8: React.FC<Px8Props>;
    RadioButton: React.FC<RadioButtonProps>;
    Spacing: React.FC<SpacingProps>;
    Timelapse: React.FC<TimelapseProps>;
    Toggle: React.FC<ToggleProps>;
  }
}
