export interface IContent{
    _id: string; 
    sectionTitle: string;
    description: string;
    features: string[];
    createdAt?: string;
    updatedAt?: string;

}

export type TContent = Partial<IContent>


export interface IContactFormData {
    name: string;
    workshopName: string;
    phone: string;
    email: string;
    postalCode: string;
    agreedToPrivacyPolicy: boolean;
  }
  
  export type TContactFormData = Partial<IContactFormData>

  export interface IBlogPost {
    _id: string;
    title: string;
    description: string;
    date: string;
    image: string;
    fullContent: string;
  }
  export type TBlogPost = Partial<IBlogPost>


  // src/types/aiRequest.ts (oder wo du deine Typen speicherst)

export interface IAiChat {
    _id: string;        
    prompt: string;     
    response?: string;  
    createdAt: string;  
  }

  export type TAiChat = Partial<IAiChat>
