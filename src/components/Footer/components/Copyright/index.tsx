export function Copyright() {
  const initialDate = new Date('2023-08-20')
  const today = new Date()

  return (
    <div className='flex flex-col max-w-screen-2xl m-auto items-center'>
      <small>Copyright C {`${initialDate.getFullYear().toString()} - ${today.getFullYear().toString()}`}</small>
      <small>fescherer | Felipe Scherer</small>
    </div>
  )
}
