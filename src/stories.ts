export interface Story {
  id: string;
  title: string;
}

export function storyLine(story: Story): string {
  return `${story.id} ${story.title}`;
}

function idNumber(id: string): number {
  return Number(id.slice(id.lastIndexOf("-") + 1));
}

export function sortStories(stories: Story[]): Story[] {
  return [...stories].sort((a, b) => idNumber(a.id) - idNumber(b.id));
}

export function countStories(stories: Story[]): number {
  return stories.length;
}

export function storyIds(stories: Story[]): string[] {
  return stories.map((story) => story.id);
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
