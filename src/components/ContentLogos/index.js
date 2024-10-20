import { ContentLogos } from "./styles";

export default function Component({imagens}) {
    return (
        <ContentLogos>
            {
                imagens.map((imagem, index) => (<img key={index} src={imagem.src} width={216} alt="Minha imagem" />))
            }
        </ContentLogos>
    )
}