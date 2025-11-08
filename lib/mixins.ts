export interface Spool {
	description: string;
	filament_color: string;
	filament_type: FilamentType;
	weight_start: number;
	weight_remaining: number;
}

export enum FilamentType {
	PLA = 'PLA',
	ABS = 'ABS',
	ASA = 'ASA',
	TPU = 'TPU',
	PETG = 'PETG',
	PETG_TRANSLUCENT = 'PETG Translucent',
}
