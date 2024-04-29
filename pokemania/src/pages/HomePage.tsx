import { Link } from "react-router-dom";

export const HomePage = () => {
	return (
	<section className='bg-bgGray p-8 h-full'>
		<article className="flex flex-col lg:flex-row justify-between">
			<aside className="flex flex-col justify-between lg:gap-0 gap-4">
				<div className="flex flex-col justify-start md:justify-center">
					<h1 className="sm:text-4xl text-2xl text-pretty">Pokemon Tic Tac Toe</h1>
					<span className="sm:text-2xl text-xl font-pokedex">Completa la pokedex</span>
				</div>
				<div className="flex flex-col gap-4 md:items-center lg:items-start">
					<Link to={'local'} 
						className="btn w-full md:w-3/4 rounded-md cursor-pointer">
						Generar Juego
					</Link>

					<Link to={'pokedex'} 
						className="flex w-fit items-center gap-2 group">
						<img src="images/pokdex.png" alt="pokedex" 
							className="sm:w-8 w-6 transition-all group-hover:rotate-[25deg]"/>
						<span className="text-lg">Ver pokedex</span>
					</Link>
				</div>
			</aside>

			<div className="sm:py-12 py-6">
				<img src="images/trainer.png" alt="pokemon trainer"/>
			</div>
		</article>
	</section>
	);
};