import NoteActions from './NoteActions';
import NoteBody from './NoteBody';
import NoteHeader from './NoteHeader';

const NoteCard = (props) => {
	const { title, createdAt, body, handleDelete, handleArchived, status } =
		props;

	return (
		<div className="border-2 p-6 rounded-lg border-zinc-900 flex flex-col gap-5 w-full">
			<NoteHeader title={title} createdAt={createdAt} />
			<NoteBody body={body} />
			<NoteActions
				status={status}
				handleDelete={handleDelete}
				handleArchived={handleArchived}
			/>
		</div>
	);
};

export default NoteCard;
