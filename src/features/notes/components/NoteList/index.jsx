import { useEffect, useState } from 'react';
import NoteCard from '../NoteCard';

const NoteList = (props) => {
	const { isArchived, status } = props;
	const [notes, setNotes] = useState([]);
	const [refreshTrigger, setRefreshTrigger] = useState(false);

	useEffect(() => {
		const allNotes = JSON.parse(localStorage.getItem('notes')) || [];
		const filtered = isArchived
			? allNotes.filter((note) => note.is_archived === true)
			: allNotes.filter((note) => note.is_archived === false);
		setNotes(filtered);
	}, [isArchived, refreshTrigger]);

	const handleDelete = (id) => {
		const allNotes = JSON.parse(localStorage.getItem('notes')) || [];
		const updatedNotes = allNotes.filter((note) => note.id !== id);
		localStorage.setItem('notes', JSON.stringify(updatedNotes));
		setRefreshTrigger((prev) => !prev);
	};

	const handleArchived = (id) => {
		const allNotes = JSON.parse(localStorage.getItem('notes')) || [];
		const updatedStatus = allNotes.map((note) => {
			if (note.id === id) {
				return {
					...note,
					is_archived: !note.is_archived,
				};
			}
			return note;
		});

		localStorage.setItem('notes', JSON.stringify(updatedStatus));
		setRefreshTrigger((prev) => !prev);
	};

	return (
		<div className="grid grid-cols-3 gap-8 max-[900px]:grid-cols-2">
			{notes.map((note) => (
				<NoteCard
					status={status}
					handleDelete={() => handleDelete(note.id)}
					handleArchived={() => handleArchived(note.id)}
					key={note.id}
					title={note.title}
					body={note.body}
					createdAt={note.created_at}
				/>
			))}
		</div>
	);
};

export default NoteList;
