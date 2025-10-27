import { FilamentType, Spool } from '@/lib/interfaces';
import { FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TEST_SPOOLS: Spool[] = [
	{
		name: 'Polyterra Matte Orange',
		color: 'Orange',
		type: FilamentType.PLA,
		weight_start: 1,
		weight_remaining: 0.8,
	},
	{
		name: 'Polyterra Matte Black',
		color: 'Black',
		type: FilamentType.PLA,
		weight_start: 1,
		weight_remaining: 0.3,
	},
	{
		name: 'Bambu Lab PETG Translucent',
		color: 'Orange',
		type: FilamentType.PETG_TRANSLUCENT,
		weight_start: 1,
		weight_remaining: 0.9,
	},
];

export default function Index() {
	return (
		<SafeAreaView className='flex-1 bg-background'>
			<Text className='text-5xl text-left pl-5 pt-3'>My Filaments</Text>
			<FlatList
				data={TEST_SPOOLS}
				renderItem={({ item }) => <Text>{item.name}</Text>}
				keyExtractor={(item) => item.name}
			/>
		</SafeAreaView>
	);
}
