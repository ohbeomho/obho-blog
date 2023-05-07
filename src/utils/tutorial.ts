import { Blog } from "./blog"

const JS_TUTORIAL_COUNT = 1
const TS_TUTORIAL_COUNT = 1

export type TutorialKind = "js" | "ts"
export type Tutorial = Blog & {
  attributes: {
    description: string
  }
}

export async function getTutorial(kind: TutorialKind, id: number): Promise<Tutorial> {
  const { attributes, default: content } = await import(`../blogs/${kind}-tutorial/${id}.md`)
  return { attributes, content, id }
}

export async function getTutorials(kind: TutorialKind): Promise<Tutorial[]> {
  const count = kind === "js" ? JS_TUTORIAL_COUNT : TS_TUTORIAL_COUNT
  const promises = []

  for (let i = 0; i < count; i++) {
    promises.push(getTutorial(kind, i))
  }

  const tutorials = await Promise.all(promises)
  return tutorials
}
