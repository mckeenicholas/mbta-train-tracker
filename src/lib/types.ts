export interface station {
	id: string;
	name: string;
	lat: number;
	lon: number;
}

export interface IRoute {
	[key: string]: {
		name: string;
		color: string;
		text_color: string;
		directions: string[];
		type: number;
	};
}
