import Button from '../../../../components/ui/Button';

const NoteActions = (props) => {
	const { handleDelete, handleArchived, status } = props;

	return (
		<div className="flex justify-around">
			<Button
				className={` ${
					status == 'active'
						? 'bg-yellow-600 hover:bg-yellow-700'
						: 'bg-green-600 hover:bg-green-800'
				} py-2 rounded-md text-white font-semibold w-[45%] cursor-pointer transition`}
				onClick={handleArchived}
			>
				{status == 'active' ? 'archive' : 'unarchive'}
			</Button>
			<Button
				className="bg-red-600 py-2 rounded-md text-white font-semibold w-[45%] cursor-pointer hover:bg-red-700 transition"
				onClick={handleDelete}
			>
				Delete
			</Button>
		</div>
	);
};

export default NoteActions;
