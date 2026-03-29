import { ContactCard } from "./ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

export default function ContactSection() {
    return (
        <section id="contacto" className="bg-brand-black py-24 px-6 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-pink/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <ContactCard
                    title="Vamos a Conectar"
                    description="¿Tienes preguntas sobre nuestro proceso de elaboración o te interesa tener GingerBug en tu tienda? Nos encantaría saber de ti."
                    contactInfo={[
                        {
                            icon: MailIcon,
                            label: 'Correo Electrónico',
                            value: 'contacto@gingerbug.com',
                        },
                        {
                            icon: PhoneIcon,
                            label: 'WhatsApp',
                            value: '+52 934 102 3068',
                        },
                        {
                            icon: MapPinIcon,
                            label: 'Origen',
                            value: 'Balancán, Tabasco',
                            className: 'col-span-1 sm:col-span-2 lg:col-span-1',
                        }
                    ]}
                >
                    <form className="w-full space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <Label className="text-brand-beige/60 text-xs font-bold uppercase tracking-widest">Tu Nombre</Label>
                                <Input type="text" placeholder="Juan Pérez" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus:ring-brand-pink/50" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label className="text-brand-beige/60 text-xs font-bold uppercase tracking-widest">Correo</Label>
                                <Input type="email" placeholder="juan@ejemplo.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus:ring-brand-pink/50" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="text-brand-beige/60 text-xs font-bold uppercase tracking-widest">Asunto</Label>
                            <Input type="text" placeholder="Consulta Mayorista" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus:ring-brand-pink/50" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="text-brand-beige/60 text-xs font-bold uppercase tracking-widest">Mensaje</Label>
                            <Textarea placeholder="Cuéntanos qué tienes en mente..." className="bg-white/5 border-white/10 text-white placeholder:text-white/20 min-h-[140px] rounded-xl focus:ring-brand-pink/50" />
                        </div>
                        <Button className="w-full bg-brand-pink hover:bg-brand-red text-white font-black text-lg py-7 rounded-2xl shadow-[0_0_30px_rgba(214,69,107,0.3)] transition-all transform hover:-translate-y-1 active:scale-95" type="button">
                            Enviar Mensaje
                        </Button>
                    </form>
                </ContactCard>
            </div>
        </section>
    );
}
