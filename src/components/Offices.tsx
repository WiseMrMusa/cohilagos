import clsx from 'clsx';

function Office({
    name,
    children,
    invert = false,
}: {
    name: string;
    children: React.ReactNode;
    invert?: boolean;
}) {
    return (
        <address
            className={clsx(
                'text-sm not-italic',
                invert ? 'text-neutral-300' : 'text-neutral-600',
            )}
        >
            <strong className={invert ? 'text-white' : 'text-neutral-950'}>
                {name}
            </strong>
            <br />
            {children}
        </address>
    );
}

export function Offices({
    invert = false,
    ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean; }) {
    return (
        <ul role="list" {...props}>
            <li>
                <Office name="Secretariat" invert={invert}>
                    4th floor, 161 Herbert Macauley Road, 
                    <br />
                    Ebute-Metta, Yaba, Lagos. 
                    <br />
                    (+234) 903 194 7072 
                    <br />
                    cohi@mssnlagos.net
                </Office>
            </li>
            <li>
                <Office name="Usrah" invert={invert}>
                    Zumuratul Islamiyyah Mosque
                    <br />
                    Yaba, Lagos
                </Office>
            </li>
        </ul>
    );
}
