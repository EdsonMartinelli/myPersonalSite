import styled from "styled-components"

import { ReactComponent as Icon } from "../../assets/github-icon.svg"

export const GithubIcon = styled(Icon)<{color: string}>`
    fill: ${props => props.color};
    padding: 4px;
`