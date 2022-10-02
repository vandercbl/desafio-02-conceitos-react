interface HeaderContentProps {
	title: string
}

export default function HeaderContent({title}: HeaderContentProps) {
	return(
		<header>
			<span className="category">Categoria:<span> {title}</span></span>
		</header>
	)
}