export default function Card({ text, detail }: { text: string, detail: string }) {
	return (
		<div className="bg-gray-200 w-sm pb-50 mt-10  p-3">
			<p>{text}</p>
			<p>{detail}</p>
		</div>
	)
}