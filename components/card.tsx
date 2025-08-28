export default function Card({ text }: { text: string }) {
	return (
		<div className="bg-gray-200 w-sm pb-50 mt-10  p-3">
			<p>{text}</p>
		</div>
	)
}