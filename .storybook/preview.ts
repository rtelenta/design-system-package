import showCodeByDefault from './showCodeByDefault'
import './../src/storybook.css'

export const parameters = {
  previewTabs: { canvas: { hidden: true } },
  docsOnly: true,
}

showCodeByDefault()
