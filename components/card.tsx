export default function Card({text} : {text : string}) {
	return(
		<div className="bg-gray-200 w-sm pb-50">
			<p>{text}</p>
		</div>
	)
}