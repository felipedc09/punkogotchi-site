import { FunctionComponent, useEffect, useRef, useState } from 'react';
import AsyncLoading from './AsyncLoading';
import { CanvasContainer } from './godot.styles';
import ReactCanvas from './ReactCanvas';

const useScript = (url:string, onLoad: ()=>void) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    script.onload = onLoad;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [onLoad, url]);
};

export type ReactGodotProps = {
  execname: string;
  resize?: boolean;
  width?: number;
  height?: number;
  params?: any;
};

const ReactGodot: FunctionComponent<ReactGodotProps> = (props) => {
  const { execname, resize = false, width, height, params } = props;

  const outerRef = useRef<HTMLDivElement>(null);
  const [engine, setEngine] = useState<Engine>(null);
  const [dimensions, setDimensions] = useState([width, height]);

  const script = `${execname}.js`;
  useScript(script, () => {
    const scope = window as any;
    setEngine(() => scope.Engine);
  });

  useEffect(() => {
    if (resize && outerRef.current) {
      setDimensions([outerRef.current.clientWidth, outerRef.current.clientHeight]);
    }
  }, [resize]);
  return (
    <CanvasContainer ref={outerRef}>
      <AsyncLoading>
        {engine && (
          <ReactCanvas
            engine={engine}
            execname={execname}
            width={dimensions[0]}
            height={dimensions[1]}
            params={params}
          />
        )}
      </AsyncLoading>
    </CanvasContainer>
  );
};

export default ReactGodot;
