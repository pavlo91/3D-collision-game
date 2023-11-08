import { Debug } from '@react-three/cannon'
import Floor from './Floor'
import Obstacles from './Obstacles'
import Player from './Player'
import { useControls } from 'leva'

function ToggleDebug({ children }) {
  const debugRendererVisible = useControls('Debug Renderer', { visible: false })

  return <>{debugRendererVisible.visible ? <Debug>{children}</Debug> : <>{children}</>}</>
}

export default function Game() {
  return (
    <>
      <ToggleDebug>
        <Floor />
        <Obstacles />
        <Player position={[0, 1, 0]} />
      </ToggleDebug>
    </>
  )
}
