import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, '');
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

const toRadians = (degree: number) => degree * (Math.PI / 180);

export const haversineDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
	const R = 6371; // Radius of the Earth in kilometers
	const dLat = toRadians(lat2 - lat1);
	const dLon = toRadians(lon2 - lon1);
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	return R * c;
};

export const getTimeDifference = (futureDate: Date) => {
	const now = new Date().getTime();
	const futureTime = futureDate.getTime();
	const differenceInMilliseconds = futureTime - now;
	const differenceInMinutes = Math.floor(differenceInMilliseconds / (1000 * 60));
	return differenceInMinutes;
};

export const alpha = (color: string, opacity: number) => {
	if (color.startsWith('#')) {
		const r = parseInt(color.slice(1, 3), 16);
		const g = parseInt(color.slice(3, 5), 16);
		const b = parseInt(color.slice(5, 7), 16);
		return `rgba(${r}, ${g}, ${b}, ${opacity})`;
	} else if (color.startsWith('rgb')) {
		const match = color.match(/\d+/g);

		if (match) {
			const [r, g, b] = match;
			return `rgba(${r}, ${g}, ${b}, ${opacity})`;
		} else {
			throw new Error('Invalid RGB format');
		}
	} else {
		return `rgba(255, 255, 255, ${opacity})`;
	}
};

export const buildUrl = (path: string = '') => {
	const baseURL = import.meta.env.VITE_BASE_URL || '';

	return `${baseURL.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
};

export const fetchData = async <T>(url: URL | string): Promise<T> => {
	return await fetch(url, {
		method: 'GET',
		headers: {
			accept: 'application/vnd.api+json'
		}
	}).then((r) => r.json());
};
