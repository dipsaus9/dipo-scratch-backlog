export interface Story {
  id: string;
  title: string;
}

export function storyLine(story: Story): string {
  return `${story.id} ${story.title}`;
}

function csvField(value: string): string {
  if (/[",\r\n]/.test(value)) {
    return `"${value.replaceAll('"', '""')}"`;
  }
  return value;
}

export function exportCsv(stories: Story[]): string {
  const rows = stories.map((story) => `${csvField(story.id)},${csvField(story.title)}`);
  return ["id,title", ...rows].join("\n") + "\n";
}
