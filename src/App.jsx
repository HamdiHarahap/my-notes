import { useState } from 'react';
import Button from './components/ui/Button';
import NoteForm from './features/notes/components/NoteForm';
import NoteList from './features/notes/components/NoteList';

const App = () => {
	const [showForm, setShowForm] = useState(false);
	const [openStatus, setOpenStatus] = useState('active');

	const handleShowForm = () => {
		setShowForm(!showForm);
	};

	const handleCloseForm = () => {
		setShowForm(false);
	};

	const handleOpenStatus = () => {
		const newStatus = openStatus === 'active' ? 'archived' : 'active';
		setOpenStatus(newStatus);
		localStorage.setItem('status', JSON.stringify(newStatus));
	};

	return (
		<>
			{showForm && (
				<div className="fixed inset-0 z-50 flex items-center justify-center">
					<div
						className="absolute inset-0 bg-black/50"
						onClick={handleCloseForm}
					></div>

					<div className="relative z-10">
						<NoteForm onClose={handleCloseForm} />
					</div>
				</div>
			)}

			<div className="w-full">
				<nav className="bg-zinc-900 py-6 px-44">
					<h1 className="font-bold text-2xl text-white">MyNotes</h1>
				</nav>
				<div className="px-44 py-8">
					<Button
						className="px-5 py-2 rounded-md bg-zinc-900 text-white cursor-pointer font-semibold hover:bg-zinc-800 transition"
						onClick={handleShowForm}
					>
						Create Note
					</Button>
				</div>
			</div>

			<div className="flex gap-6 px-44 mb-10">
				<Button
					disabled={openStatus === 'active'}
					className={`font-semibold rounded-md px-8 py-2 cursor-pointer ${
						openStatus == 'active'
							? 'bg-zinc-900 text-white'
							: 'bg-none text-black'
					}`}
					onClick={handleOpenStatus}
				>
					Active Notes
				</Button>
				<Button
					disabled={openStatus === 'archived'}
					className={`font-semibold rounded-md px-8 py-2 cursor-pointer ${
						openStatus == 'archived'
							? 'bg-zinc-900 text-white'
							: 'bg-none text-black'
					}`}
					onClick={handleOpenStatus}
				>
					Archive Notes
				</Button>
			</div>

			<div className="px-44">
				{openStatus === 'active' ? (
					<NoteList isArchived={false} status={openStatus} />
				) : (
					<NoteList isArchived={true} status={openStatus} />
				)}
			</div>
		</>
	);
};

export default App;
