import { isPast, format} from 'date-fns';
import { CheckCircle, Lock } from 'phosphor-react'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface CardProps {
  title: string;
  slug: string;
  avaliableAt: Date;
  type: 'live' | 'class';
}

export function Cards(props: CardProps) {
  const { slug } = useParams<{slug: string}>()

  const isLessonAvailable = isPast(props.avaliableAt);
  const launchVideoDateFormated = format(props.avaliableAt, "EEEE' • 'd' de 'MMMM' • 'K'h'mm", {locale: ptBR})

  const isActiveSlug = slug === props.slug

  return (

    <Link to={`/event/lesson/${props.slug}`} className={isLessonAvailable ? 'group' : 'group pointer-events-none'  } >
      <span className="text-gray-300">
        {launchVideoDateFormated}
      </span>

      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ', {
        'bg-green-500' : isActiveSlug,
      })}>
        <header className="flex items-center justify-between">

          {isLessonAvailable ? (
            <span className={classNames("text-sm font-medium flex items-center gap-2", {
              'text-white' : isActiveSlug,
              'text-violet-300' : !isActiveSlug
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-red-400 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className={classNames('text-xs rounded py-[0.125rem] px-2 text-white border font-bold' ,{
            'border-white' : isActiveSlug,
            'border-green-300' : !isActiveSlug
          })}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className={classNames("mt-5 block",{
          'text-white' : isActiveSlug,
          'text-gray-200' : !isActiveSlug,
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}