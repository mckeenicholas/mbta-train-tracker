export interface Station {
	id: string;
	name: string;
	lat: number;
	lon: number;
	vehicles: number[];
}

export type StationMap = Record<string, Station>;

export interface IRoute {
	[key: string]: {
		name: string;
		color: string;
		text_color: string;
		directions: string[];
		type: number;
	};
}

export interface ApiResponse {
	data: Prediction[];
	jsonapi: JsonApi;
}

export interface Prediction {
	id: string;
	type: string;
	attributes: Attributes;
	relationships: Relationships;
}

export interface Attributes {
	arrival_time: string | null;
	arrival_uncertainty: number | null;
	departure_time: string | null;
	departure_uncertainty: number | null;
	direction_id: number;
	last_trip: boolean;
	revenue: string | null;
	schedule_relationship: string | null;
	status: string | null;
	stop_sequence: number;
	update_type: string;
}

export interface Relationships {
	route: RelationshipData;
	stop: RelationshipData;
	trip: RelationshipData;
	vehicle: RelationshipData;
}

export interface RelationshipData {
	data: Entity;
}

export interface Entity {
	id: string;
	type: string;
}

export interface JsonApi {
	version: string;
}
