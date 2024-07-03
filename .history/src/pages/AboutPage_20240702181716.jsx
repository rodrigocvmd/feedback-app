import Card from "../components/shared/Card";

function AboutPage() {
	return (
		<Card>
			<div className="about">
				<h1>Sobre esse projeto</h1>
				<p>Este é um App React para avaliação de produtos ou serviços.</p>
				<p>
					<a href="/">Voltar para a Home Page</a>
				</p>
			</div>
		</Card>
	);
}

export default AboutPage;
