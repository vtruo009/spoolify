import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

interface WeightFieldProps {
	label: string;
	unit?: string;
}

const WeightField = ({ label, unit }: WeightFieldProps) => {
	const [text, setText] = useState('1');

	return (
		<View className='h-13 p-4 mb-4 flex flex-row items-center justify-start gap-x-4 bg-white rounded-lg'>
			<Text className='w-[50%]'>{label}</Text>
			<View className='flex-1 flex-row justify-end gap-x-1'>
				<TextInput
					className='w-4'
					value={text}
					onChangeText={setText}
					keyboardType='number-pad'
					maxLength={2}
				/>
				<Text className='text-gray-400'>{unit}</Text>
			</View>
		</View>
	);
};

export default WeightField;
