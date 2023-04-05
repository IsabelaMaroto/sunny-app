import HeaderImg from '../../images/mobile/image-header.jpg';
import HeaderImgDesktop from '../../images/desktop/image-header.jpg';
import styled from 'styled-components';

const ContainerHome1= styled.div`
    .mobile{
        display: flex;
        width: 100%;
        height: 500px;
    }
    .desktop{
        display: none;
    }
    .title{
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -20%);
        color: hsl(0, 0%, 100%);
    }
    @media (min-width: 500px){
        .mobile{
        display: none;
    }
    .desktop{
        display: flex;
        width: 100%;
    }
    }
`
export function HomeOne(){
    return(
        <ContainerHome1>  
            <img src={HeaderImg} alt='orange' className='mobile'/>
            <img src={HeaderImgDesktop} alt='orange' className='desktop'/>
            <h1 className='title'>We are creatives</h1>
        </ContainerHome1>
    )
}