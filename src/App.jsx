import { useState } from 'react';
import Button from './components/ui/Button';
import NoteForm from './features/notes/components/NoteForm';

const App = () => {
	const [showForm, setShowForm] = useState(false);

	const handleShowForm = () => {
		setShowForm(!showForm);
	};

	const handleCloseForm = () => {
		setShowForm(false);
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
						className="px-5 py-2 rounded-md bg-zinc-900 text-white cursor-pointer font-semibold"
						onClick={handleShowForm}
					>
						Create Note
					</Button>
				</div>
			</div>
		</>
	);
};

export default App;
