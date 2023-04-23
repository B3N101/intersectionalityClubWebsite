import "@fontsource/courgette";

export default function Navbar() {
	return (
		<nav>
			<h1 className="text-center  font-courgette text-2xl">
				Intersectionality Club
			</h1>
			<ul className="flex justify-center font-inter">
				<li className="mx-2">
					<a href="/blog">Home</a>
				</li>
				<li className="mx-2">
					<a href="/about">
						<a>About Us</a>
					</a>
				</li>
				<li className="mx-2">
					<a href="/events">
						<a>Events</a>
					</a>
				</li>
				<li className="mx-2">
					<a href="/resources">
						<a>Resources</a>
					</a>
				</li>
			</ul>
		</nav>
	);
}