import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Contacts = () => {
    return (
        <div className='max-w-[680px]'>
            <div className='flex items-center gap-5'>
                <FontAwesomeIcon icon={faTelegram} color='#d12e2e' width={50} height={50} />
                <FontAwesomeIcon icon={faWhatsapp} color='#d12e2e' width={50} height={50} />
            </div>
            <div className='flex flex-col my-3'>
                <Link className='text-[#e51e4d] text-[30px] font-bold' href="mailto:shop@massagehall.cz">shop@massagehall.cz</Link>
                <Link className='text-[#e51e4d] text-[30px] font-bold' href="tel:420774910918">+420 774 910 918</Link>
                <Link className='text-[#e51e4d] text-[30px] font-bold' href="https://www.google.com/maps/place/Erotick%C3%A9+mas%C3%A1%C5%BEe+Praha+-+Rabbit+Hall+And%C4%9Bl+%7C+erotic+massage/@50.0776312,14.4452852,15z/data=!4m6!3m5!1s0x470b9564a5a3d485:0x2fbf971a8e72b885!8m2!3d50.0701253!4d14.4072137!16s%2Fg%2F11jcn76bhs?entry=ttu">Staropramenná 7, Praha 5</Link>
                <Link className='text-[#e51e4d] text-[30px] font-bold' href="https://www.google.com/maps/place/Erotick%C3%A9+mas%C3%A1%C5%BEe+Praha+-+Rabbit+Hall+And%C4%9Bl+%7C+erotic+massage/@50.0776312,14.4452852,15z/data=!4m6!3m5!1s0x470b9564a5a3d485:0x2fbf971a8e72b885!8m2!3d50.0701253!4d14.4072137!16s%2Fg%2F11jcn76bhs?entry=ttu">Vinohradská, Praha 2</Link>
            </div>
            <p>Každý okamžik může být nádherný a každý výlet ke králíkům – nezapomenutelný. Pokud budete potřebovat poradit s výběrem, neváhejte nám napsat ?</p>
        </div>
    )
}

export default Contacts