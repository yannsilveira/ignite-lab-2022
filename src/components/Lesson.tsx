import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{ slug: string }>()
    const availableDateformatted = format(props.availableAt, "EEEE' - 'd' de 'MMMM' - 'k'h'mm", { locale: ptBR })
    const isActiveLesson = slug === props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">{availableDateformatted}</span>
            <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:bg-green-700 group-hover:text-white transition-colors', {
                'bg-green-500': isActiveLesson,
            })}>
                <header className="flex items-center justify-between">
                    {
                        isPast(props.availableAt) ? (
                            <span className={classNames('text-sm font-medium flex items-center gap-2', {
                                'text-white': isActiveLesson,
                                'text-blue-500': !isActiveLesson,
                            })}>
                                <CheckCircle size={20} color="lightgreen" />
                                Conteúdo liberado
                            </span>
                        ) : (
                            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                                <Lock size={20} color="red" />
                                Em breve
                            </span>
                        )
                    }
                    <span className="text-xs rounded px-2 py=[0.125rem] text-white border border-green-600">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <span className={classNames('font-medium pt-3 block', {
                    'text-white': isActiveLesson,
                    'text-gray-400': !isActiveLesson,
                })}>
                    {props.title}
                </span>
            </div>
        </Link>
    );
}