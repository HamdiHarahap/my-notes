import { useState } from 'react';
import Button from '../../../../components/ui/Button';
import InputGroup from '../../../../components/ui/Input';
import TextArea from '../../../../components/ui/Textarea';

const NoteForm = (props) => {
	const { onClose } = props;
	const [note, setNote] = useState({
		title: '',
		body: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNote((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const notes = JSON.parse(localStorage.getItem('notes')) || [];

		const now = new Date();
		const formatted = now.toLocaleDateString('id-ID', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		});

		const newNote = {
			id: Date.now(),
			...note,
			created_at: formatted,
		};

		notes.push(newNote);
		localStorage.setItem('notes', JSON.stringify(notes));
		setNote({
			title: '',
			body: '',
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="fixed z-50 w-[30rem] top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-white rounded-lg px-6 pb-8 pt-6 shadow-lg flex flex-col gap-3"
		>
			<img
				src="/assets/close.svg"
				alt=""
				className="w-5 cursor-pointer ml-auto"
				onClick={onClose}
			/>
			<h2 className="text-2xl font-bold mb-2 text-center">New Note</h2>
			<InputGroup
				className="px-3 py-2 rounded-md w-full  border border-zinc-800"
				name="title"
				value={note.title}
				onChange={handleChange}
			/>
			<TextArea name="body" value={note.body} onChange={handleChange} />
			<Button className="bg-zinc-900 rounded-md text-white py-2 font-semibold mt-4 w-full">
				Create Note
			</Button>
		</form>
	);
};

export default NoteForm;
