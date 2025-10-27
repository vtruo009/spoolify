export interface Spool {
	name: string;
	brand?: string;
	color: string;
	type: FilamentType;
	weight_start: number;
	weight_remaining: number;
}

enum FilamentType {
	PLA = 'PLA',
	ABS = 'ABS',
	ASA = 'ASA',
	TPU = 'TPU',
	PETG = 'PETG',
	PETG_TRANSLUCENT = 'PETG Translucent',
}
