import React, {useEffect,useRef} from 'react'
//
// function Input({id, type, value, onChange, onKeyDown}, ref){
//   return(
//     <input
//       id={id}
//       type={type}
//       value={value}
//       onChange={onChange}
//       onKeyDown={onKeyDown}
//       ref={ref}
//     />
//   )
// }
//
// const forwardedInput = React.forwardRef(Input)
//
// export default forwardedInput

function FocusInput({id, type, formValue}) {
  const inputRef = useRef(null)

  useEffect(()=> {
    inputRef.current.focus()
  },[])

  return(
    <div>
    <input
      id={id}
      type={type}
      value={formValue}
      ref={inputRef}
      required
    />
    </div>
  )
}

export default FocusInput
