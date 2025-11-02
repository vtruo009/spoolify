import InputField from '@/components/input-field';
import { router, useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NewFilament = () => {
	const navigation = useNavigation();

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
		<SafeAreaView>
			<InputField />
		</SafeAreaView>
	);
};

export default NewFilament;
