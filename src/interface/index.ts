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
