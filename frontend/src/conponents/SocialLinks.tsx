import {
  instagram,
  facebook,
  whatsApp_logo,
  linkedin,
  twitter,
  githup,
} from "../assets/assets";
interface Props {
  githup?: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  whatsApp?: string;
  instagram?: string;
}

function SocialLinks( props:{ links: Props} ) {
  
return (
    <div className="flex items-center gap-1">
      {
        props.links?.githup && (
          <a href={props.links?.githup} target="blank" className="cursor-pointer">
        <img className="size-7 md:size-6 md:hover:scale-110 hover:opacity-90 trans bg-w" src={githup} alt="" />
      </a>
        )
      } 
      {
        props.links?.linkedin && (
          <a href={props.links?.linkedin} target="blank" className="cursor-pointer dark:bg-gray-900 rounded-ful">
          <img className="size-7 md:size-6 md:hover:scale-110 hover:opacity-90 trans" src={linkedin} alt="" />
        </a>
        )
      }
     {
      props.links?.facebook && (
        <a href={props.links?.facebook} target="blank" className="cursor-pointer dark:bg-gray-900">
        <img className="size-7 md:size-6 md:hover:scale-110 hover:opacity-90  trans" src={facebook} alt="" />
      </a>
      )
     }
      {
        props.links?.instagram && (
          <a href={props.links?.instagram} target="blank" className="cursor-pointer dark:bg-gray-900">
        <img className="size-7 md:size-6 md:hover:scale-110 hover:opacity-90 trans" src={instagram} alt="" />
      </a>
        )
      }
      {
        props.links?.whatsApp && (
          <a href={props.links?.whatsApp} target="blank" className="cursor-pointer dark:bg-gray-900">
        <img className="size-7 md:size-6 md:hover:scale-110 hover:opacity-90 trans" src={whatsApp_logo} alt="" />
      </a>
        )
      }
     {
      props.links?.twitter && (
        <a href={props.links?.twitter} target="blank" className="cursor-pointer dark:bg-gray-900">
        <img className="size-7 md:size-6 md:hover:scale-110 hover:opacity-90 trans" src={twitter} alt="" />
      </a>
      )
     }
    </div>
  );
}

export default SocialLinks;
