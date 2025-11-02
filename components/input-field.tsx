import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface InputFieldProps {
	label: string;
}

const InputField = ({ label }: InputFieldProps) => {
	return (
		<View className='p-4'>
			<Text>{label ?? 'Label'}</Text>
			<TextInput className='w-full h-8 border-gray-400 bg-white rounded-md' />
		</View>
	);
};

export default InputField;
