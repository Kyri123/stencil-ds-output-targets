/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'component-library';


interface MyRangeProps {
  
  /** The color to use from your application's color palette.
Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
For more information on colors, see [theming](/docs/theming/basics). */
  color?: Components.MyRange["color"]
  
  /** How long, in milliseconds, to wait to trigger the
`myChange` event after each change in the range value. */
  debounce?: Components.MyRange["debounce"]
  
  /** The name of the control, which is submitted with the form data. */
  name?: Components.MyRange["name"]
  
  /** Show two knobs. */
  dualKnobs?: Components.MyRange["dualKnobs"]
  
  /** Minimum integer value of the range. */
  min?: Components.MyRange["min"]
  
  /** Maximum integer value of the range. */
  max?: Components.MyRange["max"]
  
  /** If `true`, a pin with integer value is shown when the knob
is pressed. */
  pin?: Components.MyRange["pin"]
  
  /** If `true`, the knob snaps to tick marks evenly spaced based
on the step property value. */
  snaps?: Components.MyRange["snaps"]
  
  /** Specifies the value granularity. */
  step?: Components.MyRange["step"]
  
  /** If `true`, tick marks are displayed based on the step value.
Only applies when `snaps` is `true`. */
  ticks?: Components.MyRange["ticks"]
  
  /** If `true`, the user cannot interact with the range. */
  disabled?: Components.MyRange["disabled"]
  
  /** the value of the range. */
  value?: Components.MyRange["value"]
}

interface MyRangeEvents {
  
  /** Emitted when the value property has changed. */
  myChange: Parameters<JSX.MyRange["onMyChange"]>[0]
  
  /** Emitted when the styles change. */
  myStyle: Parameters<JSX.MyRange["onMyStyle"]>[0]
  
  /** Emitted when the range has focus. */
  myFocus: Parameters<JSX.MyRange["onMyFocus"]>[0]
  
  /** Emitted when the range loses focus. */
  myBlur: Parameters<JSX.MyRange["onMyBlur"]>[0]
}

interface MyRangeSlots {
  default: any
}
  
/* generated by Svelte v3.44.2 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	flush,
	get_all_dirty_from_scope,
	get_slot_changes,
	init,
	insert,
	listen,
	run_all,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot_base
} from "svelte/internal";

import { createEventDispatcher, onMount } from 'svelte';

function create_fragment(ctx) {
	let my_range;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[16].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[15], null);

	return {
		c() {
			my_range = element("my-range");
			if (default_slot) default_slot.c();
			set_custom_element_data(my_range, "color", /*color*/ ctx[1]);
			set_custom_element_data(my_range, "debounce", /*debounce*/ ctx[2]);
			set_custom_element_data(my_range, "name", /*name*/ ctx[3]);
			set_custom_element_data(my_range, "dual-knobs", /*dualKnobs*/ ctx[4]);
			set_custom_element_data(my_range, "min", /*min*/ ctx[5]);
			set_custom_element_data(my_range, "max", /*max*/ ctx[6]);
			set_custom_element_data(my_range, "pin", /*pin*/ ctx[7]);
			set_custom_element_data(my_range, "snaps", /*snaps*/ ctx[8]);
			set_custom_element_data(my_range, "step", /*step*/ ctx[9]);
			set_custom_element_data(my_range, "ticks", /*ticks*/ ctx[10]);
			set_custom_element_data(my_range, "disabled", /*disabled*/ ctx[11]);
			set_custom_element_data(my_range, "value", /*value*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, my_range, anchor);

			if (default_slot) {
				default_slot.m(my_range, null);
			}

			/*my_range_binding*/ ctx[17](my_range);
			current = true;

			if (!mounted) {
				dispose = [
					listen(my_range, "myChange", /*onEvent*/ ctx[13]),
					listen(my_range, "myStyle", /*onEvent*/ ctx[13]),
					listen(my_range, "myFocus", /*onEvent*/ ctx[13]),
					listen(my_range, "myBlur", /*onEvent*/ ctx[13])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32768)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[15],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[15])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[15], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*color*/ 2) {
				set_custom_element_data(my_range, "color", /*color*/ ctx[1]);
			}

			if (!current || dirty & /*debounce*/ 4) {
				set_custom_element_data(my_range, "debounce", /*debounce*/ ctx[2]);
			}

			if (!current || dirty & /*name*/ 8) {
				set_custom_element_data(my_range, "name", /*name*/ ctx[3]);
			}

			if (!current || dirty & /*dualKnobs*/ 16) {
				set_custom_element_data(my_range, "dual-knobs", /*dualKnobs*/ ctx[4]);
			}

			if (!current || dirty & /*min*/ 32) {
				set_custom_element_data(my_range, "min", /*min*/ ctx[5]);
			}

			if (!current || dirty & /*max*/ 64) {
				set_custom_element_data(my_range, "max", /*max*/ ctx[6]);
			}

			if (!current || dirty & /*pin*/ 128) {
				set_custom_element_data(my_range, "pin", /*pin*/ ctx[7]);
			}

			if (!current || dirty & /*snaps*/ 256) {
				set_custom_element_data(my_range, "snaps", /*snaps*/ ctx[8]);
			}

			if (!current || dirty & /*step*/ 512) {
				set_custom_element_data(my_range, "step", /*step*/ ctx[9]);
			}

			if (!current || dirty & /*ticks*/ 1024) {
				set_custom_element_data(my_range, "ticks", /*ticks*/ ctx[10]);
			}

			if (!current || dirty & /*disabled*/ 2048) {
				set_custom_element_data(my_range, "disabled", /*disabled*/ ctx[11]);
			}

			if (!current || dirty & /*value*/ 1) {
				set_custom_element_data(my_range, "value", /*value*/ ctx[0]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(my_range);
			if (default_slot) default_slot.d(detaching);
			/*my_range_binding*/ ctx[17](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { color = undefined } = $$props;
	let { debounce = undefined } = $$props;
	let { name = undefined } = $$props;
	let { dualKnobs = undefined } = $$props;
	let { min = undefined } = $$props;
	let { max = undefined } = $$props;
	let { pin = undefined } = $$props;
	let { snaps = undefined } = $$props;
	let { step = undefined } = $$props;
	let { ticks = undefined } = $$props;
	let { disabled = undefined } = $$props;
	let { value = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(12, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);

		if (e.type === 'myChange') {
			$$invalidate(0, value = e.detail);
		}
	};

	function my_range_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(12, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('color' in $$props) $$invalidate(1, color = $$props.color);
		if ('debounce' in $$props) $$invalidate(2, debounce = $$props.debounce);
		if ('name' in $$props) $$invalidate(3, name = $$props.name);
		if ('dualKnobs' in $$props) $$invalidate(4, dualKnobs = $$props.dualKnobs);
		if ('min' in $$props) $$invalidate(5, min = $$props.min);
		if ('max' in $$props) $$invalidate(6, max = $$props.max);
		if ('pin' in $$props) $$invalidate(7, pin = $$props.pin);
		if ('snaps' in $$props) $$invalidate(8, snaps = $$props.snaps);
		if ('step' in $$props) $$invalidate(9, step = $$props.step);
		if ('ticks' in $$props) $$invalidate(10, ticks = $$props.ticks);
		if ('disabled' in $$props) $$invalidate(11, disabled = $$props.disabled);
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('$$scope' in $$props) $$invalidate(15, $$scope = $$props.$$scope);
	};

	return [
		value,
		color,
		debounce,
		name,
		dualKnobs,
		min,
		max,
		pin,
		snaps,
		step,
		ticks,
		disabled,
		__ref,
		onEvent,
		getWebComponent,
		$$scope,
		slots,
		my_range_binding
	];
}

class MyRange extends SvelteComponent {
  $$prop_def: MyRangeProps;
  $$events_def: MyRangeEvents;
  $$slot_def: MyRangeSlots;

  $on<K extends keyof MyRangeEvents>(type: K, callback: (e: MyRangeEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<MyRangeProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			color: 1,
			debounce: 2,
			name: 3,
			dualKnobs: 4,
			min: 5,
			max: 6,
			pin: 7,
			snaps: 8,
			step: 9,
			ticks: 10,
			disabled: 11,
			value: 0,
			getWebComponent: 14
		});
	}

	get color() {
		return this.$$.ctx[1];
	}

	set color(color) {
		this.$$set({ color });
		flush();
	}

	get debounce() {
		return this.$$.ctx[2];
	}

	set debounce(debounce) {
		this.$$set({ debounce });
		flush();
	}

	get name() {
		return this.$$.ctx[3];
	}

	set name(name) {
		this.$$set({ name });
		flush();
	}

	get dualKnobs() {
		return this.$$.ctx[4];
	}

	set dualKnobs(dualKnobs) {
		this.$$set({ dualKnobs });
		flush();
	}

	get min() {
		return this.$$.ctx[5];
	}

	set min(min) {
		this.$$set({ min });
		flush();
	}

	get max() {
		return this.$$.ctx[6];
	}

	set max(max) {
		this.$$set({ max });
		flush();
	}

	get pin() {
		return this.$$.ctx[7];
	}

	set pin(pin) {
		this.$$set({ pin });
		flush();
	}

	get snaps() {
		return this.$$.ctx[8];
	}

	set snaps(snaps) {
		this.$$set({ snaps });
		flush();
	}

	get step() {
		return this.$$.ctx[9];
	}

	set step(step) {
		this.$$set({ step });
		flush();
	}

	get ticks() {
		return this.$$.ctx[10];
	}

	set ticks(ticks) {
		this.$$set({ ticks });
		flush();
	}

	get disabled() {
		return this.$$.ctx[11];
	}

	set disabled(disabled) {
		this.$$set({ disabled });
		flush();
	}

	get value() {
		return this.$$.ctx[0];
	}

	set value(value) {
		this.$$set({ value });
		flush();
	}

	get getWebComponent(): HTMLMyRangeElement | undefined {
		return this.$$.ctx[14];
	}
}

export default MyRange;