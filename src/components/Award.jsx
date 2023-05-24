import './Award.css'

const Award = ({meqaleninBasligi, meqaleninIconu, meqaleninMetni}) => {
    // console.log(props.meqaleninIconu)
  return (
    <div className='text-white ms-auto kart-bg kart'>
        <img src={meqaleninIconu} alt="" className='icon-olcusu' />
        <h3>{meqaleninBasligi}</h3>
        <p>{meqaleninMetni}</p>
    </div>
  )
}

export default Award