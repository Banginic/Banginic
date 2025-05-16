import {
  instagram,
  facebook,
  whatsApp_logo,
  linkedin,
  twitter,
  githup,
} from "../assets/assets";
interface Props {
  githup_url?: string;
  facebook_url?: string;
  linkedin_url?: string;
  twitter_url?: string;
  whatsApp_url?: string;
  instagram_url?: string;
}

function SocialLinks( props:{ links: Props} ) {
  
return (
    <div className="flex items-center gap-1">
      {
        props.links?.githup_url && (
          <a href={props.links?.githup_url} target="blank" className="cursor-pointer">
        <img className="size-7 md:size-6 md:hover:scale-110 hover:opacity-90 trans bg-w" src={githup} alt="" />
      </a>
        )
      } 
      {
        props.links?.linkedin_url && (
          <a href={props.links?.linkedin_url} target="blank" className="cursor-pointer dark:bg-gray-900 rounded-ful">
          <img className="size-7 md:size-6 md:hover:scale-110 hover:opacity-90 trans" src={linkedin} alt="" />
        </a>
        )
      }
     {
      props.links?.facebook_url && (
        <a href={props.links?.facebook_url} target="blank" className="cursor-pointer dark:bg-gray-900">
        <img className="size-7 md:size-6 md:hover:scale-110 hover:opacity-90  trans" src={facebook} alt="" />
      </a>
      )
     }
      {
        props.links?.instagram_url && (
          <a href={props.links?.instagram_url} target="blank" className="cursor-pointer dark:bg-gray-900">
        <img className="size-7 md:size-6 md:hover:scale-110 hover:opacity-90 trans" src={instagram} alt="" />
      </a>
        )
      }
      {
        props.links?.whatsApp_url && (
          <a href={props.links?.whatsApp_url} target="blank" className="cursor-pointer dark:bg-gray-900">
        <img className="size-7 md:size-6 md:hover:scale-110 hover:opacity-90 trans" src={whatsApp_logo} alt="" />
      </a>
        )
      }
     {
      props.links?.twitter_url && (
        <a href={props.links?.twitter_url} target="blank" className="cursor-pointer dark:bg-gray-900">
        <img className="size-7 md:size-6 md:hover:scale-110 hover:opacity-90 trans" src={twitter} alt="" />
      </a>
      )
     }
    </div>
  );
}

export default SocialLinks;
