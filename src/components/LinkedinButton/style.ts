import styled from "styled-components"
import { ReactComponent as Icon } from "../../assets/linkedin-icon.svg"

export const LinkedinIcon = styled(Icon)<{color: string}>`
    fill: ${props => props.color};
    padding: 2px;
    border: 2px solid ${props => props.color};
    border-radius: 5px;
`