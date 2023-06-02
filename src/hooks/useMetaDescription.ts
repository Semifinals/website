export default function useMetaDescription(text: string) {
  let description = ""

  if (text) {
    text = text.replaceAll("\n", " ")
    const cutoffText = text.slice(150)

    if (cutoffText.length > 0) {
      let i = 0

      while (i < 7) {
        if (cutoffText[i] === " ") break
        i++
      }

      description = text.slice(0, 150) + cutoffText.slice(0, i) + "..."
    }
  }

  return { description }
}
