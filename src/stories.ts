export interface Story {
  id: string;
  title: string;
}

export function storyLine(story: Story): string {
  return `${story.id} ${story.title}`;
}
