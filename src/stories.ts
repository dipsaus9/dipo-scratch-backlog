// Story helpers of the dipo scratch fixture.
export interface Story {
  id: string;
  title: string;
}

export function storyLine(story: Story): string {
  return `${story.id} ${story.title}`;
}

export function storyLabel(story: Story): string {
  return `${story.id}: ${story.title}`;
}

function idNumber(id: string): number {
  return Number(id.slice(id.lastIndexOf("-") + 1));
}

export function sortStories(stories: Story[]): Story[] {
  return [...stories].sort((a, b) => idNumber(a.id) - idNumber(b.id));
}

export function findStory(stories: Story[], id: string): Story | undefined {
  return stories.find((story) => story.id === id);
}

export function firstStory(stories: Story[]): Story | undefined {
  return stories[0];
}

export function lastStory(stories: Story[]): Story | undefined {
  return stories[stories.length - 1];
}

export function storiesWithTitle(stories: Story[], word: string): Story[] {
  return stories.filter((story) => story.title.includes(word));
}

export function countStories(stories: Story[]): number {
  return stories.length;
}

export function storyIds(stories: Story[]): string[] {
  return stories.map((story) => story.id);
}

export function storyTitles(stories: Story[]): string[] {
  return stories.map((story) => story.title);
}

function csvField(value: string): string {
  if (/[",\r\n]/.test(value)) {
    return `"${value.replaceAll('"', '""')}"`;
  }
  return value;
}

export function exportJson(stories: Story[]): string {
  return JSON.stringify(stories.map((story) => ({ id: story.id, title: story.title }))) + "\n";
}

export function exportCsv(stories: Story[]): string {
  const rows = stories.map((story) => `${csvField(story.id)},${csvField(story.title)}`);
  return ["id,title", ...rows].join("\n") + "\n";
}
