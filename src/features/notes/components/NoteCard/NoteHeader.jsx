const NoteHeader = (props) => {
	const { title, createdAt } = props;

	return (
		<div className="flex flex-col gap-1">
			<h1 className="font-bold text-xl">{title}</h1>
			<span className="text-zinc-400 font-semibold text-sm">{createdAt}</span>
		</div>
	);
};

export default NoteHeader;
