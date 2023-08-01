import { ScaleLoader } from 'react-spinners';
import { memo } from 'react';
const LoadingScreen: React.FC= () => {
  return (
    <div className="loading_screen">
      <ScaleLoader
        color="#36d7b7"
        height={70}
        margin={5}
        width={20}
      />
    </div>
  )
}

export default memo(LoadingScreen)