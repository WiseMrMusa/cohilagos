
import { FadeIn } from "../uis/FadeIn";
import { Container } from '@/components/Container';

export const Hero = () => {
    return(
        <div>
            <Container className="mt-24 sm:mt-32 md:mt-56">
                <FadeIn className="max-w-3xl">
                    <h1 className="font-display text-5xl font-black tracking-tight text-neutral-950 text-balance sm:text-7xl">
                    COHI, MSSN Lagos State Area Unit
                    </h1>
                   <p className="mt-6 text-xl text-neutral-600 text-balance">
                        We are the community of Muslim Students across 21 Higher Institutions in Lagos State.
                    </p>
                </FadeIn>
            </Container>
        </div>
    )
}