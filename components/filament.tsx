import { Spool } from '@/lib/interfaces';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const getBgColor = (filamentColor: string) => {
	return `bg-[${filamentColor}]`;
};

const Filament = (spool: Spool) => {
	return (
		<TouchableOpacity
			className='flex flex-row items-center px-8 py-4 gap-4'
			onPress={() => {}}
		>
			<View
				className={`${getBgColor(spool.filament_color)} rounded-full w-16 h-16`}
			></View>
			<View className='flex flex-col'>
				<Text className='text-xl'>{spool.short_description}</Text>
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
