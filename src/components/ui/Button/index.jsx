const Button = (props) => {
	const { children, onClick = () => {}, className, disabled = false } = props;

	return (
		<button onClick={onClick} className={className} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
