export interface ImageSuggestion {
  id: number;
  title: string;
  originalDescription: string;
  defaultPrompt: string;
  imageName: string;
  type: 'concept' | 'diagram' | 'comparative' | 'simulator' | 'banner';
  aspectRatio: '1:1' | '4:3' | '16:9' | '3:4';
}

export interface ArticleSection {
  id: string;
  title: string;
  content: string;
  suggestionId?: number; // 关联的配图建议ID
}
