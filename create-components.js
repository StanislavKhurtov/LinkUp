import fs from 'node:fs'

import * as prettier from 'prettier'
export default function createComponents(name) {
  const capitalizedName = capitalizeFirstLetter(name)
  const dirPath = `./src/components/ui/${name}`
  const componentPath = `${dirPath}/${name}.tsx`
  const componentContent = `import s from './${name}.module.scss'
  export const ${capitalizedName} = () => {
  return
}
  `
  const sassPath = `${dirPath}/${name}.module.scss`
  const sassContent = ''
  const indexPath = `${dirPath}/index.ts`
  const indexContent = `export * from './${name}'`
  const storiesPath = `${dirPath}/${name}.stories.ts`
  const storiesContent = `import { Meta, StoryObj } from '@storybook/react'

import { ${capitalizedName} } from './${name}'

const meta = { 
  component: ${capitalizedName},
  tags: ["autodocs"],
  title: "Components/UI/${capitalizedName}"
} satisfies Meta<typeof ${capitalizedName}>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
`

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
  }
  fs.writeFileSync(componentPath, componentContent)
  fs.writeFileSync(sassPath, sassContent)
  fs.writeFileSync(indexPath, indexContent)
  fs.writeFileSync(storiesPath, storiesContent)
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const name = process.argv[2]

if (!name) {
  console.log('Please provide component name')
  process.exit(1)
}

async function updateMainIndex(name) {
  const mainIndexPath = './src/components/ui/index.ts'
  const mainIndexContent = fs.readFileSync(mainIndexPath, 'utf8')
  const mainIndexContentArray = mainIndexContent.split('\n')
  const importIndex = mainIndexContentArray.findIndex(line => line.includes('export * from'))

  const content = mainIndexContentArray
    .splice(importIndex, 0, `export * from './${name}'`)
    .join('\n')
  const formatted = await prettier.format(content, { filepath: mainIndexPath })

  fs.writeFileSync(mainIndexPath, formatted)
}

createComponents(name)
//void updateMainIndex(name)
