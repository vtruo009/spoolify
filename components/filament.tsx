import { Spool } from '@/lib/mixins';
import { Circle } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

const Filament = (spool: Spool) => {
	return (
		<TouchableOpacity
			className='flex flex-row items-center px-8 py-4 gap-4'
			onPress={() => {
				console.log(`${spool.description} clicked.`);
			}}
		>
			<Circle size={64} fill={spool.filament_color} strokeWidth={0} />
			<View className='flex flex-col'>
				<Text className='text-xl'>{spool.description}</Text>
				<View className='flex'>
					<Text className='text-base text-gray-400'>
						Type: {spool.filament_type}
					</Text>
					<Text className='text-base text-gray-400'>
						Remaining: {spool.weight_remaining}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default Filament;
