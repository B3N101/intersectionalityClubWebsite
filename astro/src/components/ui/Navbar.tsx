import "@fontsource/courgette";

export default function Navbar() {
	return (
		<nav className="mb-6">
			<h1 className="text-center font-courgette text-3xl">
				Intersectionality Club
			</h1>
			<ul className="flex justify-center">
				<li className="mx-2">
					<a href="/">Home</a>
				</li>
				<li className="mx-2">
					<a href="/works">
						Works
					</a>
				</li>
				<li className="mx-2">
					<a href="/resources">
						Resources
					</a>
				</li>
				<li className="mx-2">
					<a href="/get-involved">
						Get involved
					</a>
				</li>
			</ul>
			{/* Vertical bar */}
			<div className="border border-black h-0.5 w-full my-2"/>

		</nav>
	);
}
