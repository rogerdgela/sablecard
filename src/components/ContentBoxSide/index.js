import { ContentBoxSide, ContentDescription, ContentTitleLeft } from "./styles";

export default function Component(props) {
    return (
        <ContentBoxSide style={{borderTopColor: props.cor}}>
            <ContentTitleLeft style={{color: props.cor}}>
                {props.title}
            </ContentTitleLeft>
            <ContentDescription style={{color: props.cor}}>
                {props.description}
            </ContentDescription>
        </ContentBoxSide>
    )
}