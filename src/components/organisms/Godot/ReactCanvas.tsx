import { FunctionComponent, useEffect, useRef, useState } from 'react';

import { PackLoadingAction, useLoading } from './AsyncLoading';
import { Canvas } from './godot.styles';

export type ReactEngineProps = {
  engine: Engine;
  execname: string;
  width?: number;
  height?: number;
  params?: any;
  resize?: boolean;
};

function toFailure(err: Error): PackLoadingAction {
  const msg = err.message;
  console.error(msg);
  return { msg, mode: 'notice', initialized: true };
}

const ReactCanvas: FunctionComponent<ReactEngineProps> = ({ engine, execname, width = 480, height = 300 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [instance, setInstance] = useState<Engine>(null);
  const [loadingState, changeLoadingState] = useLoading();

  useEffect(() => {
    if (engine.isWebGLAvailable()) {
      changeLoadingState({ mode: 'indeterminate' });
      // eslint-disable-next-line new-cap
      setInstance(new engine());
    } else {
      changeLoadingState(toFailure(new Error('WebGL not available')));
    }
  }, [changeLoadingState, engine]);

  const pck = `${execname}.pck`;

  useEffect(() => {
    const customProgress = (current: number, total: number): void => {
      if (total > 0) {
        changeLoadingState({ mode: 'progress', percent: current / total });
      } else {
        changeLoadingState({ mode: 'indeterminate' });
      }
    };
    if (instance) {
      instance
        .startGame({
          executable: execname,
          onProgress: customProgress,
          canvas: canvasRef,
          canvasResizePolicy: 0,
        })
        .then(() => {
          changeLoadingState({ mode: 'hidden', initialized: true });
        })
        .catch((err: Error) => changeLoadingState(toFailure(err)));
    }
  }, [instance, pck, changeLoadingState, execname]);

  return (
    <Canvas ref={canvasRef} id="canvas" style={{ display: loadingState.initializing ? 'hidden' : 'block' }}>
      HTML5 canvas appears to be unsupported in the current browser.
      <br />
      Please try updating or use a different browser.
    </Canvas>
  );
};

export default ReactCanvas;
