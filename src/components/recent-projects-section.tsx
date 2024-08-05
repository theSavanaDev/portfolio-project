/* eslint-disable @next/next/no-img-element */
"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/lib/data";

import { PinContainer } from "@/components/ui/pin-container";

const RecentProjectsSection = () => {
	return (
		<section id="projects" className="py-20">
			<h1 className="heading">
				A small selection of <span className="text-purple">recent projects</span>
			</h1>

			<div className="mt-10 flex flex-wrap items-center justify-center gap-16 p-4">
				{projects.map((item) => (
					<div className="flex h-[25rem] w-[80vw] items-center justify-center sm:w-96 lg:min-h-[32.5rem]" key={item.id}>
						<PinContainer title="/www.s3interdev.com" href="https://twitter.com/theSavanahDev">
							<div className="relative mb-10 flex h-[20vh] w-[80vw] items-center justify-center overflow-hidden sm:w-96 lg:h-[30vh]">
								<div
									className="relative h-full w-full overflow-hidden lg:rounded-3xl"
									style={{ backgroundColor: "#13162D" }}
								>
									<img src="/bg.png" alt="bgimg" />
								</div>
								<img src={item.img} alt="cover" className="absolute bottom-0 z-10" />
							</div>

							<h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">{item.title}</h1>

							<p
								className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal"
								style={{
									color: "#BEC1DD",
									margin: "1vh 0",
								}}
							>
								{item.des}
							</p>

							<div className="mb-3 mt-7 flex items-center justify-between">
								<div className="flex items-center">
									{item.iconLists.map((icon, index) => (
										<div
											key={index}
											className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
											style={{
												transform: `translateX(-${5 * index + 2}px)`,
											}}
										>
											<img src={icon} alt="icon5" className="p-2" />
										</div>
									))}
								</div>

								<div className="flex items-center justify-center">
									<p className="flex text-sm text-purple md:text-xs lg:text-xl">Check Live Site</p>
									<FaLocationArrow className="ms-3" color="#CBACF9" />
								</div>
							</div>
						</PinContainer>
					</div>
				))}
			</div>
		</section>
	);
};

export default RecentProjectsSection;
