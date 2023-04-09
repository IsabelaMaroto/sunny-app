import { clients } from "./clients-list";
import styled from "styled-components";

const Container = styled.section`
   text-align: center;
   padding: 40px 30px;

   h3{
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 15px;
    padding: 40px 0;
    font-weight: 900;
    color: hsl(210, 4%, 67%);
   }

   img{
    border-radius: 50%;
    height: 80px;
    margin-bottom: 20px;
   }

   p{
    color: hsl(213, 9%, 39%);
   }
   h2{
    font-size: 18px;
    color: hsl(212, 27%, 19%);
    margin-bottom: 10px;
   }
   span{
    font-family: "Barlow", sans-serif;
    color: hsl(210, 4%, 67%);
    font-size: 15px;
   }
   .box-client{
    padding: 30px 0;
   }

   @media (min-width: 700px){
    .flex-change{
        display: flex;
        padding: 50px ;

        .box-client{
            padding: 0 60px ;
        }
    }
   }
`
export function Clients(){
    return(
        <Container>
        <h3>Client testimonials</h3>
        <div className="flex-change">
        {clients.map((client)=>(
            <div className="box-client">
                <img src={client.photo} alt="client"/>
                <p>{client.descripton}</p>
                <h2>{client.name}</h2>
                <span>{client.position}</span>
            </div>
        ))}
        </div>
        
        </Container>
    )
}