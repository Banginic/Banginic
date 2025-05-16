

 
 export interface ProjectDetails{
  id: string;
    title:string;
    name_of_project:string;
    brief_description: string;
    project_url: string;
    project_details:{
     category: string;
     client: string;
     start_date: string;
     designer: string
    }
    project_images:string[];
    project_description:string;
    the_story: string;
    our_approach: string
}

export interface WorkContextType {
  showDetails: boolean;
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setRenderDetails: React.Dispatch<React.SetStateAction<boolean>>;
  renderDetails: boolean;
  handleRenderDetails: () => void
 }
 export interface AppContextType{
  showDetails: boolean;
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setRenderDetails: React.Dispatch<React.SetStateAction<boolean>>;
  renderDetails: boolean;
  handleRenderDetails: () => void,
  theme: "dark" | "light"
 }

