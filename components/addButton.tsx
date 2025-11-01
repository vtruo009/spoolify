import { Plus } from 'lucide-react-native';
import { Pressable } from 'react-native';

const AddButton = () => {
	return (
		<Pressable
			className='bg-primary rounded-full w-16 h-16 items-center justify-center self-end mr-8'
			onPress={() => {
				console.log('Add filament');
			}}
		>
			<Plus size={36} />
		</Pressable>
	);
};

export default AddButton;
