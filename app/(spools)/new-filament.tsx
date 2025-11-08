import WeightField from '@/components/weight-field';
import { router, useNavigation } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NewFilament = () => {
	const navigation = useNavigation();
	const [notes, setNotes] = useState('');

	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<Button title='Cancel' color='red' onPress={() => router.back()} />
			),
			headerRight: () => (
				<Button
					title='Add'
					onPress={() => {
						console.log('TODO: add new filament');
						router.dismiss();
					}}
				/>
			),
		});
	}, [navigation]);

	return (
		<SafeAreaView className='p-4'>
			<View className='h-13 p-4 flex flex-row items-center justify-start gap-x-4 bg-white rounded-lg'>
				<Text className='w-[30%] text-pretty'>Description</Text>
				<TextInput
					className='w-[70%]'
					placeholder='PolyTerra Matte Orange'
					autoCapitalize='sentences'
					keyboardType='default'
				/>
			</View>
			<Text className='text-gray-400 mt-6 mb-1 ml-4'>INVENTORY</Text>
			<WeightField label='Starting' unit='Kg' />
			<WeightField label='Current' unit='Kg' />
			<WeightField label='Backup spools' />
			<Text className='text-gray-400 mt-6 mb-1 ml-4'>NOTES</Text>
			<TextInput
				value={notes}
				onChangeText={setNotes}
				scrollEnabled
				multiline
				numberOfLines={4}
				maxLength={100}
				autoCapitalize='sentences'
				placeholder='For quick prototypes...'
				className='bg-white text-black h-24 p-4 rounded-lg'
			/>
		</SafeAreaView>
	);
};

export default NewFilament;
