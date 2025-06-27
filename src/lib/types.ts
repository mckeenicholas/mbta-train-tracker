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

export interface ApiResponse<T> {
	data: T;
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

export interface Vehicle {
	id: string;
	type: string;
	attributes: VehicleAttributes;
	links: {
		self: string;
	};
	relationships: Relationships;
}

export interface VehicleAttributes {
	bearing: number;
	carriages: Carriage[];
	current_status: string;
	current_stop_sequence: number;
	direction_id: number;
	label: string;
	latitude: number;
	longitude: number;
	occupancy_status: string | null;
	revenue: string;
	speed: number | null;
	updated_at: string;
}

export interface Carriage {
	label: string;
	occupancy_percentage: number | null;
	occupancy_status: OccupancyLevel;
}

export interface StopData {
	attributes: StopAttributes;
	id: string;
	links: StopLinks;
	relationships: StopRelationships;
	type: string; // "stop"
}

export interface StopAttributes {
	address: string | null;
	at_street: string | null;
	description: string;
	latitude: number;
	location_type: number;
	longitude: number;
	municipality: string;
	name: string;
	on_street: string | null;
	platform_code: string | null;
	platform_name: string;
	vehicle_type: number;
	wheelchair_boarding: number;
}

export interface StopLinks {
	self: string;
}

export interface StopRelationships {
	facilities: RelationshipLinks;
	parent_station: RelationshipData;
	zone: RelationshipData;
}

export interface RelationshipLinks {
	links: {
		related: string;
	};
}

export type OccupancyLevel =
	| 'EMPTY'
	| 'MANY_SEATS_AVAILABLE'
	| 'FEW_SEATS_AVAILABLE'
	| 'STANDING_ROOM_ONLY'
	| 'CRUSHED_STANDING_ROOM_ONLY'
	| 'FULL'
	| 'NOT_ACCEPTING_PASSENGERS'
	| 'NO_DATA_AVAILABLE'
	| 'NOT_BOARDABLE';
