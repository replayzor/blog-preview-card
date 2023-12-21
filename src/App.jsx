/*
- Font size (paragraph): 16px

- Weights: 600, 800
*/

function App() {
	return (
		<main className="bg-primary-yellow flex flex-col h-screen items-center justify-center font-figtree">
			<section className="w-[400px] shadow-black rounded-3xl bg-white">
				<div className="flex overflow-hidden items-center justify-center py-6">
					<img
						src="/images/illustration-article.svg"
						alt=""
						className="rounded-xl"
					/>
				</div>
				<article className="pl-8">
					<h5 className="bg-primary-yellow font-extrabold rounded-md max-w-min py-1 px-3 text-sm text-black">
						Learning
					</h5>
					<h6 className="my-4 text-sm">Published 21 Dec 2023</h6>
					<h1 className="text-black transition-all duration-200 hover:cursor-pointer hover:text-primary-yellow font-extrabold text-xl pb-4">
						HTML & CSS foundations
					</h1>
					<p className="text-neutral-grey font-thin text-[16px] pb-6">
						These languages are the backbone of every website, defining
						structure, content, and presentation.
					</p>
					<div className="flex gap-4 items-center pb-8">
						<img src="/images/image-avatar.webp" alt="" className="w-10 h-10" />
						<h5 className="font-extrabold">Greg Hooper</h5>
					</div>
				</article>
			</section>
			<div className="attribution mt-10">
				Challenge by{" "}
				<a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer">
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a
					href="https://github.com/replayzor/"
					target="_blank"
					rel="noreferrer"
				>
					Ionut Oltean
				</a>
				.
			</div>
		</main>
	);
}

export default App;
