import Label from '../Input/Label';

const TextArea = (props) => {
	const { name, value, onChange = () => {} } = props;

	return (
		<div className="flex flex-col gap-1">
			<Label name={name}>Note</Label>
			<textarea
				name={name}
				id={name}
				value={value}
				onChange={onChange}
				className="rounded-md w-full h-52 p-3 border border-zinc-800"
			></textarea>
		</div>
	);
};

export default TextArea;
