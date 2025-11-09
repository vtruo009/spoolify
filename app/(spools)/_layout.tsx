import { Stack } from 'expo-router';
import React from 'react';

const SpoolsLayout = () => {
	return (
		<Stack>
			<Stack.Screen
				name='new-filament'
				options={{
					title: 'New Filament',
				}}
			/>
		</Stack>
	);
};

export default SpoolsLayout;
