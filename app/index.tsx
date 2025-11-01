import AddButton from '@/components/addButton';
import Filament from '@/components/filament';
import { FilamentType, Spool } from '@/lib/interfaces';
import { FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TEST_SPOOLS: Spool[] = [
	{
		short_description: 'Polyterra Matte Orange',
		filament_color: '#E27429',
		filament_type: FilamentType.PLA,
		weight_start: 1,
		weight_remaining: 0.8,
	},
	{
		short_description: 'Polyterra Matte Black',
		filament_color: '#000000',
		filament_type: FilamentType.PLA,
		weight_start: 1,
		weight_remaining: 0.3,
	},
	{
		short_description: 'Bambu Lab PETG Translucent',
		filament_color: '#ffaa66',
		filament_type: FilamentType.PETG_TRANSLUCENT,
		weight_start: 1,
		weight_remaining: 0.9,
	},
];

export default function Index() {
	return (
		<SafeAreaView className='flex-1 bg-background'>
			<Text className='text-5xl text-left pl-5 py-6'>My Filaments</Text>
			<FlatList
				data={TEST_SPOOLS}
				renderItem={({ item }) => (
					<Filament
						short_description={item.short_description}
						filament_color={item.filament_color}
						filament_type={item.filament_type}
						weight_start={item.weight_start}
						weight_remaining={item.weight_remaining}
					/>
				)}
				keyExtractor={(item) => item.short_description}
			/>
			<AddButton />
		</SafeAreaView>
	);
}
