import { useRef , useEffect} from "react"; // OOM 요소에 접근하기 위해 사용되는 React Hook

export function useOnDraw(onDraw){
    const canvasRef = useRef(null); // 리렌더 없이 그릴 수 있게 ref 객체 생성
    // 그릴 때 끊기지 않기 위한 hook
    const prevPointRef = useRef(null);
    const isDrawingRef = useRef(false); // onDraw를 control 하는 function, 마우스 down 시 false로 바꿈

    const mouseMoveListenerRef = useRef(null);
    const mouseUpListenerRef = useRef(null);
    //const mouseDownListenerRef = useRef(null);

    

    // 리스너 등록해준 거 해제 하기 위함 
    useEffect(() => {
        // 마우스 움직일 떄 
        function initMouseMoveListener(){
            const mouseMoveListener = (e) => {
                if(isDrawingRef.current){
                    // 마우스 클릭시 true 됨 
                    // 마우스 클릭했을 때만 그리게 됨 
                    const point = computePointInCanvas(e.clientX, e.clientY); // canvas에 그릴 point 즉 canvas의 맨 왼쪽,위쪽이 0,0이다. 
                    const ctx = canvasRef.current.getContext('2d'); // 그림판 context 설정
            
                    if(onDraw) onDraw(ctx, point, prevPointRef.current); // canvas 크기에 맞춰서 그릴 수 있게 함, 그릴 때 이어지게 해줌
                    prevPointRef.current = point;

                    console.log(point);
                }
            
            }
            mouseMoveListenerRef.current = mouseMoveListener; // ref 객체에 리스너 연결 
            window.addEventListener("mousemove", mouseMoveListener); // 리스너 등록 
        }

        // 마우스 때면 ->  그리는 거 멈춰 
        function initMouseUpListener(){
            const listener = () => {
                isDrawingRef.current = false;
                prevPointRef.current = null; // 이게 있어야 끊어져서 그릴 수 있음 
            }

            mouseUpListenerRef.current = listener;
            // 마우스를 땠으면 canvas 상이 아니라 window 차원에서 움직여야 함
            window.addEventListener("mouseup", listener);
        }

        // canvas에 맞춰 point 지정
        function computePointInCanvas(clientX, clientY){ // 전체 마우스 좌표
            if(canvasRef.current){ // 현재 canvasRef가 있으면
                const boundingRect = canvasRef.current.getBoundingClientRect(); // canvas 사각형 크기 얻고
                return {
                    x : clientX - boundingRect.left, // 즉 사각형 안에만 그릴 수 있게 함 
                    y : clientY - boundingRect.top
                }
            }
            else{
                return null;
            }
        
        }

        // 연결 끊어주는 것 
        function cleanup(){
            if(mouseMoveListenerRef.current){ // 이 ref가 window에 rapping되어 있으면 제거해주자
                window.removeEventListener("mousemove", mouseMoveListenerRef.current); // 리스너 해제 
            }
            if(mouseUpListenerRef.current){
                window.removeEventListener("mouseup", mouseUpListenerRef.current); // 리스너 해제
            }
        }

        initMouseMoveListener();
        initMouseUpListener();
        
        // mount 시 실행
        return () => {
            //unmount 시 실행 
            cleanup();
        }
    }, [onDraw]);


    function setCanvasRef(ref){ // canvas ref를 바꿔주는 부분 
        canvasRef.current = ref;
    } // 각종 설정들 담는 객체라 생각하셈!! 

    //callback 함수 
    function onMouseDown(){
        isDrawingRef.current = true;
    }

    return {
        setCanvasRef,
        onMouseDown
    };
}