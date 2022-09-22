import { isPast, format} from 'date-fns';
import { CheckCircle, Lock } from 'phosphor-react'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  slug: string;
  avaliableAt: Date;
  type: 'live' | 'class';
}

export function Cards(props: CardProps) {
  const isLessonAvailable = isPast(props.avaliableAt);
  const launchVideoDateFormated = format(props.avaliableAt, "EEEE' • 'd' de 'MMMM' • 'K'h'mm", {locale: ptBR})

  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300">
        {launchVideoDateFormated}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
        <header className="flex items-center justify-between">

          {isLessonAvailable ? (
            <span className="text-sm text-violet-300 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-red-400 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className={props.type === 'live' ? 'text-xs rounded py-[0.125rem] px-2 text-green-300 border border-green-300 font-bold' : 'text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold'}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">
          {props.title}
        </strong>
      </div>
    </Link>
  )
}