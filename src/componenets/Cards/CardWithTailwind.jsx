import AntSwitchDarkMode from "../Buttons/AntSwitchDarkMode"
import CopyClipBoardButton from "../Buttons/CopyClipBoardButton"
import { Stack } from "@mui/material"
const CardWithTailwind = () => {
  return (
      <Stack
        sx={{
          p : '1rem',
          color: 'white',
          zIndex: 1,
          opacity: 0.9,
          borderRadius: '1rem', // rounded-xl translates to 1rem border-radius in tailwindcss
          inset: '0.5rem', // assuming 0.5 in tailwind translates to 0.5rem
          backgroundColor: '#323132',
        }}
      >
        <Stack direction={'row'} justifyContent={'space-between'}>
          <AntSwitchDarkMode />
          <CopyClipBoardButton />
        </Stack>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          alias vero itaque, provident inventore ex enim deleniti pariatur tempora
          nulla atque vel reiciendis qui omnis voluptates, veniam excepturi,
          officia dicta sequi maiores voluptatum! Praesentium quod inventore,
          quasi et excepturi alias, porro doloremque exercitationem ipsum iure sit
          maxime ullam autem nisi ea, soluta eveniet amet velit voluptates
          accusantium minus quaerat qui. Temporibus dignissimos facilis quia illo
          ipsam vero amet, maxime nostrum, perspiciatis esse cumque voluptate?
          Architecto libero suscipit laborum, quidem obcaecati numquam impedit!
          Error sed voluptas illo in doloremque, ipsa eveniet dolore alias
          consequatur molestias nobis porro reiciendis tempore exercitationem
          ipsam!
        </p>
      </Stack>
  )
}
export default CardWithTailwind