import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
	return (
		<Card>
			<div className="about">
				<h1>Sobre esse projeto</h1>
				<p>Este é um App React para avaliação de produtos ou serviços.</p>
				<p>
					<Link href="/">Voltar para a Home Page</Link>
				</p>
			</div>
		</Card>
	);
}

export default AboutPage;
