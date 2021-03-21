import { useCallback } from "react";

const DOT_KEY = 190,
    ZERO = 48,
    NINE = 57,
    NUMERIC_ZERO = 96,
    NUMERIC_NINE = 105,
    BACKSPACE_KEY = 8,
    DELETE_KEY = 46,
    HOME_KEY = 36,
    LEFT_KEY = 37,
    RIGHT_KEY = 39,
    END_KEY = 35;

/**
 * 숫자들 키인지 체크
 * @param keyCode
 * @returns {boolean}
 */
function isNumberKeyCode(keyCode) {
    return (ZERO <= keyCode && keyCode <= NINE) || (NUMERIC_ZERO <= keyCode && keyCode <= NUMERIC_NINE);
}

/**
 * 허용된 키인지 검사
 * @param keyCode
 * @returns {*|boolean}
 */
function isAllowKey(keyCode) {
    return (
        isNumberKeyCode(keyCode) ||
        keyCode == BACKSPACE_KEY ||
        keyCode == RIGHT_KEY ||
        keyCode == LEFT_KEY ||
        keyCode == DELETE_KEY ||
        keyCode == END_KEY ||
        keyCode == DOT_KEY ||
        keyCode == HOME_KEY
    );
}

export const KeyLimit = (cipher = 3, max = 99999999, min = 0.001) => {
    /**
    키 업하면서 허용되지 않은 문자들은 아예 지움
    밑의 keyDown 로직에서 간혹 한글이 밀리면서 적히던 경우가 있어서 다음의 처리가 들어갔었다.
     */
    const keyUp = useCallback((e) => {
        const keyCode = e.keyCode;
        const str = e.target.value;
        if (!isAllowKey(keyCode)) {
            e.target.value = str.replace(/[^a-z0-9.]/gi, "");
        }
    }, []);
    /**
     * 키 다운되면서 허용되지 않는 키들은 리밋제한
     * @param e
     * @returns {boolean}
     */
    const keyDown = useCallback((e) => {
        const keyCode = e.keyCode;
        const str = e.target.value;
        // dot 은 한번만 입력되게
        if (str.indexOf(".") > -1 && keyCode == DOT_KEY) {
            e.preventDefault();
            return false;
        }
        if (!isAllowKey(keyCode)) {
            e.preventDefault();
            return false;
        }
        // 숫자 키 입력이면서
        if (isNumberKeyCode(keyCode)) {
            // 소숫점 자릿수 초과해서 적을려는 시도는 무시
            if (str.indexOf(".") > -1 && str.substring(str.indexOf(".") + 1).length >= cipher) {
                e.preventDefault();
                return false;
            }
            // 최대값 넘을 경우는 해당 최대값으로 제한처리
            const nextChar = String.fromCharCode(e.which);
            if (Number(str + nextChar) > max) {
                e.target.value = max;
                e.preventDefault();
                return false;
            }
            // 0 다음에는 . 만 찍을 수 있도록 처리
            if (str.length === 1 && str.startsWith("0") && nextChar !== ".") {
                e.preventDefault();
                return false;
            }
        }
    }, []);
    return [keyUp, keyDown];
};
